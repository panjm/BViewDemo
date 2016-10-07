/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet ,
  Text,
  View,
  Image
} from 'react-native';

// 导入json数据
var BadgeData = require('./BadgeData.json');
// 获取屏幕宽度
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');


// 定义一些全局变量
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;



class ImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderAllBadge()}
      </View>
    );
  }
  // 返回所有的包
  renderAllBadge(){
    // 定义数组装所有的子组件
    var allBadge = [];
    // 遍历json数据
    for(var i=0; i<BadgeData.data.length;i++){
      // 取出单独的独立对象
      var badge = BadgeData.data[i];

      allBadge.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{uri:badge.icon}} style={styles.imageStyle} />
          <Text style={styles.mainTitleStyle}>
            {badge.title}
          </Text>
        </View>
      );
    }
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  outViewStyle: {
    backgroundColor:'red',
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin,

  },
  imageStyle: {
    width:80,
    height:80
  },
  mainTitleStyle: {

  }
  });

module.exports = ImageDemo;