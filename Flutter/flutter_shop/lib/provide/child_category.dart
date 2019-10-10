import 'package:flutter/material.dart';
import '../model/category.dart';

//ChangeNotifier的混入是不用管理听众
class ChildCategory with ChangeNotifier{

    List<BxMallSubDto> childCategoryList = [];
    int childIndex = 0; //子类高亮索引
    String categoryId = '4'; //大类id, 默认白酒id是4
    String categorySubId = "";// 子类id
    int page = 1; //列表页数
    String noMoreText = '';//没有更多数据的展示文字

    getChildCategory(List<BxMallSubDto> list, String id){
      page = 1;  //切换大类 page置为1
      childIndex = 0; //每次点击左侧大类时，右侧顶部小类索引都需要置0
      categorySubId = ''; //每次点击左侧大类时 ，右侧子类id默认为空
      categoryId = id;
      BxMallSubDto all = BxMallSubDto();
      all.mallSubId = '';
      all.mallCategoryId = "00";
      all.comments = 'null';
      all.mallSubName = "全部";
      childCategoryList = [all];
      childCategoryList.addAll(list);
      notifyListeners();
    }

    //改变子类索引
    changeChildIndex(index,String id) {
      page = 1;
      noMoreText = '';
      childIndex = index;
      categorySubId = id;
      notifyListeners();
    }

    //增加page
    addPage() {
      page++;
    }

    //改变nomoretext
    changeNoMore(String text) {
      noMoreText = text;
      notifyListeners();
    }
}