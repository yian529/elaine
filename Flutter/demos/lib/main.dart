import 'package:flutter/material.dart';
import 'bottom_navigation_widget.dart';
import 'bottom_appBar_demo.dart';
import 'pages.dart';
import 'grosted_glass_demo.dart';
import 'keep_alive.dart';
import 'seacrh_bar_demo.dart';
import 'warp_demo.dart';
import 'grid_view_demo.dart';
import 'list_view_demo.dart';
import 'text_widget_demo.dart';
import 'BasicAppBar.dart';

void main () => runApp(MyApp(
  //items: new List<String>.generate(1000, (i) => "item $i")
));

class MyApp extends StatelessWidget {
  
  final List<String> items;
  MyApp({Key key, @required this.items}):super(key:key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //底部导航和切换效果
      title: 'Flutter bottomNavigatorBar',
      theme: ThemeData.light(),
      home:BasicAppBarSample(),

      //  //不规则底部导航
      // title: "Flutter Demo",
      // theme: ThemeData(
      //   primarySwatch: Colors.lightBlue
      // ),
      //
      // home: BottomAppBarDemo(),

      //过渡动画
      // title: 'Flutter demo',
      // theme: ThemeData(
      //   primarySwatch: Colors.blue
      // ),
      // home:FirstPage(),

      // //磨砂玻璃效果
      // title: 'Flutter filter',
      // theme: ThemeData(
      //   primarySwatch: Colors.blue
      // ),
      // home: Scaffold(
      //   body: FrostedClassDemo(),
      // ),

      // //保持状态
      // title: "Flutter Demo",
      // theme: ThemeData(
      //   primarySwatch: Colors.pink
      // ),
      // home: KeepAliveDemo()

      // //搜索
      // title:"Demo for search",
      // theme: ThemeData.light(),
      // home: SearchBarDemo(),

      // //流式布局
      // title:"Demo for wrap流式布局",
      // theme: ThemeData.light(),
      // home: WarpDemo(),

      // //GridView
      // title:"Demo for GridView",
      // theme: ThemeData.light(),
      // home: GridViewDemo(),

      // // text widget
      // title: "text widget demo",
      // theme: ThemeData.dark(),
      // home: TextWidgetDemo(),
      
    // listview
    
    // title: "ListView  demo",
    // theme: ThemeData.light(),
    // home: ListViewDemo(),
    );
  }
}

