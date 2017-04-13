import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import CookScene from '../cook/CookScene';

/**
 * 炊飯設定画面クラスです。
 */
export default class SettingWindow extends Window {

  /** タイトル */
  _title = '炊飯設定';
  /** navbarの色 */
  _navbarColor = '#FF9B00';
  /** 戻るボタンの有無 */
  _backButtonDisabled = true;

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressCook = this._onPressCook.bind(this);
    this._onPressCancel = this._onPressCancel.bind(this);
  }

  /**
   * コンテンツを描画します。
   */
  _renderContent() {
    return (
      <View style={styles.wrapper}>
        <ColorButton
          text="炊飯開始"
          style={styles.cookButton}
          onPress={this._onPressCook}/>
        <ColorButton
          text="キャンセル"
          style={styles.cancelButton}
          onPress={this._onPressCancel}/>
      </View>
    );
  }

  /**
   * 炊飯開始ボタン押下時のハンドラーです。
   */
  _onPressCook() {
    this.props.onSelectForward({
      component: CookScene
    });
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onPressCancel() {
    this.props.onSelectBackNav();
  }
}

let styles = {
  wrapper: {
    padding: 10
  },
  cookButton: {
    backgroundColor: '#BCCC14',
    marginBottom: 10
  },
  cancelButton: {
    backgroundColor: '#CCCCCC'
  }
};
