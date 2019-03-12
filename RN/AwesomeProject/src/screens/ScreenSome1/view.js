/**
 * ScreenHome/index.js
 */

// 引入依赖略
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native'

export default self => (
	<View>
	  <Text style={{ fontSize: 36 }}>ScreenSome1</Text>
	  <View style={{margin:20}}>
	    <Button
	    	/*在Android上，React Navigation 挂钩到硬件的返回按钮，并在用户按下返回按钮时触发` goBack()`方法，因此它的行为与用户期望的相同。
				另一个常见需求是能够跨越*多个*页面返回 - 例如，如果你处在堆栈深处，上面有多个页面，此时你想要将上面所有的页面都销毁，并返回第一个页面。 在这种情况下，我们知道我们要回到` Home `，所以我们可以使用` navigate('Home') `（而不是` push `！ 尝试一下，看看有什么不同）。 另一个选择是` navigation.popToTop() `，它可以返回到堆栈中的第一个页面。*/
	      title="Go back"
        onPress={() => self.props.navigation.goBack()}
	    />
	  </View>
	</View>
);