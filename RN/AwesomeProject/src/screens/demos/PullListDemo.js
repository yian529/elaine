import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';
/*
  * ListView需要指定数据的来源。传入数据必须是数组，或者是字典里面嵌套数组
  * 系统会根据你传入的数据自动生成section和row。每一个字典的key会被ListView拆分成一个section（小节，这里的section和原生的一样），如果你不指定sectionId，则key就是sectionId。
*/
import {PullList} from 'react-native-pull';

export default class extends Component {

	constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            /*
              * 在使用dataSource时，我们需要先new一个dataSource对象，形如下:
              * var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
              * 构造函数可以接受下列四种参数（都是可选）：
                getRowData(dataBlob, sectionID, rowID)
                getSectionHeaderData(dataBlob, sectionID)
                rowHasChanged(prevRowData, nextRowData)
                sectionHeaderHasChanged(prevSectionData, nextSectionData)
              大多数情况下我们会用到第二种（字典套数组）和第三种（纯数组），每一个数组对应的key系统会自动提取成sectionId
              然后我们可以根据sectionId来判断所加载的section。我们使用下面的方法为dataSource传递数据。如果是纯数组（无section），使用cloneWithRows(dataBlob, rowIdentities)

              参考：https://www.jianshu.com/p/1293bb8ac969
                  https://www.jianshu.com/p/c55e53acad85
            */
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
		//do something
		setTimeout(() => {
            resolve();
        }, 3000);
    }

	topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
		return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray" />
                <Text ref={(c) => {this.txtPulling = c;}}>当前PullList状态: pulling...</Text>
                <Text ref={(c) => {this.txtPullok = c;}}>当前PullList状态: pullok......</Text>
                <Text ref={(c) => {this.txtPullrelease = c;}}>当前PullList状态: pullrelease......</Text>
    		</View>
        );
	}

    render() {
        return (
          <View style={styles.container}>
              <PullList
                  style={{}}
                  onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                  renderHeader={this.renderHeader}
                  dataSource={this.state.list}
                  pageSize={5}
                  initialListSize={5}
                  renderRow={this.renderRow}
                  onEndReached={this.loadMore}
                  onEndReachedThreshold={60}  // 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用。
                  renderFooter={this.renderFooter}
                  />
          </View>
        );
    }

    renderHeader() {
      return (
          <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>This is header</Text>
          </View>
      );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
      return (
          <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
              <Text>{item.title}</Text>
          </View>
      );
    }

    renderFooter() {
      if(this.state.nomore) {
          return null;
      }
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
    }

    loadMore() {
        this.dataSource.push({
            id: 0,
            title: `begin to create data ...`,
        });
        for(var i = 0; i < 5; i++) {
            this.dataSource.push({
                id: i + 1,
                title: `this is ${i}`,
            })
        }
        this.dataSource.push({
            id: 6,
            title: `finish create data ...`,
        });
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
});