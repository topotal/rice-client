import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {_} from 'lodash';
import styles from '../../../styles/mainNav/tabWindow/TabBarStyle';
import TabBarItem from './TabBarItem';

/**
 * タブバークラスです。
 */
export default class TabBar extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onPressItem = this._onPressItem.bind(this);

    this._items = [
      { id: 'home', title: 'ホーム' },
      { id: 'cook', title: '炊飯' },
      { id: 'profile', title: 'プロフィール' }
    ];

    this.state = {
      currentItemID: 'home'
    };
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.wrapper}>
        {this._createItems()}
      </View>
    );
  }

  /**
   * アイテムの配列を生成
   */
  _createItems() {
    return _.map(this._items, (data, i) => {
      return (
        <TabBarItem
          style={styles.item}
          itemData={data}
          onPress={this._onPressItem}
          active={data.id == this.state.currentItemID}
          key={i}/>
      );
    });
  }

  /**
   * アイテム押下時のハンドラーです。
   */
  _onPressItem(data) {
    console.info(data);
    // カレントを更新
    this.setState({
      currentItemID: data.id
    });
    // フォーカス変更イベントを発火
    this.props.onChangeFocus(data.id);
  }
}
