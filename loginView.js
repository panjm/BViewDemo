/**
 * Created by jmptpanjm on 16/10/8.
 */
//
import React,{ Component } from 'react';
// import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class loginView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
                <TextInput placeholder={'请输入帐号'}  style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle} />
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:'white'}}>登录</Text>
                </View>
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>忘记密码</Text>
                </View>
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式:</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon7.png')} style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.otherImageStyle}/>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#dddddd',
    },
    iconStyle:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
        marginTop:50,
        marginBottom:30,
    },
    textInputStyle: {
        height:38,
        backgroundColor:'white',
        textAlign:'center',
        marginBottom:1,
    },
    loginBtnStyle: {
        height: 35,
        width: width*0.9,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',

    },
    settingStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:width*0.9,
    },
    otherLoginStyle:{
        flexDirection:'row',
        alignItems:'center',
    //  绝对定位
        position:'absolute',
        bottom:10,
        left:10,
    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8,
    }
});

module.exports = loginView;
