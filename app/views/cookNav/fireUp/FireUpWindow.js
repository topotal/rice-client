import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import CompleteWindow from '../complete/CompleteWindow';

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

let styles = {
  wrapper: {
    padding: 10
  },
  completeButton: {
    backgroundColor: '#BCCC14'
  }
};
