import React, { Component } from 'react';
import { Text } from 'react-native';
import {_} from 'lodash';
import Button from '../common/Button';

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
    return (
      <Button style={styles.wrapper} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </Button>
    );
  }
}

let styles = {
  wrapper: {
    backgroundColor: '#BCCC14',
    height: 60,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.14,
    shadowRadius: 0
  },
  text: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    lineHeight: 60
  }
};
