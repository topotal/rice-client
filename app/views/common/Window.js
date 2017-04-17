import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
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
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar
          barStyle="light-content"
        />
        <Navbar
          color={this._navbarColor}
          title={this._title}
          backButtonDisabled={this._backButtonDisabled}
          onPressBack={this.props.onSelectBack}/>
        <View style={styles.content}>
          {this._renderContent()}
        </View>
      </View>
    );
  }

  /**
   * コンテンツを生成します。
   */
  _renderContent() {
    return (
      <View>
        <Text>コンテンツです</Text>
      </View>
    );
  }
}
