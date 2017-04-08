import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../common/Window';
import SceneManager from '../../utils/SceneManager';
import Button from '../common/Button';
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
      <Window title="Home">
        <Button onPress={this._onPressRecipe}>
          <Text>レシピ</Text>
        </Button>
        <Button onPress={this._onPressCook}>
          <Text>炊飯</Text>
        </Button>
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
