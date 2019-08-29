import 'package:flutter/material.dart';

import 'dart:ui';

import 'package:flutter/material.dart' as prefix0;
// 滤镜比较耗性能
class FrostedClassDemo extends StatelessWidget {
  //const FrostedClassDemo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          //约束性标记盒子，添加额外的限制条件child上
          ConstrainedBox(
            constraints: const BoxConstraints.expand(),
            child: prefix0.Image.network('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545738629147&di=22e12a65bbc6c4123ae5596e24dbc5d3&imgtype=0&src=http%3A%2F%2Fpic30.photophoto.cn%2F20140309%2F0034034413812339_b.jpg'),
          ),
          Center(
            child: ClipRect( //可裁切矩形
              child: BackdropFilter( //背景过滤器
                filter: ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
                child: Opacity(
                  opacity: 0.5,
                  child: Container(
                    width: 500.0,
                    height: 700.0,
                    decoration: BoxDecoration(color: Colors.grey),//盒子修饰器
                    child: Center(
                      child: Text(
                        "Elaine",
                        style:Theme.of(context).textTheme.display3,
                      )
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}