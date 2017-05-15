import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../../styles/mainNav/tabWindow/TabBarItemStyle';
import Button from '../../common/Button';

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
      <Button
        onPress={this.props.onPress}
        style={this.wrapperStyle}>
        <View style={styles.icon} />
        <Text style={styles.title}>{this.props.itemData.title}</Text>
      </Button>
    );
  }
}
