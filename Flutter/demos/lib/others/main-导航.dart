import 'package:flutter/material.dart';

void main () {
  runApp(MaterialApp(
    title: '导航演示01',
    home: new FirstSreen(),
  ));
}

class FirstSreen extends StatelessWidget {
  @override
  Widget build (BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("导航页面"),
      ),
      body: Center(
        child: RaisedButton(
          child: Text("查看商品详情页"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(
              builder: (context) => new SecondScrren()
            ));
          },
        ),
      ),
    );
  }
}


class SecondScrren extends StatelessWidget {
  @override
  Widget build (BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("elaine详情页"),
      ),
      body: Center(
        child: RaisedButton(
          child: Text("返回"),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}