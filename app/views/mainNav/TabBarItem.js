import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/mainNav/TabBarItemStyle';

/**
 * タブバーアイテムクラスです。
 */
export default class TabBar extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.wrapperStyle = StyleSheet.flatten([
      styles.wrapper,
      this.props.style
    ]);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={this.wrapperStyle}>
        <View style={styles.icon}></View>
        <Text style={styles.title}>タイトル</Text>
      </View>
    );
  }
}
