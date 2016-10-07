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
          <View>
            <Text>无法登录</Text>
            <Text>忘记密码</Text>
          </View>
          <View>
            <Text>其他登录方式:</Text>
            <Image source={require('./img/icon3.png')}  style={{width:100,height:100}}/>
            <Image source={require('./img/icon7.png')}  style={{width:100,height:100}}/>
            <Image source={require('./img/icon8.png')}  style={{width:100,height:100}}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
    borderWidth:1,
    borderColor:'gray',
    height:30,
    width:356,
    marginLeft:10,
    marginTop:10,
  },
  loginStyle:{
    height:35,
    width:356,
    backgroundColor:'#44c1ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
  },
  loginTextStyle:{
    color:'white',
    fontSize:16,
  }
  

});

module.exports = QQImageDemo;