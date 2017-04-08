import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import {_} from 'lodash';
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
        <Navbar
          color={this.props.color}
          title={this.props.title}
          backButtonEnable={this.props.backButtonEnable}/>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: '#FDFFF6'
  }
};
