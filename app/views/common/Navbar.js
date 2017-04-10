import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
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

    this._onPressBack = this._onPressBack.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let style = _.clone(styles.wrapper);
    style.backgroundColor = this.props.color;

    return (
      <View style={style}>
        {this._createTitle()}
        {this._createBackButton()}
        {this.props.children}
      </View>
    );
  }

  /**
   * 戻るボタンを生成します。
   */
  _createBackButton() {
    let backButton = null;
    if(this.props.backButtonEnable) {
      backButton = (
        <Button style={styles.backButton} onPress={this._onPressBack}>
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

  /**
   * 戻るボタン押下時のハンドラーです。
   */
  _onPressBack() {
    // レシピページへ遷移
  }
}

let styles = {
  wrapper: {
    height: 64,
    backgroundColor: '#BCCC14',
    overflow: 'hidden'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 44,
    color: '#FFF',
    fontSize: 18
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 10
  },
  backButtonText: {
    color: '#FFF'
  }
};
