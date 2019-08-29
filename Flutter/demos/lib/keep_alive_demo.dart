import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  //MyHomePage({Key key}) : super(key: key);

  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with AutomaticKeepAliveClientMixin{
  int _counter = 0;

  //重写keepAlive 为ture ，就是可以有记忆功能了。
  @override
  bool get wantKeepAlive => true; 

  void _incrementCounter() {
    setState(() {
     _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       body: Center(
         child: Column(
           mainAxisAlignment:MainAxisAlignment.center,
           children: <Widget>[
             Text('点一次增加一个数字'),
             Text(
               '$_counter',
               style: Theme.of(context).textTheme.display1,
             )
           ],
         ),
       ),
       floatingActionButton: FloatingActionButton(
         onPressed: _incrementCounter,
         tooltip: "Increment",
         child: Icon(Icons.add),
       ),
    );
  }
}