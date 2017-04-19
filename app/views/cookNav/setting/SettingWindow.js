import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import FireUpWindow from '../fireUp/FireUpWindow';
import Const from '../../../styles/Const';

/**
 * 炊飯設定画面クラスです。
 */
export default class SettingWindow extends Component {

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
   * 描画します。
   */
  render() {
    return (
      <Window {...this.props}
        title="炊飯設定"
        navBarColor={Const.ORANGE}>
        <ColorButton
          text="炊飯開始"
          style={styles.cookButton}
          onPress={this._onPressCook}/>
        <ColorButton
          text="キャンセル"
          style={styles.cancelButton}
          onPress={this._onPressCancel}/>
      </Window>
    );
  }

  /**
   * 炊飯開始ボタン押下時のハンドラーです。
   */
  _onPressCook() {
    this.props.onSelectForward({
      component: FireUpWindow
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
