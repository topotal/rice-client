import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
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

    this._onPress = this._onPress.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View style={styles.content}>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  /**
   * プレス時のハンドラーです。
   */
  _onPress() {
    // プレスイベントを発火
    this.props.onPress();
  }
}
