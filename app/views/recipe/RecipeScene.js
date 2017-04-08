import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import SceneManager from '../../utils/SceneManager';

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

    this._onPressBack = this._onPressBack.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.container}>
        <Navbar title="レシピ">
          <Button style={styles.backButton} onPress={this._onPressBack}>
            <Text>戻る</Text>
          </Button>
        </Navbar>
      </View>
    );
  }

  /**
   * 戻るボタン押下時の
   */
  _onPressBack() {
    SceneManager.instance.back();
  }
}

const styles = {
  container: {
    flex: 1,
    position: 'relative'
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    bottom: 0,
    backgroundColor: "#F00"
  }
};
