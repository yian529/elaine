/**
 * ScreenHome/index.js
 */
import React, {Component} from 'react';
import { Image,Alert,ToastAndroid } from 'react-native';
import SplashScreen from "react-native-splash-screen"; // 引入 react-native-splash-screen
import view from './view'

export default class ScreenHome extends Component {
  // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => {
      // 根据是否选中，显示不同图片
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };


  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

 _onScroll() {
        //在滚动的过程中，每帧最多调用一次此回调函数。
        // 调用的频率可以用scrollEventThrottle属性来控制。
    }

  _onEndReached() {
      ToastAndroid.show("到达底部了", ToastAndroid.SHORT);
  }
  componentDidMount() {
      // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
      setTimeout(() => {
        SplashScreen.hide();
      }, 5000);
  
  }
  
  render() {
    return view(this);
  }
}

