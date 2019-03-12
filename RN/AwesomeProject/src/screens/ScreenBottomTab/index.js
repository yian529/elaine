/**
 * ScreenBottomTab/index.js
 */
import  { createBottomTabNavigator } from 'react-navigation'

import ScreenHome from '../../screens/ScreenHome';
import ScreenTab1 from '../../screens/ScreenTab1';
import ScreenTab2 from '../../screens/ScreenTab2';
import ScreenTab3 from '../../screens/ScreenTab3';

const ScreenTab = createBottomTabNavigator(
  // 配置 tab 路由
  {
    ScreenHome: ScreenHome,
    ScreenTab1: ScreenTab1,
    ScreenTab2: ScreenTab2,
    ScreenTab3: ScreenTab3,
  },
  {
    initialRouteName: "ScreenHome" //指定堆栈中的初始路由
  },
  // 其他配置选项
  {
    tabBarPosition: "bottom"
  }
);

export default ScreenTab;