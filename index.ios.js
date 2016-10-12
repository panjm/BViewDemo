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
var GListViewDemo = require('./GListViewDemo');
var HListViewDemo = require('./HListViewDemo');
var AListViewDemo = require('./AListViewDemo');
var CListViewDemo = require('./CListViewDemo');
var EListViewDemo = require('./EListViewDemo');


class BViewDemo extends Component {
  render() {
    return (
        // <EListViewDemo/>
        <CListViewDemo/>
      );
  }
}
AppRegistry.registerComponent('BViewDemo', () => BViewDemo);

