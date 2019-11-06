import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import '../service/service_method.dart';
import '../model/category.dart';
import 'dart:convert';
import 'package:provide/provide.dart';
import '../provide/child_category.dart';
import '../model/catetrgory_goods_list.dart';
import '../provide/category_goods_list.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:fluttertoast/fluttertoast.dart';

class CategoryPage extends StatefulWidget {
  CategoryPage({Key key}) : super(key: key);

  _CategoryPageState createState() => _CategoryPageState();
}

class _CategoryPageState extends State<CategoryPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("商品分类"),
      ),
      body:Container(
        child: Row(
          children: <Widget>[
            LeftCategoryNav(),
            Column(
              children: <Widget>[
                RightcategoryNav(),
                CategoryGoodsList()
              ],
            )
          ],
        ),
      )
    );
  }
}

//左侧大类导航
class LeftCategoryNav extends StatefulWidget {
  LeftCategoryNav({Key key}) : super(key: key);

  _LeftCategoryNavState createState() => _LeftCategoryNavState();
}

class _LeftCategoryNavState extends State<LeftCategoryNav> {
  List list = [];
  int listIndex = 0;

  @override
  void initState() {
    // TODO: implement initState
    _getCategory();
    _getGoodsList();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
       child: Container(
         width: ScreenUtil().setWidth(180),
         decoration: BoxDecoration(
           border: Border(
             right: BorderSide(width: 1, color: Colors.black12)
           )
         ),
         child: ListView.builder(
           itemCount: list.length,
           itemBuilder: (context, index) {
             return _leftInkwell(index);
           }
         ),
       ),
    );
  }

  Widget _leftInkwell(index) {
    bool isClick = false;
    isClick = (index == listIndex) ? true : false;
    
    return InkWell(
      onTap: () {
        setState(() {
          listIndex = index;
        });
        var childList = list[index].bxMallSubDto;
        String categoryId = list[index].mallCategoryId;
      
        Provide.value<ChildCategory>(context).getChildCategory(childList,categoryId);
        _getGoodsList(categoryId:categoryId); //可选参数在传递参数时需要以key:value的方式传递
      },
      child: Container(
        height: ScreenUtil().setHeight(100),
        padding: EdgeInsets.only(left: 10,top:20),
        decoration: (
          color: isClick ? Color.fromRGBO(236, 236, 236, 1.0) :Colors.white,
          border: Border(
            bottom: BorderSide(width: 1, color: Colors.black12)
          )
        ),
        child: Text(list[index].mallCategoryName, style: TextStyle(fontSize: ScreenUtil().setSp(28))),
      ),
    );
  }

  void _getCategory() async {
    await request('getCategory').then((val) {
      var data = json.decode(val.toString());
      CategoryModel category = CategoryModel.fromJson(data);
      setState(() {
        list = category.data;
      });
      String categoryId = list[0].mallCategoryId;
      Provide.value<ChildCategory>(context).getChildCategory(list[0].bxMallSubDto,categoryId);
    });
  }

  //获取商品列表数据
  void _getGoodsList({String categoryId}) async{
    var data = {
      "categoryId":categoryId == null ? "4" : categoryId,
      "categorySubId":"",
      "page":"1"
    };
    await request("getMallGoods", formData:data).then((val) {
      var data = json.decode(val.toString());
      CategoryGoodsListModel goodsList = CategoryGoodsListModel.fromJson(data);
      Provide.value<CategoryGoodsListProvide>(context).getGoodsList(goodsList.data);

      print(">>>>>>>>>>:${goodsList.data[0].goodsName}");
    });
  }
}

// 右侧顶部小类导航
class RightcategoryNav extends StatefulWidget {
  RightcategoryNav({Key key}) : super(key: key);

  _RightcategoryNavState createState() => _RightcategoryNavState();
}

class _RightcategoryNavState extends State<RightcategoryNav> {

  @override
  Widget build(BuildContext context) {
  
    return Container(
      // child: Text('${childCategory.childCategoryList.length}'),
    
      child: Provide<ChildCategory>(
        builder: (context,child,childCategory){
          return Container(
            height: ScreenUtil().setHeight(80),
            width: ScreenUtil().setWidth(570),
            decoration: BoxDecoration(
              color: Colors.white,
              border: Border(
                bottom: BorderSide(width: 1,color: Colors.black12)
              )
            ),
            child:ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: childCategory.childCategoryList.length,
              itemBuilder: (context,index){
                return _rightInkWell(index, childCategory.childCategoryList[index]);
              },
            )
          );
        },
      )
    );
  }
  
  Widget _rightInkWell(index, BxMallSubDto item){
    bool isclicked = false;
    isclicked = (index == Provide.value<ChildCategory>(context).childIndex) ? true: false;

    return InkWell(
      onTap: (){
        _getGoodsList(item.mallSubId);
        Provide.value<ChildCategory>(context).changeChildIndex(index,item.mallSubId);
      },
      child: Container(
        padding:EdgeInsets.fromLTRB(5.0,10.0,5.0,10.0),
        child: Text(
          item.mallSubName,
          style: TextStyle(
            fontSize:ScreenUtil().setSp(28),
            color: isclicked ? Colors.pink: Colors.black
          ),
        ),
      ),
    );
  }

  void _getGoodsList(String categorySubId) {
    String categoryId = Provide.value<ChildCategory>(context).categoryId;
    var data = {
      "categoryId":categoryId,
      "categorySubId":categorySubId,
      "page":"1"
    };
    request("getMallGoods", formData:data).then((val) {
      var data = json.decode(val.toString());
      CategoryGoodsListModel goodsList = CategoryGoodsListModel.fromJson(data);
      if (goodsList.data == null) {      
        Provide.value<CategoryGoodsListProvide>(context).getGoodsList([]);
      } else {
        Provide.value<CategoryGoodsListProvide>(context).getGoodsList(goodsList.data);
      }

      print(">>>>>>>>>>:${goodsList.data[0].goodsName}");
    });
  }
}

//商品列表
class CategoryGoodsList extends StatefulWidget {
  CategoryGoodsList({Key key}) : super(key: key);

  _CategoryGoodsListState createState() => _CategoryGoodsListState();
}

class _CategoryGoodsListState extends State<CategoryGoodsList> {
  
  GlobalKey<RefreshFooterState> _footerKey = new GlobalKey<RefreshFooterState>();
  var scrollController = new ScrollController();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Provide<CategoryGoodsListProvide>(
      builder: (context, child, data) {
        //ListView必须设置宽高，否则回报错，但是设置高度不合适可能导致溢出，使用expand解决
        //expand 继承与flexialbe组件,可伸缩，防止溢出报错
        try {
          if (Provide.value<ChildCategory>(context).page == 1) {
            //列表位置置顶
            scrollController.jumpTo(0.0);
          }
        } catch (e) {
          print("进入页面，第一次初始化：${e}");
        }
        if (data.goodsList.length <= 0) {
          return Text("暂时没有数据");
        } else {
          return Expanded(
            child: Container(
              width: ScreenUtil().setWidth(570),
              height: ScreenUtil().setHeight(1200),
              child: EasyRefresh(
                refreshFooter: ClassicsFooter(
                  key: _footerKey,
                  bgColor: Colors.white,
                  textColor: Colors.pink,
                  moreInfoColor: Colors.pink,
                  showMore: true,
                  noMoreText: Provide.value<ChildCategory>(context).noMoreText,
                  moreInfo: "加载中",
                  loadReadyText: "上拉加载",
                ),
                child: ListView.builder(
                  controller: scrollController,
                  itemCount: data.goodsList.length,
                  itemBuilder: (context, index) {
                    return _listItemWidget(data.goodsList, index);
                  },
                ),
                loadMore:() async {
                  print("上拉加载更多");
                  _getMoreList();
                }
              
              )
              
            )
          );
        }
        
      },
    );
  }
  

  void _getMoreList() {
    Provide.value<ChildCategory>(context).addPage();
    String categoryId = Provide.value<ChildCategory>(context).categoryId;
    String categorySubId = Provide.value<ChildCategory>(context).categorySubId;
    int page = Provide.value<ChildCategory>(context).page;
    var data = {
      "categoryId":categoryId,
      "categorySubId":categorySubId,
      "page":page
    };
    request("getMallGoods", formData:data).then((val) {
      var data = json.decode(val.toString());
      CategoryGoodsListModel goodsList = CategoryGoodsListModel.fromJson(data);
      if (goodsList.data == null) {      
        Fluttertoast.showToast(
          msg: "已经到底了",
          toastLength: Toast.LENGTH_SHORT, // 轻提示插件的大小，长/短
          gravity: ToastGravity.CENTER, // 提示的位置，顶部/中间/底部
          timeInSecForIos: 1, // 提示的时常
          backgroundColor: Colors.red, // 提示的背景颜色
          textColor: Colors.white, // 提示的文字颜色
          fontSize: 16.0 // 提示文字的字号
        );
        Provide.value<ChildCategory>(context).changeNoMore('没有更多了');
      } else {
        Provide.value<CategoryGoodsListProvide>(context).getMoreList(goodsList.data);
      }
    });
  }
  
  //商品图片
  Widget _goodsImage(List newList, index) {
    return Container(
      width: ScreenUtil().setWidth(200),
      child: Image.network(newList[index].image),
    );
  }
  //商品名称
  Widget _goodsName(List newList, index) {
    return Container(
      width: ScreenUtil().setWidth(370),
      child: Text(
        newList[index].goodsName,
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(fontSize: ScreenUtil().setSp(28)),
      ),
    );
  }
  //商品价格
  Widget _goodsPrice(List newList, index) {
    return Container(
      width: ScreenUtil().setWidth(370),
      margin: EdgeInsets.only(top: 30),
      child: Row(
        children: <Widget>[
          Text(
            "价格：${newList[index].presentPrice}",
            style: TextStyle(fontSize: ScreenUtil().setSp(30),color: Colors.pink),
          ),
          Text(
            "${newList[index].oriPrice}",
            style: TextStyle(color: Colors.black26,decoration: TextDecoration.lineThrough),
          ),
        ],
      ),
    );
  }
  //组装每一个商品item
  Widget _listItemWidget(List newList, index) {
    return InkWell(
      onTap: () {
      },
      child: Container(
        padding: EdgeInsets.only(top: 5.0,bottom: 5.0),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border(
            bottom: BorderSide(width: 1.0, color: Colors.black12)
          )
        ),
        child: Row(
          children: <Widget>[
            _goodsImage(newList,index),
            Column(
              children: <Widget>[
                _goodsName(newList,index),
                _goodsPrice(newList,index)
              ],
            )
          ],
        ),
      ),
    );
  }

}

//

//


//