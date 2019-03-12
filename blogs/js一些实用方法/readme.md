# 数据类型
JavaScript 中只有两种类型——主要(基本)数据类型和引用类型（对象），其中有六种主要数据类型。
## 内置类型
- 空值(null)
- 未定义(undefined)
- 布尔值(boolean)
- 数字(number)
- 字符串(string)
- 符号(symbol)
- 对象(object)
除对象外，其他类型统称为"基本类型"
js的类型分为两个大类,分别是基本数据类型和引用数据类型。
Object本质上是由一组无序的名值对组成的。其中可以算在object中的还有Array和Function。

# Object.prototype.toString()

* 在JavaScript里使用typeof判断数据类型，只能区分基本类型，即：number、string、undefined、boolean、object。
* 对于null、array、function、object来说，使用typeof都会统一返回object字符串。
要想区分对象、数组、函数、单纯使用typeof是不行的。在JS中，可以通过Object.prototype.toString方法，判断某个对象之属于哪种内置类型。
分为null、string、boolean、number、undefined、array、function、object、date、math。

### 1. 判断基本类型
```javascript 
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call({a:1}) // "[object Object]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call("abc");// "[object String]"
Object.prototype.toString.call(123);// "[object Number]"
Object.prototype.toString.call(true);// "[object Boolean]"
```
### 2. 判断原生引用类型
```javascript 
    **函数类型**
    function fn(){
        console.log("test");
    }
    Object.prototype.toString.call(fn); // "[object Function]"
```
```javascript 
    **日期类型**
    var date = new Date();
    Object.prototype.toString.call(date); // "[object Date]"
```
```javascript 
    **数组类型**
    var arr = [1,2,3];
    Object.prototype.toString.call(arr); // "[object Array]"
```
```javascript 
    **正则表达式**
    var reg = /[hbc]at/gi;
    Object.prototype.toString.call(reg); // "[object RegExp]"
```
```javascript 
    **自定义类型**
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    var person = new Person("Rose", 18);
    Object.prototype.toString.call(person); // "[object Object]"
```
很明显这种方法不能准确判断person是Person类的实例，而只能用instanceof 操作符来进行判断，如下所示：
    console.log(person instanceof Person); // true

### 3. 判断原生JSON对象
    var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON);
    console.log(isNativeJSON);// 输出结果为”[object JSON]”说明JSON是原生的，否则不是；
注意：Object.prototype.toString()本身是允许被修改的，而我们目前所讨论的关于Object.prototype.toString()这个方法的应用都是假设toString()方法未被修改为前提的。

### 4. 实例：为Array对象添加一个去除重复项的方法
    Array.prototype.uniq = function () {
        if (!this.length || this.length == 0) return this;
        var res = [], key, hasNaN = false, temp = {};
        for (var i = 0 ; i < this.length; i++) {
            if (typeof this[i] === 'object') {
                res.push(this[i]);
            } else if (this[i] != this[i]) { // 如果当前遍历元素是NaN
                if (!hasNaN) {
                    res.push(this[i]);
                    hasNaN = true;
                }
            } else {
                key = typeof(this[i]) + this[i];
                if (!temp[key]) {
                    res.push(this[i]);
                    temp[key] = true;
                }
            }
        }
        return res;
    }
    [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq() 
    //[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
    //这里要注意，NaN === NaN 为false，{} === {}为false。


另一种解法:

    Array.prototype.uniq = function () {
        var res = [];
        var flag = true;
        this.forEach(function(x) {
            if (res.indexOf(x) == -1) {
                if (x != x) {
                    if (flag) {
                        res.push(x);
                        flag = false;
                    }
                } else {
                    res.push(x);
                }
            }
        })
        return res;
    }

# call和apply
obj.call(thisObj, arg1, arg2, ...);
obj.apply(thisObj, [arg1, arg2, ...]);
两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。或者说thisObj『继承』了obj的属性和方法。绑定后会立即执行函数。
唯一区别是apply接受的是数组参数，call接受的是连续参数。

# 关于数组
通过简单的在元素之间插入逗号（,），数组在默认情况下回转换为字符串，内容相同的两个数组并不相等（==）
    var a = [1,2,3]
    var b = [1,2,3] 
    var c = "1,2,3"
    a == c //true
    b == c //true
    a == b //false
数组有一个字符串没有的可变更成员函数 reverse()
可以利用这个函数，将字符串转为数组，再执行.reverse()，处理完后转为字符串，实现字符串的反转

# 提升
在创建阶段将变量声明赋予默认值的过程就叫做变量提升。
所有的声明（变量和函数）都会被“移动”到各自作用域的最顶端，这个过程被称为提升。
只有声明本身会被提升，而负值或者其他运行逻辑会留在原地
* 函数声明和变量声明都会被提升
* 先函数声明，后变量声明
* 因为函数声明会被提升到变量声明之前，所以重名的变量声明，会被同名的函数声明覆盖(var 声明会被忽略掉)

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/11.png)
* 后出现的函数声明会覆盖前出现的函数声明

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/13.png)
* 后出现的变量声明不会覆盖前出现的变量声明

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/12.png)
* 使用let进行的生命不会在块作用域中进行提升

# 闭包
闭包的简单定义是：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。
闭包中的变量并不保存中栈内存中，而是保存在堆内存中，这也就解释了函数之后之后为什么闭包还能引用到函数内的变量。
```javascript
var count=0;
function makeAdder(x){
    return function inner(y){
        return x+y;
    }
}
var add5=makeAdder(5);
count+=add5(2);
```
注意，makeAdder执行上下文从调用栈弹出后，Javascript Visualizer创建了一个Closure Scope（闭包作用域）。Closure Scope中的变量环境和makeAdder执行上下文中的变量环境相同。这是因为我们在函数中嵌入了另一个函数。在本例中，inner函数嵌在makeAdder中，所以inner在makeAdder变量环境的基础上创建了一个闭包。因为闭包作用域的存在，即使makeAdder已经从执行上下文弹出了，inner仍然能够访问到x变量（通过作用域链）。
这种子函数在其父级函数的变量环境上“关闭”的概念，就叫做闭包

    for (var i = 1; i <= 5; i++) {
        console.log("This is test for 栈");
        (function(j){
            setTimeout( function timer() {
                console.log(j)
            }, j*1000)
        })(i)
    }
在控制台打印效果如下图所示：

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/1.png)
从js的内存机制不难理解，回调setTimeout函数是宏任务，属于队列，需要等栈里的代码（for循环）先行执行，再加入栈中执行，所以会输出5次"This is test for 栈"，然后才会以每秒一次的频率输出5次6
利用ES6的let

    for (var i = 1; i <= 5; i++) {
        let j = i; //闭包的块作用域
        setTimeout( function timer () {
            console.log(j)
        }, j *1000)
    }
 
    for (let i = 1; i <= 5; i++) {
        console.log(i)
        setTimeout(function timer() {
            console.log(i)
        }, i*1000)
    }
    // 循环内变量过度共享
    // for (let x...)的循环在每次迭代时都为x创建新的绑定。
    // 如果一个for (let...)循环执行多次并且循环保持了一个闭包，那么每个闭包将捕捉一个循环变量的不同值作为副本，而不是所有闭包都捕捉循环变量的同一个值。
控制台打印log如下

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/7.png)

# 判断this
this绑定规则：默认绑定、隐式绑定、显式绑定（硬绑定）、new绑定、箭头函数
1.函数是否在new中调用（new 绑定）？如果是的话，this绑定的是新创建的对象
2.函数是否通过call、apply（显示绑定）或者硬绑定调用？如果是，this绑定的是指定的对象
3.函数是否在某个上下文对象中调用（隐式绑定）？如果是，this绑定的是上下文对象
4.如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象

Note:被忽略的this，如果把null或者undefined作为this的绑定对象传入call，apply或者bind，这些值在调用时会被忽略，实际应用的是默认的绑定规则。如果函数不关心this的话，传入null作为占位值是个不错的选择。

更安全的this，在javscript中创建一个空对象最简单的方法就是Object.create(null)，Object.create(null)和{}很像，但是不会创建Object.prototype这个委托

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/9.png)

ES6中的箭头函数并不是使用四条标准的绑定规则，而是根据当前的词法作用域来决定this，具体的说，箭头函数会继承外层函数调用的this绑定(无论this绑定到什么)。

# 对象
### 内置对象
  - String
  - Number
  - Boolean
  - Object
  - Function
  - Array
  - Date
  - RegExp
  - Error
### typeof(null) === 'object'
原理：不同的对象在底层都表示为二进制，在javascript中二进制前三位都为0的话会被判断为object类型，null的二进制表示全是0，自然前三位也是0，所以执行typeof时会返回‘object’

### 遍历
ES5增加了数组的辅助迭代器，forEach(...)，every(...)，some(...)
* forEach(...)会遍历数组中的所有值并忽略回调函数的返回值
* every(...)会一直运行到回调函数返回false，
* some(...)会一直运行到回调函数返回true。
* every(...)和some(...)中特殊的返回值和普通for循环中的break语句类似，他们会提前终止遍历。

# 数值
javascript只有一种数值类型，number，包括“整数”和带小数的十进制数，javascript没有真正意义上的整数。
javascript中的"整数"就是没有小数的十进制数
javascript中的的数字类型基于IEEE 754标准来实现的，该标准通常也成被称为"浮点数"
###javascript使用的是“双精度”格式(64位二进制)
二进制浮点数最大的问题是，会出现类似于：0.1 + 0.2 === 0.3 //false   
二进制浮点数中的0.1和0.2并不是十分精确，相加的结果是一个比较接近于0.3的数字 
判断0.1 + 0.2 和 0.3是否相等的方法：
    ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。
    Number.EPSILON可以用来设置“能够接受的误差范围”

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/10.png)

### NaN和-0在相等时的比较
NaN和自身不相等
Object.is(...)
```javascript
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
var a = 2 / 'f'
Object.is(a, NaN)// true
```
不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
能使用==和===时尽量不使用Objec.is(...),前者使用效率更高，更为通用，Objec.is(...)主要用来处理那些特殊的相等比较

### JSON.stringify有用的功能
通过JSON.stringify(..)传递一个可选参数replacer，它可以是数组或者函数，用来指定对象序列化过程哪些属性应该被处理，哪些应该被排除。
如果replacer是一个数组，那么它必须是一个字符串数组，其中包含序列化要处理的对象的属性名称，除此之外的属性则被忽略

```javascript 
var a = {b:42,c:"42",d:[1,2,3]}
JSON.stringify(a,["b", "c"]) //"{"b":42,"c":"42"}"
```

如果replacer是一个函数，它的参数在第一次调用时为undefined,if语句将属性“c”排除掉，由于字符串是地柜的，因此数组[1,2,3]中的每个元素都会通过参数v传递给replacer，即1、2和3，参数k是他们的索引

```javascript
var a = {b:42,c:"42",d:[1,2,3]}
JSON.stringify(a, function(k,v) {
    if (k !== "c") return v
}) //"{"b":42,"d":[1,2,3]}"
```
JSON.stringify还有一个可选参数space，用来指定输出的缩进格式，sapce为正整数时指定每一级缩进的字符数，它还可以是字符串，此时最前面的十个字符被用于每一级的缩进

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/14.png)
###强制类型转化

1 假值
    * undefined
    * null
    * false
    * +0, -0和NaN
    * ""
    假值的布尔强制类型转化结果为false

####显示强制类型转换
* 字符串和数字之间的显式转换

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/15.png)

~和indexOf()一起可以将结果强制类型转换为真/假值
如果indexOf()返回-1，~将其转换为假值0，其他情况一律转换为真值

```javascript
var h = "hello world"
if (~h.indexOf("lo")) {
    console.log(1)
}
```

* 显示解析数字字符串

![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/16.png)

> parseInt()针对的只是字符串值，向parseInt(...)传递数字和其他类型的参数是没有用的，比如true,function()和[1,2,3]

* 显示转换为布尔值
在if(){}这样的布尔值上下文中，如果没有使用Boolean(..)和!!,就会自动隐式的进行ToBoolean转化

#### 隐式强制类型转换
* 字符串和数字之间的隐式强制类型转换
![image](https://github.com/elainema/ELAINE/blob/master/blogs/images/17.png)
* 布尔值到数字的隐式强制类型转换
* 隐式强制类型转换为布尔值
 1)if ()语句中的条件判断表达式
 2) for (..; .. ; ..)语句中的套件判断表达式(第二个)
 3）while(...)和do...while循环中的条件判断表达式
 4）? : 中的条件判断表达式
 5）逻辑运算符||和&&左边的操作数 
 > || 和 &&,&&和||运算符返回值并不一定是布尔类型，而是操作数中其中一个的值

2 其他类型和布尔类型的相等比较
```javascript
var a = "42"
var b = true
a === b //false
```
> 如果Type(x)是布尔类型，则返回ToNumber(x) == y 的结果
> 如果Type(y)是布尔类型，则返回x == ToNumber(y)的结果
"42"是一个真值，但"42" == true并没有发生布尔值的比较和强制类型转化，不是"42"转为布尔值(true),而是true转为1，"42"转为42
> ==两边的布尔值都会被强制类型转换为数字,建议不要使用 == true和== false

```javascript
var a = "42"
//不建议使用，条件判断不成立
if (a == true) {
    //..
}
//也不要这样用，条件判断不成立
if(a === true) {
    //..
}
//这样的显示用法没有问题
if (a) {
    //..
}
//这样的用法更好：
if (!!a) {
    //..
}
//这样的显示用法也很好
if(Boolean(a)) {
    //..
}
```
###（可能）不知道的web api
1 Vibration（震动
```javascript
// 可以传入一个大于0的数字，表示让手机震动相应的时间长度，单位为ms
navigator.vibrate(100)
// 也可以传入一个包含数字的数组，比如下面这样就是代表震动300ms，暂停200ms，震动100ms，暂停400ms，震动100ms
navigator.vibrate([300,200,100,400,100])
// 也可以传入0或者一个全是0的数组，表示暂停震动
navigator.vibrate(0)
```
2 getBattery

3 fullScreen
### 构造函数的括号是可选的

```javascript
var data = new Date
```

### Map和Set
```javascript
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```
```javascript
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```
### isPlainObject(data) 
判断指定参数是否是一个纯粹的对象，返回值为Boolean类型。

### 执行上下文
每个执行上下文有两个独立的阶段，一个是创建阶段，一个是执行阶段，每个阶段都有其各自职责。
#### 全局执行上下文
一. 在全局执行上下文的创建阶段，Javascript引擎会：
> 1创建一个全局对象；
> 2. 创建this对象；
> 3. 给变量和函数分配内存；
> 4. 给变量赋默认值undefined，把所有函数声明放进内存。
直到执行阶段，Javascript引擎才会一行一行地运行你的代码并执行它们。

在创建阶段，window和this被创建出来，变量声明被设为默认值undefined，所有函数声明都被存入内存。一旦进入执行阶段，Javascript引擎就开始一行行执行代码，把内存中已经存在的变量赋予真实值。
#### 函数执行上下文
当函数被调用，它就被创建出来了。
> 仅当Javascript引擎首次开始解析代码（对应全局执行上下文）或当一个函数被调用时，才会创建执行上下文。
我们有一个全局对象就够了，那就是在全局执行上下文的创建阶段所创建的那个，而不是每次函数调用都创建一个。函数执行上下文中应该创建的应该是arguments对象，所以当创建函数执行上下文时，Javascript引擎会：
> 1.创建一个arguments对象；
> 2. 创建this对象；
> 3. 给变量和函数分配内存；
> 4. 给变量赋默认值undefined，把所有函数声明放进内存。
Javascript引擎创建了一个叫“执行栈”（也叫调用栈）的东西。每当函数被调用，就创建一个新的执行上下文并把它加入到调用栈；每当一个函数运行完毕，就被从调用栈中弹出来

### cookie

#### Cookie的实现原理
客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该Cookie，以此来辨认用户状态。服务器还可以根据需要修改Cookie的内容

#### cookie的作用
HTTP协议是一种无状态、无连接的协议，不能在服务器上保持一次会话的连续状态信息。Cookie的作用是记录用户的有关信息，它最根本的用途是帮助Web站点保存有关访问者的信息。如身份识别号码ID、密码、浏览过的网页、停留的时间、用户在Web站点购物的方式或用户访问该站点的次数等，当用户再次链接Web服务器时，浏览器读取Cookie信息并传递给Web站点。　
Cookie是服务器保存在浏览器的一小段文本信息，
> 注意，这里是服务器保存在浏览器中的

> 每个Cookie的大小一般不超过4KB

> 浏览器每次向服务器发起请求，就会自动附上这段信息，注意是自动，这个功能是浏览器自己完成的，所以我们写Js的时候不用管怎么拿到Cookie怎么传给服务器，浏览器会帮我们完成的

查看浏览器是否打开 Cookie 功能
```javascript
window.navigator.cookieEnabled // true
```
1. ajax会自动带上同源的cookie，不会带上不同源的cookie
2. 可以通过前端设置withCredentials为true， 后端设置Header的方式来让ajax自动带上不同源的cookie，但是这个属性对同源请求没有任何影响， 会被自动忽略。

共享cookie

浏览器的同源政策规定，两个网址，只要域名相同，端口相同，就可以共享Cookie
> 浏览器的同源政策规定，两个网址，只要域名相同，端口相同，就可以共享Cookie,注意，这里不需要协议相同
> 也就是说，http://example.com设置的 Cookie，可以被https://example.com读取
