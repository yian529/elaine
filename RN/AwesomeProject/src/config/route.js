/**
 * route.js
 */
// 引入依赖
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

// 引入页面组件
import ScreenBottomTab from '../screens/ScreenBottomTab';
import ScreenHome from '../screens/ScreenHome';
import ScreenSome1 from '../screens/ScreenSome1';
import ScreenSome2 from '../screens/ScreenSome2';
import ScreenTab1 from '../screens/ScreenTab1';
import ScreenTab2 from '../screens/ScreenTab2';
import ScreenTab3 from '../screens/ScreenTab3';
import ScrollViewTest from '../screens/demos/ScrollViewTest'
//import ListViewTest from '../screens/demos/ListViewTest'
import FlexTest from '../screens/demos/FlexTest'
import FetchNetData from '../screens/demos/FetchNetData'
import ParallaxTest from '../screens/demos/ParallaxTest'
import BannerTest from '../screens/demos/BannerTest'
import PullListDemo from '../screens/demos/PullListDemo'
//import BottomTabViewTest from '../screens/demos/BottomTabViewTest'

/**
 * 自定义 StackNavigator，可以选择 screen 进入方式
 * 默认状态为 card，只需要输入对应页面，比如 ..navigate('ScreenSome1')
 * 如果要使某个页面进入方式为 modal 只需要在路径上加上 Modal
 * 比如：..navigate('ScreenSome2Modal')
 */
const StackModalNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = createStackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }

  const ModalStackNavigator = createStackNavigator(
    {
      CardStackNavigator: { screen: CardStackNavigator },
      ...modalRouteConfig,
    },
    /*mode - 定义渲染和转换的样式：
      card - Use the standard iOS and Android screen transitions. This is the default.
      modal - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android.*/
    {
      // 如果页面进入方式为 modal，需要自定义 header（默认 header 样式失效，都叠在一块了）
      mode: 'card',
      headerMode: 'none', //指定页眉的呈现方式
    },
  );

  return ModalStackNavigator;
};


// 配置路由
const AppNavigator = StackModalNavigator(
  {
    ScreenBottomTab: ScreenBottomTab,

    //测试Navigator不同使用场景用，只需要tab的话，只要ScreenBottomTab: ScreenBottomTab即可
    ScreenHome: ScreenHome, 
    ScreenSome1: ScreenSome1,
    ScreenSome2: ScreenSome2,
    ScreenTab1: ScreenTab1,
    ScreenTab2: ScreenTab2,
    ScreenTab3: ScreenTab3,
    ScrollViewTest: ScrollViewTest,
    //ListViewTest:ListViewTest,
    FlexTest:FlexTest,
    FetchNetData:FetchNetData,
    ParallaxTest:ParallaxTest,
    BannerTest:BannerTest,
    PullListDemo:PullListDemo,
   // BottomTabViewTest:BottomTabViewTest
  }
);


    
const App = createAppContainer(AppNavigator)

export default App
