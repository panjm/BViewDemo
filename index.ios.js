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

var ImageDemo = require('./ImageDemo');
var QQImageDemo = require('./QQImageDemo');
class BViewDemo extends Component {
  render() {
    return (
     // <ImageDemo />
     <QQImageDemo />
    );
  }
}
AppRegistry.registerComponent('BViewDemo', () => BViewDemo);

