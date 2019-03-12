/**
 * ScreenHome/index.js
 */
/*import React, {Component} from 'react';
import {Text, View, Button} from 'react-native'

export default class ScreenSome1 extends Component {
  // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
  static navigationOptions = {
    // 设置 title
    title: "TAB1"
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return(
			<View>
	    <Text style={{ fontSize: 36 }}>TAB1</Text>
	  </View>
    );
  }
}
*/





/**
 * ScreenTab1/index.js
 */
import React, { Component } from 'react';
import { Image,Alert } from 'react-native';
import view from './view';
import XgRequest from '../../config/xgRequest';

export default class ScreenTab1 extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  static navigationOptions = {
    title: '网络请求(TAB1)',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;

    // 将需要动态更新的数据放入 state
    this.state = {
      todayOnHistoryInfo: {},
      inputMonthText: '',
      inputDayText: '',
    };
  }

  async getTodayOnHistoryInfo() {
    if (!this.state.inputMonthText || !this.state.inputDayText) {
      this.xgToast.show('请输入有效数据', 2000, 'error');
      return;
    }
    try {
      const urlPar = {
        // 大佬们，这个是我申请的聚合数据应用的key，每天只有100免费请求次数
        key: '7606e878163d494b376802115f30dd4e',
        v: '1.0',
        month: Number(this.state.inputMonthText),
        day: Number(this.state.inputDayText),
      };
      const todayOnHistoryInfo = await XgRequest.todayOnHistory(urlPar);

      // 捕获错误，具体捕获过程需与写api的同学商量确定
      if (todayOnHistoryInfo.error_code) {
        this.xgToast.show(todayOnHistoryInfo.reason, 2000, 'error');
      } else {
        // 更新state，render函数自动重新渲染DOM中变化了的那部分
        this.setState({ todayOnHistoryInfo });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return view(this);
  }
}
