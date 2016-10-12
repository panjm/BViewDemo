/**
 * Created by jmptpanjm on 16/10/10.
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
var shareData = require('./shareData.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


// 列数
var clos = 3;
//  宽高
var boxWH = 80;
// 列间距
var vMargin = (width - clos * boxWH) / (clos+1);
// 上边距
var TMargin = 25;


var AListViewDemo = React.createClass({

    getInitialState()
    {
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        return{
            dataSource:ds.cloneWithRows(shareData.data)
        }
    },

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    },
    renderRow(rowData,sectionID,rowID)
    {
        return(

            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert('点击了第'+rowID+'个')}>
                <Image source={{uri:rowData.icon}} style={styles.iconStyle} />
                <Text style={{fontSize:11,marginTop:3,textAlign:'center'}}>{rowData.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }


});

const styles = StyleSheet.create({
    listViewStyle: {
        // 改变主轴方向
        flexDirection:'row',
        // 多行显示
        flexWrap:'wrap',

    },
    container: {
        width:boxWH,
        height:boxWH,
        marginLeft:vMargin,
        marginTop:TMargin,
        // 剧中显示
        justifyContent:'center',
        alignItems:'center',

    },
    iconStyle: {
        width:60,
        height:60,
    }


});

module.exports = AListViewDemo;
