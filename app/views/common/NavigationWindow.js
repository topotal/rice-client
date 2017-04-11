import React, { Component } from 'react';
import { Navigator } from 'react-native';

/**
 * ナビゲーションウィンドウクラスです。
 */
export default class NavigationWindow extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._renderScene = this._renderScene.bind(this);
    this._onSelectBack = this._onSelectBack.bind(this);
    this._onSelectForward = this._onSelectForward.bind(this);
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
        onSelectBack={this._onSelectBack}
        onSelectForward={this._onSelectForward}
        onSelectBackNav={this.props.onSelectBack}
        onSelectForwardNav={this.props.onSelectForward}
        {...route.passProps}
        />
    )
  }

  /**
   * 次のシーンを選択された際のハンドラーです。
   */
  _onSelectForward(route) {
    // 新しいシーンを追加
    this.refs.nav.push(route);
  }

  /**
   * 戻るを選択された際のハンドラーです。
   */
  _onSelectBack(event) {
    // シーンの末尾を削除
    this.refs.nav.pop();
  }
}
