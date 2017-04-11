import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Window from '../../common/Window';
import ColorButton from '../../common/ColorButton';
import RecipeScene from '../recipe/RecipeScene';
import CookNav from '../../cookNav/CookNav';

/**
 * ホーム画面シーンです。
 */
export default class HomeScene extends Window {

  /** タイトル */
  _title = 'タイムライン';
  /** navbarの色 */
  _navbarColor = '#BCCC14';
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
      component: RecipeScene
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

let styles = {
  wrapper: {
    flex: 1,
    padding: 10
  },
  recipeButton: {
    marginBottom: 10
  },
  cookButton: {
    backgroundColor: '#FF9B00'
  }
};
