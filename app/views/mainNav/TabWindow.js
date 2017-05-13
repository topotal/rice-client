import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Window from '../common/Window';
import TabBar from './TabBar';

/**
 * タブウィンドウクラスです。
 */
export default class TabWindow extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={{flex: 1}} {...this.props}>
        <TabBar />
      </View>
    );
  }
}
