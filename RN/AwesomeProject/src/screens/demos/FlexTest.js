import React, {Component} from "react";
import {StyleSheet,View, Image,Text} from "react-native";
import pxToDp from '../../config/pxToDp';

/**
 * Created by elaine on 2019/12/6.
 * 简单的Flex布局，主要是熟悉Flex布局的各类属性


 web中flexDirection默认值是row。
 而在RN中flexDirection默认是column
 */

/*
参考：https://facebook.github.io/react-native/docs/text.html
https://reactnative.cn/docs/layout-props/
*/
export default class FlexTest extends Component {
    render() {
        return (
           
            <View style={FlexTestStyle.container}>
                <Text style={[FlexTestStyle.item]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <Text style={[FlexTestStyle.item, {textAlign:'center'}]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <Text style={[FlexTestStyle.item, {textAlign:'right'}]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <Text style={[FlexTestStyle.item,{textAlign: "center",textAlignVertical: "center"}]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <Text style={[FlexTestStyle.item,{textAlignVertical: "bottom"}]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <Text style={[FlexTestStyle.item,{textAlignVertical: "bottom",textAlign: "center"}]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <Text style={[FlexTestStyle.item,{textAlignVertical: "bottom",textAlign: "right"}]}>
                    <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                </Text>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                   <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>


                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                   <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>


                <View style={[FlexTestStyle.item,{justifyContent:"space-between",alignItems:"center"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                   <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>


                <View style={[FlexTestStyle.item,{justifyContent:"space-between",alignItems:"flex-end"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                   <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                   <Text style={{alignSelf:'center'}}>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between",alignItems:"flex-start"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                   <Text style={{alignSelf:'flex-end'}}>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text style={{textAlign:'center'}}>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text style={{textAlign:'right'}}>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{alignItems:"center",justifyContent:"space-between"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{alignItems:"flex-end",justifyContent:"space-between"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between",alignItems:"flex-end"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text style={{alignSelf:"center"}}>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text style={{alignSelf:'flex-start'}}>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"}]}>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                    <Text>
                        <Image
                          source={require("../../assets/images/circle.png")}
                          style={[FlexTestStyle.imgeSty]}
                        />
                    </Text>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text> 
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text> 
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{alignItems:"flex-end"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text> 
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"column",justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text> 
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"column",justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between"}]}>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>

                    <View style={{justifyContent:"center"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between"}]}>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>

                    <View>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{flexDirection:"row",justifyContent:"space-between"}]}>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

                <View style={[FlexTestStyle.item,{justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                        <Text>
                            <Image
                              source={require("../../assets/images/circle.png")}
                              style={[FlexTestStyle.imgeSty]}
                            />
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
}
const FlexTestStyle = StyleSheet.create({
    imgeSty:{
        height: pxToDp(20), 
        width: pxToDp(20)
    },
    container: {
        textAlign: "center",
        height: 600,
        margin: 4,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    item: {
        backgroundColor: '#e7e7e7',
        borderRadius: pxToDp(5),
        marginBottom: pxToDp(20),
        marginRight: pxToDp(20),
        flexGrow: 1,//相当于Android控件中的weight属性
        width: 50,
        height: 50,
        padding:3
    },
})