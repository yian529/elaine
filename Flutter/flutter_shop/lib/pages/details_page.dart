import 'package:flutter/material.dart';
import 'package:provide/provide.dart';
import '../provide/details_info.dart';
class DeatilsPage extends StatelessWidget {
  final String goodsId;
  const DeatilsPage({Key key, this.goodsId}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context); //返回上一级页面
          },
        ),
        title: Text('商品详细页'),
      ),
      body: FutureBuilder(
        future: _getBackInfo(context),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return Container(
              child: Column(
                children: <Widget>[
                  Text('商品id:${goodsId}'),
                ],
              ),
            );
          } else {
            return Text('加载中');
          }
        },
      ),
    );
  }

  Future _getBackInfo(BuildContext context) async {
    await Provide.value<DetailsInfoProvide>(context).getGoodsInfo(goodsId);
    //print("加载完成");
    return  '完成加载';
  }
}