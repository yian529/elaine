// In App.js in a new project

import React, { Component } from 'react';
import App from './src/config/route'
//在React Native中，从App.js导出的组件是应用程序的入口点（或根组件） -- 它处在所有组件的最下层

export default class RootApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 渲染页面
    return <App />;
  }
}
