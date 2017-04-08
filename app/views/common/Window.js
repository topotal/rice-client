import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
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
        <StatusBar
          barStyle="light-content"
        />
        <Navbar title={this.props.title} backButtonEnable={this.props.backButtonEnable}/>
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
