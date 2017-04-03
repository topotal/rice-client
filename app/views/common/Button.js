import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * ボタンクラスです。
 */
export default class Button extends Component {

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
      <View onPress={this._onPress}>
        {this.props.children}
      </View>
    );
  }

  /**
   * プレス時のハンドラーです。
   */
  onPress() {
    // プレスイベントを発火
    this.props.onPress();
  }
}
