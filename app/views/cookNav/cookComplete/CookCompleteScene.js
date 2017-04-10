import React, {Component} from 'react';
import Window from '../common/Window';
import ColorButton from '../common/ColorButton';
import SceneManager from '../../utils/SceneManager';

/**
 * 炊飯完了シーンクラスです。
 */
export default class CookCompleteScene extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressSubmit = this._onPressSubmit.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Window
        title="炊飯完了"
        color="#FF9B00"
        style={styles.wrapper}
        backButtonEnable={this.props.backButton}>
        <ColorButton
          text="記録に残す"
          style={styles.cookButton}
          onPress={this._onPressSubmit}/>
      </Window>
    );
  }

  /**
   * 記録に残すボタン押下時のハンドラーです。
   */
  _onPressSubmit() {
    console.info('submit');
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
