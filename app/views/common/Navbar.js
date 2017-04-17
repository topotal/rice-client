import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {_} from 'lodash';
import Button from '../common/Button';
import styles from '../../styles/common/NavBarStyle';

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
