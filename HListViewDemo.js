/**
 * Created by jmptpanjm on 16/10/9.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

// 导入json数据
var Wine = require('./Wine.json');
// 获取屏幕宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var HListViewDemo = React.createClass({

    // 初始化数据
    getInitialState()
    {
        // 设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        // 设置返回数据
        return {
            dataSource:ds.cloneWithRows(Wine)
        }
    },


    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },
    // 返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow)
    {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了第'+rowID+'行')}}>
            <View style={styles.cellViewStyle}>
                <Image source={{uri:rowData.image}} style={styles.leftImageStyle} />
                <View style={styles.rightViewStyle}>
                    <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                    <Text style={styles.bottomTitleStyle}>${rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

});

const styles = StyleSheet.create({
    cellViewStyle: {
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
        backgroundColor:'white',
        padding:10,

    },
    leftImageStyle: {
        width:60,
        height:60,
        marginRight:15,
    },
    rightViewStyle: {
        justifyContent:'center',
    },
    topTitleStyle: {
        width:width*0.7,
        color:'red',
        fontSize:13,
        marginBottom:8,

    },
    bottomTitleStyle: {
        color:'blue'
    }


});

module.exports = HListViewDemo;