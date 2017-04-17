import React, { Component } from 'react';
import { View } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import RecipeWindow from '../recipe/RecipeWindow';
import CookNav from '../../cookNav/CookNav';
import Const from '../../../styles/Const';
import styles from '../../../styles/mainNav/timeline/TimelineWindowStyle';

/**
 * タイムライン画面クラスです。
 */
export default class TimelineWindow extends Window {

  /** タイトル */
  _title = 'タイムライン';
  /** navbarの色 */
  _navbarColor = Const.GREEN;
  /** 戻るボタンの有無 */
  _backButtonDisabled = true;

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
   * コンテンツを描画します。
   */
  _renderContent() {
    return (
      <View style={styles.wrapper}>
        <ColorButton
          text="レシピ詳細"
          style={styles.recipeButton}
          onPress={this._onPressRecipe} />
        <ColorButton
          text="炊飯"
          style={styles.cookButton}
          onPress={this._onPressCook} />
      </View>
    );
  }

  /**
   * レシピ押下時のハンドラーです。
   */
  _onPressRecipe() {
    // レシピページへ遷移
    this.props.onSelectForward({
      component: RecipeWindow
    });
  }

  /**
   * 炊飯押下時のハンドラーです。
   */
  _onPressCook() {
    // レシピページへ遷移
    this.props.onSelectForwardNav({
      component: CookNav
    });
  }
}
