
// 引入依赖略
import React, {Component} from 'react';
import {Text, View, Button,ScrollView,Image} from 'react-native'
import styles from './style';

export default self => (
	<ScrollView
    ref="scrollView"
    horizontal={false}//设置是否是横向滚动
    onScroll={this._onScroll}
    removeClippedSubviews={true}//实验特性，可以优化滚动性能
    showsVerticalScrollIndicator={false}//是否显示垂直滚动条
  >
    <Text style={{ fontSize: 36 }}>ScreenHome</Text>
	  <View style={[styles.buttonContainer]}>
	    <Button
	      title="goSome2Modal(从屏幕下面进入,android无效)"
	      onPress={() => self.navigation.navigate("ScreenSome2Modal")}
	    />
	  </View>
	  <View style={[styles.buttonContainer]}>
	    <Button
	      title="ScreenTab2(.navigate)"
	      // 跳转到新的页面
	      /*如果我们使用未在 stack navigator 中定义的路由名称调用this.props.navigation.navigate 方法，则不会发生任何事情。 换句话说，我们只能导航到已经在我们的 stack navigator 上定义的路由; 不能随便导航到任意组件。
	      */
	      /*多次导航到同一路由*/
	      onPress={() => self.navigation.navigate("ScreenTab2")}
	    />
	  </View>
	  <View style={[styles.buttonContainer]}>
	    <Button
	      title="滚动视图(ScrollView)"
	      onPress={() => self.navigation.navigate("ScrollViewTest")}
	    />
	  </View>

	  <View style={[styles.buttonContainer]}>
	    <Button
	      title="Flex布局"
	      onPress={() => self.navigation.navigate("FlexTest")}
	    />
	  </View>

	  
	  <View style={[styles.buttonContainer]}>
	    <Button
	      title="轮播"
	      onPress={() => self.navigation.navigate("BannerTest")}
	    />
	  </View>

 		<View style={[styles.buttonContainer]}>
	    <Button
	      title="PullListDemo"
	      onPress={() => self.navigation.navigate("PullListDemo")}
	    />
	  </View>
	  
  </ScrollView>
);
