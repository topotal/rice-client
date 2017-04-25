import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import TimelineListRow from './TimelineListRow';
import styles from '../../../styles/mainNav/timeline/TimelineListRowStyle';
import SceneModel from '../../../models/SceneModel';
import RecipeWindow from '../recipe/RecipeWindow';

/**
 * タイムラインリストクラスです。
 */
export default class TimelineList extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPress = this._onPress.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View style={styles.content}>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  /**
   * タップ時のハンドラーです。
   */
  _onPress() {
    SceneModel.instance.pushWindow({
      component: RecipeWindow
    });
  }
}
