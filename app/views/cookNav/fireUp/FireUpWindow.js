import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import CookCompleteScene from '../cookComplete/CookCompleteScene';

/**
 * 着火画面クラスです。
 */
export default class FireUpWindow extends Window {

  /** タイトル */
  _title = '炊飯';
  /** navbarの色 */
  _navbarColor = '#FF9B00';

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressComplete = this._onPressComplete.bind(this);
  }

  /**
   * コンテンツを描画します。
   */
  _renderContent() {
    return (
      <View style={styles.wrapper}>
        <ColorButton
          text="完成"
          style={styles.completeButton}
          onPress={this._onPressComplete}/>
      </View>
    );
  }

  /**
   * 完了ボタン押下時のハンドラーです。
   */
  _onPressComplete() {
    this.props.onSelectForward({
      component: CookCompleteScene
    });
  }
}

let styles = {
  wrapper: {
    padding: 10
  },
  completeButton: {
    backgroundColor: '#BCCC14'
  }
};
