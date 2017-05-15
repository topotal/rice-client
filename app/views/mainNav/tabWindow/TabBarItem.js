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

    this._onPress = this._onPress.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Button
        onPress={this._onPress}
        style={[styles.wrapper, this.props.active && styles.active, this.props.style]}>
        <View style={styles.icon} />
        <Text style={styles.title}>{this.props.itemData.title}</Text>
      </Button>
    );
  }

  /**
   * プレス時のハンドラーです。
   */
  _onPress() {
    // プレスイベントを発火
    this.props.onPress(this.props.itemData);
  }
}
