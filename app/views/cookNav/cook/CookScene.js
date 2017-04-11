import React, {Component} from 'react';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';

/**
 * 炊飯画面クラスです。
 */
export default class CookScene extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressComplete = this._onPressComplete.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Window
        title="炊飯"
        color="#FF9B00"
        style={styles.wrapper}
        backButtonEnable={this.props.backButton}>
        <ColorButton
          text="完成"
          style={styles.completeButton}
          onPress={this._onPressComplete}/>
      </Window>
    );
  }

  /**
   * 完了ボタン押下時のハンドラーです。
   */
  _onPressComplete() {
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
