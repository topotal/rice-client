import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import FireUpWindow from '../fireUp/FireUpWindow';
import Const from '../../../styles/Const';
import styles from '../../../styles/cookNav/setting/SettingWindowStyle';

/**
 * 炊飯設定画面クラスです。
 */
export default class SettingWindow extends Component {

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
        navBarColor={Const.ORANGE}
        backButtonDisabled={true}>
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
    // レシピページへ遷移
    this.props.onSelectNext({
      component: FireUpWindow,
      passProps: {}
    });
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onPressCancel() {
    // NavWinを閉じる
    this.props.onSelectPrevNav();
  }
}
