import 'package:flutter/material.dart';
import 'keep_alive_demo.dart';


class KeepAliveDemo extends StatefulWidget {
  //KeepAliveDemo({Key key}) : super(key: key);
  _KeepAliveDemoState createState() => _KeepAliveDemoState();
}

// with混入多重继承
class _KeepAliveDemoState extends State<KeepAliveDemo> with SingleTickerProviderStateMixin{

  TabController _controller;

  @override
  void initState() { 
    super.initState();
    _controller = TabController(length: 3, vsync: this);  
  }

  @override
  void dispose() {
    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
         title: Text('Keep Alive Demo'),
         bottom:TabBar(
           controller: _controller,
           tabs: <Widget>[
             Tab(icon: Icon(Icons.directions_car)),
             Tab(icon: Icon(Icons.directions_transit)),
             Tab(icon: Icon(Icons.directions_bike)),
           ],
         ),
       ),
       body:TabBarView(
        controller: _controller,
        children: <Widget>[
          MyHomePage(),
          MyHomePage(),
          MyHomePage(),
        ],
      )
    );
  }
}