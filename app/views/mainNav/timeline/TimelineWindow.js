import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import Button from '../../common/Button';
import RecipeWindow from '../recipe/RecipeWindow';
import CookNav from '../../cookNav/CookNav';
import Const from '../../../styles/Const';
import TimelineList from './TimelineList';
import styles from '../../../styles/mainNav/timeline/TimelineWindowStyle';
import SceneModel from '../../../models/SceneModel';

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
    this._onPressCook   = this._onPressCook.bind(this);
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
          style={styles.timelineList}/>
        <Button style={styles.cookButton}
          onPress={this._onPressCook}>
          <Image style={styles.cookButtonImg}
            source={require('../../../imgs/mainNav/timeline/cook_button.png')} />
        </Button>
      </Window>
    );
  }

  /**
   * レシピ押下時のハンドラーです。
   */
  _onPressRecipe() {
    // // レシピページへ遷移
    // this.props.onSelectForward({
    //   component: RecipeWindow
    // });
  }

  /**
   * 炊飯押下時のハンドラーです。
   */
  _onPressCook() {
    // レシピページへ遷移
    SceneModel.instance.pushNavWindow({
      component: CookNav
    });
  }
}
