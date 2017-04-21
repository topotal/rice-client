import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import TimelineListRow from './TimelineListRow';

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

    this._renderRow = this._renderRow.bind(this);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['a', 'a'])
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}/>
    );
  }

  /**
   * Rowを描画します
   */
  _renderRow(recipeData) {
    return (
      <TimelineListRow recipeData={recipeData}/>
    );
  }
}
