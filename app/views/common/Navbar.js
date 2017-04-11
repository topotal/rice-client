import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Platform } from 'react-native';
import {_} from 'lodash';
import Button from '../common/Button';

/**
 * ナビゲーションバークラスです。
 */
export default class Navbar extends Component {

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
    let style = _.clone(styles.wrapper);
    style.backgroundColor = this.props.color;

    return (
      <View style={style}>
        <View style={styles.body}>
          {this._createTitle()}
          {this._createBackButton()}
          {this.props.children}
        </View>
      </View>
    );
  }

  /**
   * 戻るボタンを生成します。
   */
  _createBackButton() {
    let backButton = null;
    if(!this.props.backButtonDisabled) {
      backButton = (
        <Button style={styles.backButton} onPress={this.props.onPressBack}>
          <Text style={styles.backButtonText}>戻る</Text>
        </Button>
      );
    }
    return backButton;
  }

  /**
   * タイトルを生成します。
   */
  _createTitle() {
    let title = null;
    if(this.props.title) {
      title = (<Text style={styles.title}>{this.props.title}</Text>);
    }
    return title;
  }
}

let styles = {
  wrapper: {
    height: Platform.OS === 'android' ? 44 : 64,
    backgroundColor: '#BCCC14',
    overflow: 'hidden'
  },
  body: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18
  },
  backButton: {
    position: 'absolute',
    left: 10
  },
  backButtonText: {
    color: '#FFF'
  }
};
