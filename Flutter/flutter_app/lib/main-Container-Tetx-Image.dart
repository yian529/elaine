 //分号必须加，material是一个UI库，material.io
import 'package:flutter/material.dart';

//主函数（入口函数）
void main() => runApp(MyApp());

// 声明MyApp类
class MyApp extends StatelessWidget{
  //重写build方法
  @override
  Widget build(BuildContext context) {
    //返回一个Material风格的组件
    return MaterialApp( 
      title: 'welcome',
      //home相当于窗口的主体
      home: Scaffold(
        appBar: AppBar(
          title: Text('welcome to flutter'),
        ),
        body:Center( //Center垂直位置居中
          child: Container(
            child: new Image.network(
              'https://avatar-static.segmentfault.com/140/013/1400134015-59ae69cde4e89_big64',
              //fit:BoxFit.cover,
              // color: Colors.greenAccent,
              // colorBlendMode: BlendMode.darken,
              repeat: ImageRepeat.repeatX,
            ),
            width: 300.0,
            height: 200.0,
            color: Colors.lightBlue,
          ),



          // child: Container(
          //   child: Text(
          //     'This is test for Container',
          //     style: TextStyle(
          //       fontSize: 40.0
          //     ),
          //   ),
          //   alignment: Alignment.topLeft, //Alignment:容器属性的上下左右位置。
          //   width: 500.0,
          //   height: 400.0,
          //   //color: Colors.lightBlue,
          //   padding: const EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 50.0), //padding
          //   margin: const EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),  //margin
          //   //decoration是 container 的修饰器，主要的功能是设置背景和边框。
          //   decoration:new BoxDecoration(
          //     gradient:const LinearGradient(
          //       colors:[Colors.lightBlue,Colors.greenAccent,Colors.purple]
          //     ),
          //     border: Border.all(width: 2.0, color: Colors.red)
          //   )
          // ),


          // child: Text(
          //   'This is first demo of elaine,This is first demo of elaineThis is first demo of elaineThis is first demo of elaine',
          //   textAlign: TextAlign.center, //水平位置
          //   maxLines: 1, //最多显示行数
          //   overflow: TextOverflow.ellipsis, //TextOverflow.clip和显示一行没有区别,TextOverflow.ellipsis超出部分显示...，TextOverflow.fade从上往下变灰的渐变效果
          //   style: TextStyle(
          //     fontSize: 25.0, //需要以浮点数表示
          //     color: Color.fromARGB(255, 255, 125, 125),
          //     decoration: TextDecoration.underline,
          //     decorationStyle: TextDecorationStyle.dashed
          //   ),
          // ),
        )
      ),
    );
  }
}
