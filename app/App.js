import React, { Component } from 'react';
import { Navigator } from 'react-native';
import MainNav from './views/mainNav/MainNav';
import styles from './styles/AppStyle';
import SceneModel from './models/SceneModel';

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

    this._onSelectBack = this._onSelectBack.bind(this);
    this._onSelectForward = this._onSelectForward.bind(this);
    this._renderScene = this._renderScene.bind(this);

    // 初期ルートを設定
    this._initialRoute = {
      component: MainNav,
      passProps: {}
    };
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    // シーンモデルにNavigatorをセット
    SceneModel.instance.mainNav = this.refs.nav;
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
    return (
      <route.component
        onSelectBack={this._onSelectBack}
        onSelectForward={this._onSelectForward}
        {...route.passProps} />
    );
  }

  /**
   * シーンが進行した際のハンドラーです。
   */
  _onSelectForward(route) {
    this.refs.nav.push(route);
  }

  /**
   * シーンがバックした際のハンドラーです。
   */
  _onSelectBack() {
    this.refs.nav.pop();
  }
}
