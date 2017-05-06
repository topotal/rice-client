import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import CompleteWindow from '../complete/CompleteWindow';
import Const from '../../../styles/Const';
import styles from '../../../styles/cookNav/fireUp/FireUpWindowStyle';

/**
 * 着火画面クラスです。
 */
export default class FireUpWindow extends Component {

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
  render() {
    return (
      <Window {...this.props}
        navBarColor={Const.ORANGE}
        title="炊飯">
        <View style={styles.wrapper}>
          <ColorButton
            text="完成"
            style={styles.completeButton}
            onPress={this._onPressComplete}/>
        </View>
      </Window>
    );
  }

  /**
   * 完了ボタン押下時のハンドラーです。
   */
  _onPressComplete() {
    this.props.onSelectNext({
      component: CompleteWindow,
      passProps: {}
    });
  }
}
