import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {_} from 'lodash';
import Button from '../common/Button';
import styles from '../../styles/common/ColorButtonStyle';

/**
 * カラーボタンクラスです。
 */
export default class ColorButton extends Component {

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
    let wrapperStyle = StyleSheet.flatten([
      styles.wrapper,
      this.props.style
    ]);

    return (
      <Button style={wrapperStyle} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </Button>
    );
  }
}
