import React, { Component } from 'react';
import { ListView, Text, Image } from 'react-native';
import TimelineListRow from './TimelineListRow';
import styles from '../../../styles/mainNav/timeline/TimelineListStyle';

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

    this._onPressRow = this._onPressRow.bind(this);

    this._renderRow = this._renderRow.bind(this);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['a', 'a', 'a', 'a', 'a', 'a',])
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Image
        source={require('../../../imgs/mainNav/timeline/background.png')}
        style={styles.backgroundImage}>
        <ListView
          style={{paddingTop: 10}}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}/>
      </Image>
    );
  }

  /**
   * Rowを描画します
   */
  _renderRow(recipeData) {
    return (
      <TimelineListRow
        recipeData={recipeData}
        onPress={this._onPressRow}/>
    );
  }

  /**
   * Rowのプレス時のハンドラーです。
   */
  _onPressRow() {
    // レシピプレスイベントを発火
    this.props.onPressRecipe();
  }
}
