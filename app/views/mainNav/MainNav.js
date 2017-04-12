import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import NavigationWindow from '../common/NavigationWindow';
import TimelineScene from './timeline/TimelineScene';

/**
 * メインナビゲーションウィンドウクラスです。
 */
export default class MainNav extends NavigationWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._initialRoute = {
      component: TimelineScene
    }
  }
}
