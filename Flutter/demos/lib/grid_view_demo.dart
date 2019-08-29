import 'package:flutter/material.dart';

class GridViewDemo extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "Elaine's flutter demo",
      home: Scaffold(
        appBar: new AppBar(
          title: new Text('Listview widget'),
        ),
        body: GridView(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 2.0,
            crossAxisSpacing: 2.0,
            childAspectRatio: 0.7,
          ),
          children: <Widget>[
            new Image.network('http://img5.mtime.cn/mt/2019/07/31/110048.94153693_185X277X4_185X277X4.jpg',fit:BoxFit.cover),
            new Image.network('http://img5.mtime.cn/mt/2019/07/19/104350.91634165_185X277X4_185X277X4.jpg',fit:BoxFit.cover),
            new Image.network('http://img5.mtime.cn/mt/2019/07/29/095330.78105119_185X277X4_185X277X4.jpg',fit:BoxFit.cover),
            new Image.network('http://img5.mtime.cn/mt/2019/07/31/163526.69299072_185X277X4_185X277X4.jpg',fit:BoxFit.cover),
            new Image.network('http://img5.mtime.cn/mt/2018/11/19/165350.52237320_135X190X4.jpg',fit: BoxFit.cover),
             new Image.network('http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',fit: BoxFit.cover),
             new Image.network('http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',fit: BoxFit.cover)
          ],
        )
      ),
    );
  }
}
