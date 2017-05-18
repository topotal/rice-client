import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabBar from './TabBar';
import styles from '../../../styles/mainNav/tabWindow/TabWindowStyle';
import TimelineNav from '../../timelineNav/TimelineNav';
import ProfileNav from '../../profileNav/ProfileNav';
import CookNav from '../../cookNav/CookNav';

/**
 * タブウィンドウクラスです。
 */
export default class TabWindow extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onSelectCook = this._onSelectCook.bind(this);
    this._onChangeTabBarFocus = this._onChangeTabBarFocus.bind(this);

    this.state = {
      currentPageId: 'home'
    }
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.wrapper} {...this.props}>
        <View style={styles.content}>
          <TimelineNav style={[styles.page, this.state.currentPageId == 'home' && styles.pageActive]} />
          <ProfileNav style={[styles.page, this.state.currentPageId == 'profile' && styles.pageActive]} />
        </View>
        <TabBar
          onSelectCook={this._onSelectCook}
          onChangeFocus={this._onChangeTabBarFocus}/>
      </View>
    );
  }

  /**
   * 炊飯が選択された際のハンドラーです。
   */
  _onSelectCook() {
    this.props.onSelectNextNav({
      component: CookNav
    });
  }

  /**
   * タブバーのフォーカスが変更された際のハンドラーです。
   */
  _onChangeTabBarFocus(pageId) {
    // カレントページIDを更新
    this.setState({ currentPageId: pageId });
  }
}
