/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

// 获取屏幕的宽度
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var textInputX = width - 20;



class QQImageDemo extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./img/icon.png')} style={styles.iconStyle} />
          <TextInput placeholder={'请输入用户名：'} style={styles.textInputStyle}/>
          <TextInput placeholder={'请输入密码：'} password={true} style={styles.textInputStyle}/>
          <View style={styles.loginStyle}>
            <Text style={styles.loginTextStyle}>
              登录
            </Text>
          </View>
          <View style={styles.settingStyle}>
            <Text>无法登录</Text>
            <Text>忘记密码</Text>
          </View>
          <View style={styles.otherLoginStyle}>
            <Text>其他登录方式:</Text>
            <Image source={require('./img/icon3.png')}  style={styles.otherImageStyle}/>
            <Image source={require('./img/icon7.png')}  style={styles.otherImageStyle}/>
            <Image source={require('./img/icon8.png')}  style={styles.otherImageStyle}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconStyle:{
    width:80,
    height:80,
    borderRadius:15,
    marginTop:50,
  },
  textInputStyle: {
    borderColor:'gray',
    height:30,
    width:textInputX,
    marginLeft:10,
    marginTop:10,
    backgroundColor:'white',
    textAlign:'center'
  },
  loginStyle:{
    height:35,
    width:textInputX,
    backgroundColor:'#44c1ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
  },
  loginTextStyle:{
    color:'white',
    fontSize:16,
  },
  settingStyle: {
    // 设置主轴的方向
    flexDirection:'row',
    // 设置主轴的对齐方式
    width:width*0.9,
    justifyContent:'space-between',

  },
  otherLoginStyle: {
    flexDirection:'row',
    alignItems:'center',
    // 绝对定位
    position:'absolute',
    bottom:10,
    left:10,
  },
  otherImageStyle:{
    width:50,
    height:50,
    borderRadius:25,
    marginLeft:8
  }
});

module.exports = QQImageDemo;