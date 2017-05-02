import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import {_} from 'lodash';
import Navbar from '../common/Navbar';
import styles from '../../styles/common/WindowStyle';

/**
 * ウィンドウクラス
 */
export default class Window extends Component {

  /** タイトル */
  _title = 'タイトル';
  /** navbarの色 */
  _navbarColor = '#BCCC14';
  /** 戻るボタンの禁止 */
  _backButtonDisabled = false;

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._title = props.title || this._title;
    this._navbarColor = props.navBarColor || this._navbarColor;
    this._backButtonDisabled = !!props.backButtonDisabled;
  }

  /**
   * 描画します。
   */
  render() {
    // navBarのスタイルを生成
    let navBarStyle = StyleSheet.create({
      wrapper: {
        backgroundColor: this._navbarColor
      }
    });

    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <Navbar
          title={this._title}
          style={navBarStyle.wrapper}
          backButtonDisabled={this._backButtonDisabled}
          onPressBack={this.props.onSelectPrev}/>
        <View style={styles.content}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
