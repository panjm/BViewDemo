/**
 * Created by jmptpanjm on 16/10/11.
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
} from 'react-native';

// 导入json数据
var Car = require('./Car.json');
// 宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var EListViewDemo = React.createClass({
    // 初始化数据源
    getInitialState()
    {
        var getSectionData = (dataBlob,sectionID) => {
          return dataBlob[sectionID]
        };
        var getRowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID + ':' + rowID]
        };
        return{
            dataSource:new ListView.DataSource({
                getSectionData:getSectionData,  // 获取组中数据
                getRowData:getRowData, // 获取行中数据
                rowHasChanged:(r1,r2)=>r1!==r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
            })
        }
    },
    // 处理复杂的数据操作
    componentDidMount()
    {
      this.loadDataFromJson();
    },
    // 调用json数据
    loadDataFromJson()
    {
        var jsonData = Car.data;
        var dataBlods = {},sectionIDs = [],rowIDs = [],cars = [];
        // 遍历
        for(var i=0;i<jsonData.length;i++)
        {
            // 把组号放到sectionID中
            sectionIDs.push(i);
            // 把组中的内容放入到dataBlod对象中
            dataBlods[i] = jsonData.title;
            // 取出该组中所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];

            // 遍历
            for(var j=0;j<cars.length;j++)
            {
                // 把行号放入到rowsID中
                rowIDs[i].push(j);
                // 把每一行中的内容放入到dataBlods中
                dataBlods[i+':'+'j'] = this.state.dataSource.cloneWithRowsAndSections(dataBlods,sectionIDs,rowIDs);

            }
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <Text>asdfas</Text>
            </View>
        );
    }




});

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});

module.exports = EListViewDemo;