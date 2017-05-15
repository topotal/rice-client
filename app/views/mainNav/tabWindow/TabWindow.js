import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabBar from './TabBar';
import styles from '../../../styles/mainNav/tabWindow/TabWindowStyle';
import TimelineNav from '../../timelineNav/TimelineNav';

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
      <View style={styles.wrapper} {...this.props}>
        <View style={styles.content}>
          <TimelineNav />
        </View>
        <TabBar />
      </View>
    );
  }
}
