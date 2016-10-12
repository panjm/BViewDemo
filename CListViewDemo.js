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
    TouchableOpacity
} from  'react-native';

// 导入json数据
var Car = require('./Car.json');
// 屏幕宽高
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

// 列数
var clos = 3;
//  宽高
var boxWH = 90;
// 列间距
var vMargin = (width - clos * boxWH) / (clos+1);
// 上边距
var TMargin = 25;


var CListViewDemo = React.createClass({

    // 初始化数据源
    getInitialState()
    {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,  // 获取组中数据
                getRowData: getRowData,  // 获取行中的数据
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 != s2,
            })
        }
    },
    //  复杂操作 异步操作
    componentDidMount()
    {
        // 调用json数据
        this.loadDataFromJson();

    },
    // 调用json数据
    loadDataFromJson()
    {
        // 拿到json数据
        var jsonData = Car.data;
        // 定义相关的变量
        var dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];
        var cars = [];

        // 遍历
        for (var i = 0; i < jsonData.length; i++) {
            // 把组号放到sectionIDs中
            sectionIDs.push(i);
            // 把组中内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title;
            // 取出该组中所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];  // 定义row中的数组

            // 遍历所有的车的数组
            for (var j = 0; j < cars.length; j++) {
                // 把行号放入rowIDs中
                rowIDs[i].push(j);
                // 把每一行中的内容放入到dataBlod中
                dataBlob[i + ':' + j] = cars[j];
            }
        }
        // 更新状态
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    },

    render()
    {
        return (
            <View style={styles.outerViewStyle}>
                {/* 头部 */}
                <View style={styles.hearderViewStyle}>
                    <Text style={{color:'white', fontSize:18}}>SeeMyGo品牌</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    // 组头数据
                    renderSectionHeader={this.renderSectionHeader}
                    contentContainerStyle={styles.listViewStyle}
                />
            </View>
        );
    },
    // 每一行数据
    renderRow(rowData)
    {
        return(
            <View style={styles.rowViewStyle}>
                <Image source={{uri:rowData.icon}} style={styles.iconViewStyle} />
                <Text style={{fontSize:11}}>{rowData.name}</Text>
            </View>
        );
    },
    // 每一组的组头
    renderSectionHeader(sectionData,sectionID)
    {
        return(
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={{fontSize:18,color:'blue',marginLeft:5}}>{sectionData}</Text>
            </View>
        );
    }


});

const styles = StyleSheet.create({
    outerViewStyle: {
        flex:1,
    },
    hearderViewStyle: {
        height:64,
        width:width,
        backgroundColor:'orange',
        // 剧中
        justifyContent:'center',
        alignItems:'center',
    },
    rowViewStyle: {
        padding:10,
        width:boxWH,
        height:boxWH,
        marginLeft:vMargin,
        marginTop:TMargin,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    iconViewStyle: {
        width:60,
        height:60,
        marginRight:5,
    },
    sectionHeaderViewStyle: {
        backgroundColor:'#e8e8e8',
        height:25,
        width:width,
    },
    listViewStyle: {
        //  主轴方向
      flexDirection:'row',
        // 多行显示
        flexWrap:'wrap',
    }
});

module.exports = CListViewDemo;