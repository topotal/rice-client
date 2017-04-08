import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {_} from 'lodash';

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
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
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
