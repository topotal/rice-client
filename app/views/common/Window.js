import React, { Component } from 'react';
import { View } from 'react-native';
import Navbar from '../common/Navbar';

/**
 * ウィンドウクラス
 */
export default class Window extends Component {

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
        <Navbar title={this.props.title}/>
        <View>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1
  }
};
