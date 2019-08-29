import 'dart:io';
import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio/dio.dart';

main() async {
  var dio = new Dio();
  //dio.options.connectTimeout = 2000;
  // More about HttpClient proxy topic please refer to Dart SDK doc.
  dio.interceptors.add(CookieManager(PersistCookieJar()));
  (dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
      (HttpClient client) {
    client.findProxy = (uri) {
      //proxy all request to localhost:8888
      return "PROXY localhost:8888";
    };
    client.badCertificateCallback =
        (X509Certificate cert, String host, int port) => true;
  };
  var dir = new Directory("./cookies");
  await dir.create();
  Response<String> response;
  //response= await dio.get("https://github.com/wendux/fly");
  response = await dio.get("https://www.baidu.com");
  print(response.statusCode);
  response = await dio.get("https://www.baidu.com");
  print(response.statusCode);
}
