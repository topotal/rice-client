import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import Const from '../../../styles/Const';
import styles from '../../../styles/cookNav/complete/CompleteWindowStyle';

/**
 * 炊飯完了シーンクラスです。
 */
export default class CompleteWindow extends Component {

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
  render() {
    return (
      <Window {...this.props}
        title="おつかれさまでした"
        navBarColor={Const.ORANGE}
        backButtonDisabled={true}>
        <View style={styles.wrapper}>
          <ColorButton
            text="記録に残す"
            style={styles.cookButton}
            onPress={this._onPressSubmit}/>
        </View>
      </Window>
    );
  }

  /**
   * 記録に残すボタン押下時のハンドラーです。
   */
  _onPressSubmit() {
    // navWinの戻るイベントを発火
    this.props.onSelectPrevNav();
  }
}
