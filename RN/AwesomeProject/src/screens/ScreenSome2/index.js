/**
 * ScreenHome/index.js
 */
import React, {Component} from 'react';
import view from './view'

export default class ScreenSome2 extends Component {
  // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
  static navigationOptions = {
    // 设置 title
    title: "screen some2"
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
