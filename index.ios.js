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
var LoginView = require('./loginView');
var JScrollViewDemo = require('./JScrollViewDemo');
var FScrollViewDemo = require('./FScrollViewDemo');
class BViewDemo extends Component {
  render() {
    return (
        <JScrollViewDemo/>
    );
  }
}
AppRegistry.registerComponent('BViewDemo', () => BViewDemo);

