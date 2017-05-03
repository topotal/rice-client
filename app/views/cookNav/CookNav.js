import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import NavigationWindow from '../common/NavigationWindow';
import SettingWindow from './setting/SettingWindow';

/**
 * メインナビゲーションウィンドウクラスです。
 */
export default class CookNav extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._initialRoute = {
      component: SettingWindow
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
