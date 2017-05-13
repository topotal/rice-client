import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {_} from 'lodash';
import styles from '../../styles/mainNav/TabBarStyle';
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
    return _.map([{}, {}, {}], (data, i) => {
      return (<TabBarItem style={styles.item} key={i}/>);
    });
  }
}
