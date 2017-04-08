import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import SceneManager from '../../utils/SceneManager';
import Navbar from '../common/Navbar';
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
      <View style={styles.container}>
        <Navbar title="Home"/>
        <Button onPress={this._onPressRecipe}>
          <Text>レシピ</Text>
        </Button>
        <Button onPress={this._onPressCook}>
          <Text>炊飯</Text>
        </Button>
      </View>
    );
  }

  /**
   * レシピ押下時のハンドラーです。
   */
  _onPressRecipe() {
    // レシピページへ遷移
    SceneManager.instance.to({
      component: RecipeScene,
      passProps: {}
    });
  }

  /**
   * 炊飯押下時のハンドラーです。
   */
  _onPressCook() {
    // レシピページへ遷移
    SceneManager.instance.to({
      component: CookScene,
      passProps: {}
    });
  }
}

const styles = {
  container: {
    flex: 1
  }
};
