import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../common/Window';
import SceneManager from '../../utils/SceneManager';
import ColorButton from '../common/ColorButton';
import RecipeScene from '../recipe/RecipeScene';
import CookScene from '../cook/CookScene';

/**
 * ホーム画面シーンです。
 */
export default class HomeScene extends Component {

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
      <Window title="Home" style={styles.wrapper}>
        <ColorButton
          style={styles.recipeButton}
          text="レシピ詳細"
          onPress={this._onPressRecipe} />
        <ColorButton
          text="炊飯"
          onPress={this._onPressCook} />
      </Window>
    );
  }

  /**
   * レシピ押下時のハンドラーです。
   */
  _onPressRecipe() {
    // レシピページへ遷移
    SceneManager.instance.to(RecipeScene);
  }

  /**
   * 炊飯押下時のハンドラーです。
   */
  _onPressCook() {
    // レシピページへ遷移
    SceneManager.instance.to(CookScene);
  }
}

let styles = {
  wrapper: {
    padding: 10
  },
  recipeButton: {
    marginBottom: 10,
    backgroundColor: '#FF9B00'
  }
};
