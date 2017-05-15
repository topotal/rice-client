import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Window from '../../common/Window';
import RecipeWindow from '../recipe/RecipeWindow';
import TimelineList from './TimelineList';
import Const from '../../../styles/Const';
import styles from '../../../styles/timelineNav/timeline/TimelineWindowStyle';

/**
 * タイムライン画面クラスです。
 */
export default class TimelineWindow extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressRecipe = this._onPressRecipe.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Window {...this.props}
        title="タイムライン"
        backButtonDisabled={true}>
        <TimelineList
          style={styles.timelineList}
          onPressRecipe={this._onPressRecipe}/>
      </Window>
    );
  }

  /**
   * レシピ押下時のハンドラーです。
   */
  _onPressRecipe() {
    // レシピページへ遷移
    this.props.onSelectNext({
      component: RecipeWindow,
      passProps: {}
    });
  }
}
