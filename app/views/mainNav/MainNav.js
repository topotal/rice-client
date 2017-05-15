import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import NavigationWindow from '../common/NavigationWindow';
import TabWindow from './tabWindow/TabWindow';

/**
 * メインナビゲーションウィンドウクラスです。
 */
export default class MainNav extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._initialRoute = {
      component: TabWindow
    }
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <NavigationWindow
        initialRoute={this._initialRoute}
        {...this.props}/>
    );
  }
}
