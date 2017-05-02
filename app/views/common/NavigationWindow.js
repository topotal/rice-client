import React, { Component } from 'react';
import { Navigator } from 'react-native';

/**
 * ナビゲーションウィンドウクラスです。
 */
export default class NavigationWindow extends Component {

  /** 初期ルート */
  _initialRoute;

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._renderScene = this._renderScene.bind(this);
    this._onSelectNext = this._onSelectNext.bind(this);
    this._onSelectPrev = this._onSelectPrev.bind(this);

    // 初期ルート
    this._initialRoute = this.props.initialRoute;
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Navigator
        ref="nav"
        initialRoute={this._initialRoute}
        renderScene={this._renderScene} />
    );
  }

  /**
   * シーンを描画します。
   */
  _renderScene(route, navigator) {
    return (
      <route.component
        onSelectNext={this._onSelectNext}
        onSelectPrev={this._onSelectPrev}
        {...route.passProps} />
    )
  }

  /**
   * 次のWindow選択時のハンドラーです。
   */
  _onSelectNext(route) {
    // ルートを追加
    this.refs.nav.push(route);
  }

  /**
   * 前のWindow選択時のハンドラーです。
   */
  _onSelectPrev() {
    // ルートを削除
    this.refs.nav.pop();
  }
}
