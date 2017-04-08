import React, {Component} from 'react';
import Window from '../common/Window';

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
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Window
        title="炊飯"
        color="#FF9B00"
        backButtonEnable={this.props.backButton}>
      </Window>
    );
  }
}
