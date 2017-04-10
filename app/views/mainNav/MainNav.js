import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import NavigationWindow from '../common/NavigationWindow';
import HomeScene from './timeline/HomeScene';

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
      component: HomeScene
    }
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <NavigationWindow
        initialRoute={this._initialRoute} />
    );
  }
}
