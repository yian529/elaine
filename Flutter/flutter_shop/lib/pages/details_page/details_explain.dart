import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class DetailsExplain extends StatefulWidget {
  DetailsExplain({Key key}) : super(key: key);

  _DetailsExplainState createState() => _DetailsExplainState();
}

class _DetailsExplainState extends State<DetailsExplain> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      margin: EdgeInsets.only(top: 10.0),
      width: ScreenUtil().setWidth(750),
      padding: EdgeInsets.all(10.0),
      child: Text(
        '说明: > 极速送达 > 正品保证 ',
        style: TextStyle(
          color: Colors.red,
          fontSize: ScreenUtil().setSp(30)
          )
        ),
    );
  }
}
