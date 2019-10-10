import 'package:flutter/material.dart';
import './pages/index_page.dart';
import 'package:provide/provide.dart';
import './provide/counter.dart';
import './provide/child_category.dart';
import './provide/category_goods_list.dart';
import './provide/details_info.dart';
import 'package:fluro/fluro.dart';
import './routers/application.dart';
import './routers/routes.dart';

void main() {
  var providers = Providers();
  var counter = Counter();
  var childCategory= ChildCategory();
  var goodList = CategoryGoodsListProvide();
  var goodDetail = DetailsInfoProvide();
  
  providers
    ..provide(Provider<Counter>.value(counter))
    ..provide(Provider<ChildCategory>.value(childCategory))
    ..provide(Provider<CategoryGoodsListProvide>.value(goodList))
    ..provide(Provider<DetailsInfoProvide>.value(goodDetail));
  
  runApp(ProviderNode(child: MyApp(),providers: providers)
  );
} 

class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 初始化及静态化路由
    final router = Router();
    Routes.configureRoutes(router);
    Application.router = router;

    return Container(
      child: MaterialApp(
        title: "百姓生活+",
        onGenerateRoute: Application.router.generator, //flutter自带
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primaryColor: Colors.pink
        ),
        home: IndexPage(),
      ),
    );
  }
}