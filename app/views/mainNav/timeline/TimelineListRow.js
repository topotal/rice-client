import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TimelineListRow from './TimelineListRow';
import styles from '../../../styles/mainNav/timeline/TimelineListRowStyle';

/**
 * タイムラインリストクラスです。
 */
export default class TimelineList extends Component {

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
      <View style={styles.wrapper}>
        <View style={styles.content}>
        </View>
      </View>
    );
  }
}
