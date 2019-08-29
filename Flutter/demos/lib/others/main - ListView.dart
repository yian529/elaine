import 'package:flutter/material.dart';

void main () => runApp(MyApp(
  items: new List<String>.generate(1000, (i) => "item $i")
));

class MyApp extends StatelessWidget{
  final List<String> items;
  MyApp({Key key, @required this.items}):super(key:key);
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "Elaine's flutter demo",
      home: Scaffold(
        appBar: new AppBar(
          title: new Text('Listview widget'),
        ),
        body: new ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            return new ListTile(
              title: new Text('${items[index]}'),
            );
          },
        ),
        // body: Center(
        //   child: Container(
        //     height: 200.0,
        //     child: MyList(),
        //   ),
        // ),

        //列表组件
        // body: new ListView(
        //   children: <Widget>[
        //     new ListTile(
        //       leading: new Icon(Icons.perm_camera_mic),
        //       title: new Text('perm_camera_mic'),
        //     ),
        //     new ListTile(
        //       leading: new Icon(Icons.perm_device_information),
        //       title: new Text('perm_device_information'),
        //     ),
        //     new Image.network('https://user-gold-cdn.xitu.io/2019/5/31/16b0ca4a5078c1f2?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1'),
        //     new Image.network('https://user-gold-cdn.xitu.io/2019/6/3/16b1977c2f3a0ed0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1')
        //   ],
        // )
      ),
    );
  }
}


class MyList extends StatelessWidget{
    @override
    Widget build (BuildContext context){
      return ListView (
        scrollDirection: Axis.horizontal, //横向列表
        children: <Widget>[
          new Container(
            width: 180.0,
            color: Colors.lightBlue,
          ),
          new Container(
            width: 180.0,
            color: Colors.amber,
          ),
          new Container(
            width: 180.0,
            color: Colors.deepOrange,
          ),
          new Container(
            width: 180.0,
            color: Colors.deepPurple,
          ),
        ],
      );
    }
}