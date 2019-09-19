import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import '../config/httpHeaders.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String showText = '还没有请求数据';
  @override
  Widget build(BuildContext context) {
    return Container(
       child: Scaffold(
         appBar: AppBar(
           title: Text("远程请求数据"),
         ),
         body: SingleChildScrollView(
           //controller: sho,
           child: Column(
             children: <Widget>[
               RaisedButton(
                 onPressed: () {
                   _jike();
                 },
                 child: Text("请求数据"),
               ),
               Text(showText)
             ],
           ),
         ),
       ),
    );
  }
  void _jike () {
    print("开始请求数据......");
    getHttp().then((res) {
      setState(() {
        showText = res['data'].toString();
      });
    });
  }
  Future getHttp () async {
    try {
      Response response;
      Dio dio = new Dio();
      dio.options.headers = httpHeaders;
      response = await dio.get("https://time.geekbang.org/serv/v1/column/newAll");
      print(response);
      return response.data;
    } catch (e) {
      return print(e);
    }
  }
}