import 'package:flutter/material.dart';
import '../service/service_method.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'dart:convert';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with AutomaticKeepAliveClientMixin{
  @override
  bool get wantKeepAlive => true;

  String homePageContent = "正在获取数据";
  int page =1 ;
  List<Map> hotGoodsList = [];
  GlobalKey<RefreshFooterState> _footerKey = new GlobalKey<RefreshFooterState>();

  @override
  void initState() {
    print("home page页面家在");
    // getHomePageContent().then((res) {
    //   setState(() {
    //     homePageContent = res.toString();
    //   });
    // });
    //_getHotGoods();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var formData = {
      'lon':'115.02932',
      'lat':'35.76189'
    };
    return Container(
       child: Scaffold(
         appBar: AppBar(
           title: Text("百姓生活+"),
         ),
        //  body: SingleChildScrollView(
        //    child: Text(homePageContent),
        //  ),
        body: FutureBuilder(
          future: request('homePageContent',formData:formData),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              var data = json.decode(snapshot.data.toString());
              List<Map> swiper = (data['data']['slides'] as List).cast();
              List<Map> navigatorList = (data['data']['category'] as List).cast();
              String adPicture = data['data']['advertesPicture']['PICTURE_ADDRESS'];
              String leaderImage = data['data']['shopInfo']['leaderImage'];
              String leaderPhone = data['data']['shopInfo']['leaderPhone'];
              List<Map> recommendList = (data['data']['recommend'] as List).cast();
              String floor1Title = data['data']['floor1Pic']['PICTURE_ADDRESS'];
              String floor2Title = data['data']['floor2Pic']['PICTURE_ADDRESS'];
              String floor3Title = data['data']['floor3Pic']['PICTURE_ADDRESS'];
              List<Map> floor1 = (data['data']['floor1'] as List).cast();
              List<Map> floor2 = (data['data']['floor2'] as List).cast();
              List<Map> floor3 = (data['data']['floor3'] as List).cast();

              return EasyRefresh(
                refreshFooter: ClassicsFooter(
                  key: _footerKey,
                  bgColor: Colors.white,
                  textColor: Colors.pink,
                  moreInfoColor: Colors.pink,
                  showMore: true,
                  noMoreText: '',
                  moreInfo: "加载中",
                  loadReadyText: "上拉加载",
                ),
                child: ListView(
                  physics: BouncingScrollPhysics(),
                  children: <Widget>[
                    SwiperDiy(swiperDateList: swiper),
                    TopNavigator(navigatorList: navigatorList),
                    AdBanner(adPicture: adPicture),
                    LeaderPhone(leaderImage: leaderImage, leaderPhone: leaderPhone),
                    Recommend(recommendList: recommendList),
                    FloorTitle(picture_address:floor1Title),
                    FloorContent(floorGoodsList: floor1),
                    FloorTitle(picture_address:floor2Title),
                    FloorContent(floorGoodsList: floor2),
                    FloorTitle(picture_address:floor3Title),
                    FloorContent(floorGoodsList: floor3),
                    _hotGoods()
                  ],
                ),
                loadMore: () async {
                  print("开始加载更多。。。。。");
                  var formPage={'page': page};
                  await request('homePageBelowConten',formData:formPage).then((val){
                    var data=json.decode(val.toString());
                    List<Map> newGoodsList = (data['data'] as List ).cast();
                    setState(() {
                      hotGoodsList.addAll(newGoodsList);
                      page++; 
                    });
                  });
                },
              );
            } else {
              return Center(
                child: Text('加载中'), //Text('加载中',fontSize:ScreenUtil().setSp(28,false))设置字号28，false不随系统字体大小改变
              );
            }
          },
        ),
       ),
    );
  }
  // 火爆专区标题 ，变量命名的方式
  Widget hotTitle = Container(
    margin: EdgeInsets.only(top: 10.0),
    alignment: Alignment.center,
    color: Colors.transparent,
    padding: EdgeInsets.all(5.0),
    child: Text("火爆专区"),
  );

  //火爆专区子项
  Widget _wrapList(){
  
    if(hotGoodsList.length!=0){
       List<Widget> listWidget = hotGoodsList.map((val){
  
        return InkWell(
          onTap:(){print('点击了火爆商品');},
          child: Container(
            width: ScreenUtil().setWidth(372),
            color:Colors.white,
            padding: EdgeInsets.all(5.0),
            margin:EdgeInsets.only(bottom:3.0),
            child: Column(
              children: <Widget>[
                Image.network(val['image'],width: ScreenUtil().setWidth(375),),
                Text(
                  val['name'],
                  maxLines: 1,
                  overflow:TextOverflow.ellipsis ,
                  style: TextStyle(color:Colors.pink,fontSize: ScreenUtil().setSp(26)),
                ),
                Row(
                  children: <Widget>[
                    Text('￥${val['mallPrice']}'),
                    Text(
                      '￥${val['price']}',
                      style: TextStyle(color:Colors.black26,decoration: TextDecoration.lineThrough),
                      
                    )
                  ],
                )
              ],
            ), 
          )
          
        );

      }).toList();

      return Wrap( //比gridView效率要高
        spacing: 2,
        children: listWidget,
      );
    }else{
      return Text(' ');
    }
  }

  Widget _hotGoods() {
    return Container(
      child: Column(
        children: <Widget>[
          hotTitle,
          _wrapList()
        ],
      ),
    );
  }  
}

//首页轮播组件
class SwiperDiy extends StatelessWidget {
  final List swiperDateList;
  SwiperDiy({this.swiperDateList});

  @override
  Widget build(BuildContext context) {
    print("设置像素密度:${ScreenUtil.pixelRatio}");
    print("设置高:${ScreenUtil.screenHeight}");
    print("设置宽:${ScreenUtil.screenWidth}");
    return Container(
      height: ScreenUtil().setHeight(333),
      width: ScreenUtil().setWidth(750),
      child: Swiper(
        itemBuilder: (BuildContext context, int index) {
          return Image.network("${swiperDateList[index]['image']}",fit: BoxFit.fill);
        },
        itemCount: swiperDateList.length,
        pagination: SwiperPagination(),
        autoplay: true,
      ),
    );
  }
}

//顶部导航列表
class TopNavigator extends StatelessWidget {
  final List navigatorList;
  TopNavigator({Key key, this.navigatorList}) : super(key: key);

  Widget _gridViewItemUI(BuildContext context, item) {
    return InkWell(
      onTap: () {
        print("点击了导航");
      },
      child: Column(
        children: <Widget>[
          Image.network(item['image'],width: ScreenUtil().setWidth(95)),
          Text(item['mallCategoryName'])
        ],
      ),
    );
  }
  @override
  Widget build(BuildContext context) {
    if (this.navigatorList.length > 10) {
      this.navigatorList.removeLast();
    }
    return Container(
      height: ScreenUtil().setHeight(320),
      padding: EdgeInsets.all(3.0),
      child: GridView.count(
        physics: NeverScrollableScrollPhysics(),//禁止下来回弹
        crossAxisCount: 5,
        padding: EdgeInsets.all(5.0),
        children: navigatorList.map((item) {
          return _gridViewItemUI(context, item);
        }).toList() 
      ),
    );
  }
}

class AdBanner extends StatelessWidget {
  final String adPicture;
  const AdBanner({Key key, this.adPicture}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Image.network(adPicture),
    );
  }
}

//店长电话
class LeaderPhone extends StatelessWidget {
  final String leaderImage; //店长头像
  final String leaderPhone; //店长电话
  const LeaderPhone({Key key, this.leaderImage, this.leaderPhone}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    print(leaderPhone);
    return Container(
      child: InkWell(
        onTap: _launcherUrl,
        child: Image.network(leaderImage),
      ),
    );
  }

  void _launcherUrl () async{
    //拨打模拟器下不能访问，真机尝试OK， 打开网址正常work
    String url = 'tel:'+leaderPhone;
    print(url);
    String url2 = 'http://manage.yeahmobi.com/logout?redirect=%2Flogout%3Fredirect%3D%2Flogout%3Fredirect%3D%2FdashBoard';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw "url不能进行访问,异常";
    }
  }
}

//商品推荐模块
class Recommend extends StatelessWidget {
  final List recommendList;
  const Recommend({Key key,this.recommendList}) : super(key: key);
  //头部标题
  Widget _titleWidget() {
    return Container(
      alignment: Alignment.centerLeft,
      padding: EdgeInsets.fromLTRB(10.0, 2.0, 0, 5.0),
      decoration: BoxDecoration(
        color: Colors.white,
        border:Border(
          bottom: BorderSide(width: 1,color: Colors.black12) //模拟器不支持宽是0.5
        )
      ),
      child: Text(
        "商品推荐",
        style: TextStyle(color: Colors.pink),
      ),
    );
  }
  
  //推荐单独项
  Widget _item(index) {
    return InkWell(
      onTap: () {},
      child: Container(
        height: ScreenUtil().setHeight(300),
        width: ScreenUtil().setWidth(250),
        padding: EdgeInsets.all(8.0),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border(
            left: BorderSide(width: 1, color: Colors.black12)
            //right: BorderSide(width: ,color: )
          ),
        ),
        child: Column(
          children: <Widget>[
            Image.network(recommendList[index]['image']),
            Text('¥${recommendList[index]['mallPrice']}'),
            Text('¥${recommendList[index]['price']}',style: TextStyle(
              decoration: TextDecoration.lineThrough,
              color: Colors.grey
            )),
          ],
        ),
      ),
    );
  }

  //横向列表
  Widget _recommentList () {
    return Container(
      height: ScreenUtil().setHeight(300),
      margin: EdgeInsets.only(top: 10.0),
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: recommendList.length,
        itemBuilder: (context, index) {
          return _item(index);
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: ScreenUtil().setHeight(380),
      margin: EdgeInsets.only(top: 10.0),
      child: Column(
        children: <Widget>[
          _titleWidget(),
          _recommentList()
        ],
      ),
    );
  }
}

//楼层标题
class FloorTitle extends StatelessWidget {
  final String picture_address;
  const FloorTitle({Key key, this.picture_address}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8.0),
      child: Image.network(picture_address),
    );
  }
}
//楼层商品组件
class FloorContent extends StatelessWidget {
  final List floorGoodsList;

  FloorContent({Key key, this.floorGoodsList}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          _firstRow(),
          _otherGoods()
        ],
      ),
    );
  }

  Widget _firstRow(){
    return Row(
      children: <Widget>[
        _goodsItem(floorGoodsList[0]),
        Column(
          children: <Widget>[
           _goodsItem(floorGoodsList[1]),
           _goodsItem(floorGoodsList[2]),
          ],
        )
      ],
    );
  }

  Widget _otherGoods(){
    return Row(
      children: <Widget>[
       _goodsItem(floorGoodsList[3]),
       _goodsItem(floorGoodsList[4]),
      ],
    );
  }

  Widget _goodsItem(Map goods){

    return Container(
      width:ScreenUtil().setWidth(375),
      child: InkWell(
        onTap:(){print('点击了楼层商品');},
        child: Image.network(goods['image']),
      ),
    );
  }

}

//