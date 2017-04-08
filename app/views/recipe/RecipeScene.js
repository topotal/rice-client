import React, { Component } from 'react';
import Window from '../common/Window';

/**
 * レシピ詳細クラス
 */
export default class RecipeScene extends Component {

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
        title="レシピ詳細"
        color="#BCCC14"
        backButtonEnable={this.props.backButton}>
      </Window>
    );
  }
}
