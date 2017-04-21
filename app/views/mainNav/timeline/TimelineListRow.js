import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TimelineListRow from './TimelineListRow';

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
      <View>
        <Text>テストテキスト</Text>
      </View>
    );
  }
}
