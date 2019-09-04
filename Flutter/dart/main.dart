void main() {
  // var list = ["a","b","c"]; 
  // var map1 = {"first":"dart", 1:true};
  // map1[1] = false;
  // print(list.asMap());
  // var a;
  // a = 10;
  // a = "dart";
  // dynamic b = 20;
  // b = "js";

  // var list2 = List<dynamic>();
  // list2.add(1);
  // list2.add('hello');
  // list2.add(true);
  // print(list2);
  var rect = Rectangle();
  rect.width = 10;
  rect.height = 20;

  print(rect.area);

  rect.area = 200;

  print(rect.width);
}

class Rectangle{
  num width, height;

  //方法
  // num area() {
  //   return width * height;
  // }

  //计算属性
  num get area {
    return width * height;
  }
    set area (value) {
      width = value / 20;
    }
}