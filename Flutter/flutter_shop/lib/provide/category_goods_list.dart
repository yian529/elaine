import 'package:flutter/material.dart';
import '../model/catetrgory_goods_list.dart';

//ChangeNotifier的混入是不用管理听众
class CategoryGoodsListProvide with ChangeNotifier{

    List<CategoryListData> goodsList = [];

    //点击左侧大类时更换商品列表
    getGoodsList(List<CategoryListData> list) {
      goodsList = list;
      notifyListeners();
    }

    //点击左侧大类时更换商品列表
    getMoreList(List<CategoryListData> list) {
      goodsList.addAll(list);
      notifyListeners();
    }
}