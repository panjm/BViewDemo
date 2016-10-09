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
} from  'react-native';

// 导入json数据
var ImageData = require('./ImageData.json');
// 获取屏幕宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
// 导入定时器
var TimerMixin = require('react-timer-mixin');


var JScrollViewDemo = React.createClass({
    // 注册计时器
    mixins: [TimerMixin],
    // 设置固定多少时间
    getDefaultProps()
    {
        return{
            duration:1000
        }
    },
    // 设置可修改的变量
    getInitialState()
    {
      return{
          currentPage:0,
      }
    },
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                horizontal={true}
                ref="scrollView"
                // 隐藏水平滚动条
                showsHorizontalScrollIndicator={false}
                // 自动分页
                pagingEnabled={true}
                // onMomentumScrollEnd 当一帧滚动结束的时候调用
                onMomentumScrollEnd = {(e)=>this.onAnimationEnd(e)}
                // 开始拖拽,停止定时器
                onScrollBeginDrag = {this.onScrollBeginDrag}
                // 停止拖拽,开启定时器
                onScrollEndDrag = {this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>

                <View style={styles.pageViewStyle}>
                    {/* 返回五个原点 */}
                    {this.renderPageCircle()}
                </View>

            </View>
        );
    },

    // 开始拖拽,停止定时器
    onScrollBeginDrag()
    {
        // 停止定时器
        this.clearInterval(this.timer);
    },

    // 停止拖拽,开启定时器
    onScrollEndDrag()
    {
        this.startTimer();
    },

    // 处理复杂操作或网络请求
    componentDidMount()
    {
        // 开启定时器
        this.startTimer();

    },

    // 开启定时器
    startTimer(){
        // 拿到ScrollView
        var scrollView = this.refs.scrollView;
        // 添加定时器
        this.timer = this.setInterval(function () {
            // 设置圆点
            var activePage;
            // 获取圆点边界值
            var imgCount = ImageData.data.length;
            // 判断: 是否越界
            if(this.state.currentPage+1 >= imgCount)
            {
                activePage = 0;
            }else {
                activePage = this.state.currentPage +1;
            }
            // 更新状态机
            this.setState({
                currentPage:activePage,
            });

            // 让图片跟着滚动
            var offSetX = activePage * width;  // 图片的偏移量
            scrollView.scrollResponderScrollTo({x:offSetX,y:0,animated:true});


        },this.props.duration);
    },

    // 返回所有图片
    renderAllImage()
    {
        var allImage = [];
        var imgArr = ImageData.data;

        for(var i=0;i<imgArr.length;i++)
        {
            var imgItem = imgArr[i];
            allImage.push(
                <Image  key={i} source={{uri:imgItem.img}} style={{width:width,height:120}}/>
            );
        }
        return allImage;
    },

    // 返回五个原点
    renderPageCircle()
    {
        var allRoundAry = [];
        var imgAry = ImageData.data;
        var style;
        for(var i=0;i<imgAry.length;i++)
        {
            style = (i==this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
            allRoundAry.push(
              <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return allRoundAry;
    },

    // 当一帧滚动结束的时候调用
    onAnimationEnd(e)
    {
        // 水平方向上的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        // 当前页数
        var currentPage = Math.floor(offSetX / width);
        this.setState({
            currentPage:currentPage,
        });
    }

});


const styles = StyleSheet.create({
    container:{
        marginTop:20,
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


module.exports = JScrollViewDemo;
