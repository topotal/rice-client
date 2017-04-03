import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

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
      <TouchableWithoutFeedback onPress={this._onPress}>
        <View>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  /**
   * プレス時のハンドラーです。
   */
  _onPress() {
    console.info('onPress');
    // プレスイベントを発火
    this.props.onPress();
  }
}
