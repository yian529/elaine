import 'package:flutter/material.dart';
import '../service/service_method.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:convert';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String homePageContent = "正在获取数据";

  @override
  void initState() {
    getHomePageContent().then((res) {
      setState(() {
        homePageContent = res.toString();
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
       child: Scaffold(
         appBar: AppBar(
           title: Text("百姓生活+"),
         ),
        //  body: SingleChildScrollView(
        //    child: Text(homePageContent),
        //  ),
        body: FutureBuilder(
          future: getHomePageContent(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              var data = json.decode(snapshot.data.toString());
              List<Map> swiper = (data['data']['slides'] as List).cast();
              List<Map> navigatorList = (data['data']['category'] as List).cast();
              String adPicture = data['data']['advertesPicture']['PICTURE_ADDRESS'];
              String leaderImage = data['data']['shopInfo']['leaderImage'];
              String leaderPhone = data['data']['shopInfo']['LeaderPhone'];
              return Column(
                children: <Widget>[
                  SwiperDiy(swiperDateList: swiper),
                  TopNavigator(navigatorList: navigatorList),
                  AdBanner(adPicture: adPicture),
                  LeaderPhone(leaderImage: leaderImage, leaderPhone: leaderPhone,)
                ],
              );
            } else {
              return Center(
                child: Text('加载中'), //Text('加载中',fontSize:ScreenUtil().setSp(28,false))设置字号28，false不随系统字体大小改变
              );
            }
          },
        ),
       ),
    );
  }
}

//首页轮播组件
class SwiperDiy extends StatelessWidget {
  final List swiperDateList;
  SwiperDiy({this.swiperDateList});

  @override
  Widget build(BuildContext context) {
    print("设置像素密度:${ScreenUtil.pixelRatio}");
    print("设置高:${ScreenUtil.screenHeight}");
    print("设置宽:${ScreenUtil.screenWidth}");
    return Container(
      height: ScreenUtil().setHeight(333),
      width: ScreenUtil().setWidth(750),
      child: Swiper(
        itemBuilder: (BuildContext context, int index) {
          return Image.network("${swiperDateList[index]['image']}",fit: BoxFit.fill);
        },
        itemCount: swiperDateList.length,
        pagination: SwiperPagination(),
        autoplay: true,
      ),
    );
  }
}





class TopNavigator extends StatelessWidget {
  final List navigatorList;
  TopNavigator({Key key, this.navigatorList}) : super(key: key);

  Widget _gridViewItemUI(BuildContext context, item) {
    return InkWell(
      onTap: () {
        print("点击了导航");
      },
      child: Column(
        children: <Widget>[
          Image.network(item['image'],width: ScreenUtil().setWidth(95)),
          Text(item['mallCategoryName'])
        ],
      ),
    );
  }
  @override
  Widget build(BuildContext context) {
    if (this.navigatorList.length > 10) {
      this.navigatorList.removeLast();
    }
    return Container(
      height: ScreenUtil().setHeight(320),
      padding: EdgeInsets.all(3.0),
      child: GridView.count(
        crossAxisCount: 5,
        padding: EdgeInsets.all(5.0),
        children: navigatorList.map((item) {
          return _gridViewItemUI(context, item);
        }).toList() 
      ),
    );
  }
}

class AdBanner extends StatelessWidget {
  final String adPicture;
  const AdBanner({Key key, this.adPicture}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Image.network(adPicture),
    );
  }
}

//店长电话
class LeaderPhone extends StatelessWidget {
  final String leaderImage; //店长头像
  final String leaderPhone; //店长电话
  const LeaderPhone({Key key, this.leaderImage, this.leaderPhone}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    print(leaderPhone);
    return Container(
      child: InkWell(
        onTap: _launcherUrl,
        child: Image.network(leaderImage),
      ),
    );
  }

  void _launcherUrl () async{
    String url = 'tel:'+leaderPhone;//需要查看log，目前还不能打开电话
    print(url);
    String url2 = 'http:jspang.com';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw "url不能进行访问,异常";
    }
  }
}