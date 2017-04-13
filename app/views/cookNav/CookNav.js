import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import NavigationWindow from '../common/NavigationWindow';
import SettingScene from './setting/SettingWindow';

/**
 * メインナビゲーションウィンドウクラスです。
 */
export default class CookNav extends NavigationWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._initialRoute = {
      component: SettingScene
    }
  }
}
