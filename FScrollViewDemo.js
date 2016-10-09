/**
 * Created by jmptpanjm on 16/10/8.
 */

import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';

// 引入计时器类库
var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
// 引入json数据
var ImageData = require('./ImageData.json');

var FScrollViewDemo = React.createClass({
    // 注册计时器
    mixins: [TimerMixin],
    getInitialState(){
      return{
          currentPage:0
      }
    },
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    // 隐藏水平滚动条
                    showsHorizontalScrollIndicator={false}
                    // 自动分页
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {/* 返回5个原点 */}
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    },
    // 返回所有的图片
    renderAllImage(){
        var allImage = [];
        var imgsArr = ImageData.data;
        for(var i = 0;i <imgsArr.length;i++)
        {
            // 取出单独的每一个对象
            var imgItem = imgsArr[i];
            allImage.push(
                <Image key={i} source={{uri: imgItem.img}} style={{width:width, height:120}}/>
            );
        }
        return allImage;
    },
    // 返回5个原点
    renderPageCircle(){
        // 定义一个数组放置所有的原点
        var indicatorArr = [];
        // 拿到图像数组
        var imgArr = ImageData.data;
        var style ;
        // 遍历
        for(var i = 0;i<imgArr.length;i++){
            // 判断
            style = (i==this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
            // 把原点装入数组中
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },
    // 当一帧滚动结束的时候调用
    onAnimationEnd(e){
        // 1.水平方向上的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
        // 求出当前的页数
        var currentPage = Math.floor(offsetX/width);
        // 更新状态机
        this.setState({
            // 当前的页码
            currentPage:currentPage
        })
    }

});

const styles = StyleSheet.create({
    container:{
        marginTop:30,
    },
    pageViewStyle: {
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
    }
});

module.exports = FScrollViewDemo;