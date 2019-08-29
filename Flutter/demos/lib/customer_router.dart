import 'package:flutter/material.dart';

class CustomerRouter extends PageRouteBuilder {
  final Widget widget;

  CustomerRouter(this.widget)
    :super(
      transitionDuration:Duration(seconds: 1),
      pageBuilder:(
        BuildContext context, 
        Animation<double> animation1,
        Animation<double> animation2) {
          return widget;
      },
      transitionsBuilder:(
        BuildContext context,
        Animation<double> animation1,
        Animation<double> animation2,
        Widget child
      ) {
        // //渐隐渐现动画效果
        // return FadeTransition(
        //   opacity: Tween(begin: 0.0, end: 1.0)
        //     .animate(CurvedAnimation(
        //       parent: animation1,
        //       curve: Curves.fastLinearToSlowEaseIn
        //     )),
        //   child: child,
        // );

        // //缩放动画效果
        // return ScaleTransition(
        //   scale: Tween(begin: 0.0, end: 1.0)
        //     .animate(CurvedAnimation(
        //       parent: animation1,
        //       curve: Curves.fastOutSlowIn
        //     )),
        //   child: child, //不写页面会黑屏
        // );

        // //旋转+缩放动画效果
        // return RotationTransition(
        //   turns: Tween(begin: 0.0, end: 1.0)
        //     .animate(CurvedAnimation(
        //       parent: animation1,
        //       curve: Curves.fastOutSlowIn
        //     )),
        //   child: ScaleTransition(
        //     scale: Tween(begin: 0.0, end: 1.0)
        //       .animate(CurvedAnimation(
        //         parent: animation1,
        //         curve: Curves.fastOutSlowIn
        //       )),
        //       child: child,
        //   ), //不写页面会黑屏
        // );

        //左右滑动路由动画，iod和Android 比较常用的动画
        return SlideTransition(
          position: Tween<Offset>(
            begin: Offset(-1.0,0.0),
            end: Offset(0.0, 0.0)
          ).animate(CurvedAnimation(
              parent: animation1,
              curve: Curves.fastOutSlowIn
            )),
          child: child, //不写页面会黑屏
        );
      }
    );
}