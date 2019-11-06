import 'package:flutter/material.dart';
import 'package:provide/provide.dart';
import '../../provide/details_info.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class DetailTopArea extends StatelessWidget {
  const DetailTopArea({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Provide<DetailsInfoProvide>(
        builder: (context, child, val) {
          var goodsInfo = Provide.value<DetailsInfoProvide>(context).goodsInfo.data.goodInfo;
          if (goodsInfo != null) {
              return Container(
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    _goodsImage(goodsInfo.image1),
                    _goosName(goodsInfo.goodsName),
                    _goodsNum(goodsInfo.goodsId),
                    _goodPrice(goodsInfo.presentPrice, goodsInfo.oriPrice)
                  ],
                ),
              );
          } else {
            return Text('正在加载中');
          }
        },
      )
    );
  }

  // 商品图片
  Widget _goodsImage(url) {
    return Image.network(
      url,
      width: ScreenUtil().setWidth(740),
    );
  }
  // 商品名称
  Widget _goosName(name) {
    return Container(
      width: ScreenUtil().setWidth(740),
      padding: EdgeInsets.only(left: 15),
      child: Text(
        name,
        style: TextStyle(fontSize: ScreenUtil().setSp(30)),
      )
    );
  }

  // 商品编号
  Widget _goodsNum(number) {
    return Container(
      width: ScreenUtil().setSp(730),
      padding: EdgeInsets.only(left: 15.0),
      margin: EdgeInsets.only(top:8.0),
      child: Text(
        '编号：${number}',
        style: TextStyle(color: Colors.black12),
      ),
    );
  }

  // 商品价格
  Widget _goodPrice(currentPrice, oldPrice) {
    return Container(
      child: Row(
        children: <Widget>[
          Text('价格：${currentPrice}'),
          Text('${oldPrice}',
          style: TextStyle(decoration: TextDecoration.lineThrough),
          )
        ],
      ),
    );
  }


}