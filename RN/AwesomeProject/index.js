
/** 
* @format 
打包 app 时进入 react native（js 部分） 的入口文件（0.49 以后安卓、ios 共用一个入口文件）*/
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

*/


/**
 * index.js
 */
/*import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import store from "./src/redux/store";

const ReduxApp = () => (
  // 配置 Provider 为根组件，同时传入 store 作为其属性
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("AwesomeProject", () => ReduxApp);
*/


/**
 * index.js
 * 更改为持久化存储
 */
import React from "react";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/redux/store";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";

const { persistor, store } = configureStore();

const ReduxApp = () => (
  // 配置 Provider 为根组件，同时传入 store 作为其属性
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent("AwesomeProject", () => ReduxApp);