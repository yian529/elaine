import 'package:flutter/material.dart';

void main () => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build (BuildContext context) {
    // var stack = new Stack(
    //   alignment: const FractionalOffset(0.5, 0.9), //中下位置
    //   children: <Widget>[
    //     new CircleAvatar(
    //       backgroundImage: new NetworkImage('http://img5.mtime.cn/mg/2019/08/05/150203.73426357.jpg'),
    //       radius: 100.0,
    //     ),
    //     new Positioned(
    //       top: 10.0,
    //       left: 60.0,
    //       child: new Text("elaine's"),
    //     ),
    //     new Positioned(
    //       bottom: 10.0,
    //       right: 10.0,
    //       child: new Text('elaine 2'),
    //     ),

    //     // new Container(
    //     //   decoration: new BoxDecoration(
    //     //     color:Colors.lightBlue
    //     //   ),
    //     //   padding: EdgeInsets.all(5.0),
    //     //   child: new Text('elaine'),
    //     // )
    //   ],
    // );

    var card = new Card(
      child: Column(
        children: <Widget>[
          ListTile(
            title: new Text(
              '吉林市昌邑区',
              style: TextStyle(
                fontWeight: FontWeight.w500
              )),
              subtitle: new Text('技术群：67897631'),
              leading: new Icon(Icons.account_box, color:Colors.lightBlue),
          ),
          new Divider(),
          ListTile(
            title: new Text(
              '北京市海淀区',
              style: TextStyle(
                fontWeight: FontWeight.w500
              )),
              subtitle: new Text('中国科技大学'),
              leading: new Icon(Icons.account_box, color:Colors.lightBlue),
          ),
          new Divider(),
          ListTile(
            title: new Text(
              '河南省样式办公楼',
              style: TextStyle(
                fontWeight: FontWeight.w500
              )),
              subtitle: new Text('elaine'),
              leading: new Icon(Icons.account_box, color:Colors.lightBlue),
          )
        ],
      ),
    );

    return MaterialApp(
      title: 'Row Widget Demo',
      home: Scaffold(
        appBar: new AppBar(
          title: new Text('Row/Column布局'),
        ),
        body:Center(
          child: card,
        ),

        // body: Center(
        //   child: new Column(
        //     crossAxisAlignment: CrossAxisAlignment.center, //相当于column，长度为内部文字长度
        //     mainAxisAlignment: MainAxisAlignment.center,   //column 布局， 垂直方向为主轴
        //     children:<Widget>[
        //       Expanded(child: Text('i am elaine')),
        //       Text('i love coding'),
        //       Text('加油')
        //     ],
        //   ),
        // ), 

        // body: new Row(
        //   children: <Widget>[
        //     Expanded(child: new RaisedButton(
        //       onPressed: () {},
        //       color: Colors.redAccent,
        //       child: new Text('红色按钮'),
        //     )),
        //     Expanded(child: new RaisedButton(
        //       onPressed: () {},
        //       color: Colors.orangeAccent,
        //       child: new Text('橙色按钮'),
        //     )),
        //     Expanded(child: new RaisedButton(
        //       onPressed: () {},
        //       color: Colors.blueAccent,
        //       child: new Text('按钮'),
        //     ))
        //   ],
        // ),
      ),
    );
  }
}