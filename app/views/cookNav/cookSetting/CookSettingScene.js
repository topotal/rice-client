import React, {Component} from 'react';
import Window from '../common/Window';
import ColorButton from '../common/ColorButton';
import SceneManager from '../../utils/SceneManager';
import CookScene from '../cook/CookScene';

/**
 * 炊飯設定画面クラスです。
 */
export default class CookSettingScene extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressCook = this._onPressCook.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Window
        title="炊飯設定"
        color="#FF9B00"
        style={styles.wrapper}
        backButtonEnable={this.props.backButton}>
        <ColorButton
          text="炊飯開始"
          style={styles.cookButton}
          onPress={this._onPressCook}/>
      </Window>
    );
  }

  /**
   * 炊飯開始ボタン押下時のハンドラーです。
   */
  _onPressCook() {
    SceneManager.instance.to(CookScene);
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
