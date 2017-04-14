import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';

/**
 * 炊飯完了シーンクラスです。
 */
export default class CompleteWindow extends Window {

  /** タイトル */
  _title = 'おつかれさまでした！';
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

    this._onPressSubmit = this._onPressSubmit.bind(this);
  }

  /**
   * コンテンツを描画します。
   */
  _renderContent() {
    return (
      <View style={styles.wrapper}>
        <ColorButton
          text="記録に残す"
          style={styles.cookButton}
          onPress={this._onPressSubmit}/>
      </View>
    );
  }

  /**
   * 記録に残すボタン押下時のハンドラーです。
   */
  _onPressSubmit() {
    // navWinの戻るイベントを発火
    this.props.onSelectBackNav();
  }
}

let styles = {
  wrapper: {
    padding: 10
  },
  cookButton: {
    backgroundColor: '#BCCC14'
  }
};
