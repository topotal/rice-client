import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import NavigationWindow from '../common/NavigationWindow';
import ProfileWindow from './profile/ProfileWindow';
import styles from '../../styles/timelineNav/TimelineNavStyle';

/**
 * プロフィールナビゲーションウィンドウクラスです。
 */
export default class ProfileNav extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._initialRoute = {
      component: ProfileWindow
    }
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <NavigationWindow
        style={[styles.wrapper, this.props.style]}
        initialRoute={this._initialRoute}
        {...this.props}/>
    );
  }
}
