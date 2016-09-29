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
  View
} from 'react-native';

class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.titleStyle}>
          <Text>这里是文字</Text>
        </View>
        <View style={styles.contentStyle}>
          <Text>这里是文字</Text>
        </View>

        <View style={styles.titleStyle}>
          <Text>这里是文字</Text>
        </View>
        <View style={styles.contentStyle}>
          <Text>这里是文字</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width:400,
    height:300,
    marginTop:50,
    flexDirection:'row',
  },
  titleStyle: {
    width:80,
    height:100,
    marginLeft:10,
    backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    width:80,
    height:100,
    backgroundColor:'green',
    marginLeft:10
  }
  });

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
