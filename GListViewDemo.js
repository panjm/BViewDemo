/**
 * Created by jmptpanjm on 16/10/9.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

// 导入json数据
var WineData = require('./Wine.json');
// 获取屏幕宽度
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var GListViewDemo = React.createClass({
    //  设定初始值
    getInitialState()
    {
      // 设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      // 设置返回数据
        return{
            dataSource:ds.cloneWithRows(WineData)
        }
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}   // 数据源
                renderRow={this.renderRow}
            />
        );
    },
    // 返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow)
    {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
            <View style={styles.cellViewStyle}>
                <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>
                <View style={styles.rightViewStyle}>
                    {/* 上边的Text */}
                    <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                    {/* 下边的Text */}
                    <Text style={styles.bottomTitleStyle}>${rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

});

const styles = StyleSheet.create({
    cellViewStyle: {
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
        flexDirection:'row',
        padding:10,
    },
    rightViewStyle: {
        justifyContent:'center',
    },
    leftImageStyle: {
        width:60,
        height:60,
        marginRight:15,
    },
    topTitleStyle: {
        width:width*0.7,
        color:'red',
        marginBottom:8,
        fontSize:13,

    },
    bottomTitleStyle: {
        color:'blue',
    }


});

module.exports = GListViewDemo;