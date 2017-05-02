import React, { Component } from 'react';
import { Navigator } from 'react-native';
import MainNav from './views/mainNav/MainNav';
import styles from './styles/AppStyle';

/**
 * メインクラスです。
 */
export default class App extends Component {

  /** 初期ルート */
  _initialRoute = {
    component: MainNav,
    passProps: {}
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._renderScene = this._renderScene.bind(this);
    this._onSelectNext = this._onSelectNext.bind(this);
    this._onSelectPrev = this._onSelectPrev.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Navigator
        ref="nav"
        initialRoute={this._initialRoute}
        renderScene={this._renderScene}
        style={styles.wrapper}
        configureScene={this._configureScene}/>
    );
  }

  /**
   * シーンの設定をします。
   */
  _configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  /**
   * シーンを描画します。
   */
  _renderScene(route, navigator) {
    // ルートデータ無ければ処理しない
    if(!route) {
      return;
    }

    return (
      <route.component
        onSelectNext={this._onSelectNext}
        onSelectPrev={this._onSelectPrev}
        {...route.passProps}/>
    );
  }

  /**
   * 次のNavWin選択時のハンドラーです。
   */
  _onSelectNext(route) {
    // ルートを追加
    this.refs.nav.push(route);
  }

  /**
   * 前のNavWin選択時のハンドラーです。
   */
  _onSelectPrev() {
    // ルートを削除
    this.refs.nav.pop();
  }
}
