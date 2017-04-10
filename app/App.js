import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import MainNav from './views/mainNav/MainNav';

/**
 * メインクラスです。
 */
export default class App extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onForwardScene = this._onForwardScene.bind(this);
    this._onBackScene = this._onBackScene.bind(this);
    this._renderScene = this._renderScene.bind(this);

    // 初期ルートを設定
    this._initialRoute = {
      component: MainNav,
      passProps: {}
    };
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
        configureScene={this._configureScene}/>
    );
  }

  /**
   * シーンの設定をします。
   */
  _configureScene(route, routeStack) {
    if(route.passProps.isModal) {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  /**
   * シーンを描画します。
   */
  _renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  /**
   * シーンが進行した際のハンドラーです。
   */
  _onForwardScene(event) {
    this.refs.nav.push(event.route);
  }

  /**
   * シーンがバックした際のハンドラーです。
   */
  _onBackScene() {
    this.refs.nav.pop();
  }
}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
