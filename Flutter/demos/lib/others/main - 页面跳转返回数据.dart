import 'package:flutter/material.dart';
        
void main(){
  runApp(MaterialApp(
    title:'页面跳转返回数据',
    home:FirstPage()
  ));
}

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(title:Text("找小姐姐要电话")),
      body:Center(
        //child: RouteButton(),
        child: Image.asset('images/blogtouxiang.jpg'),
      )
    );
  }
}

//跳转的Button
class RouteButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed:(){
          _navigateToXiaoJieJie(context);
      },
      child: Text('去找小姐姐'),
    );
  }

  _navigateToXiaoJieJie(BuildContext context) async{ //async是启用异步方法

    final result = await Navigator.push(//等待
      context, 
      MaterialPageRoute(builder: (context)=> XiaoJieJie())
      );

      Scaffold.of(context).showSnackBar(SnackBar(content:Text('$result')));
      /*
        SnackBar的使用
        SnackBar是用户操作后，显示提示信息的一个控件，类似Tost，会自动隐藏。SnackBar是以Scaffold的showSnackBar方法来进行显示的。
        */
  }
}

class XiaoJieJie extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        title:Text('我是小姐姐')
      ),
      body:Center(
        child:Column(
          children: <Widget>[
            RaisedButton(
              child: Text('大长腿小姐姐'),
              onPressed: (){
                Navigator.pop(context,'大长腿:1511008888'); //返回数据的方式Navigator.pop(context,'xxxx');  //xxx就是返回的参数
              },
            ) ,
            RaisedButton(
              child: Text('小蛮腰小姐姐'),
              onPressed: (){
                Navigator.pop(context,'大长腿:1511009999');
              },
            ) ,
          ],
        ) 
      ) ,
    );
  }
}