import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';
import styles from '../../styles/common/NavBarStyle';
import SceneModel from '../../models/SceneModel';

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
    let wrapperStyle = StyleSheet.flatten([
      styles.wrapper,
      this.props.style
    ]);

    return (
      <View style={wrapperStyle}>
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
    SceneModel.instance.popWindow();
  }
}
