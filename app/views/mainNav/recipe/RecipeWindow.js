import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Window from '../../common/Window';
import styles from '../../../styles/mainNav/recipe/RecipeWindowStyle';
import Const from '../../../styles/Const';

/**
 * レシピ詳細ウィンドウクラス
 */
export default class RecipeWindow extends Window {

  /** タイトル */
  _title = 'レシピ詳細';
  /** navbarの色 */
  _navbarColor = Const.GREEN;

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * コンテンツを描画します。
   * @override
   */
  _renderContent() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>レシピ詳細が入ります。</Text>
      </View>
    );
  }
}
