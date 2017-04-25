import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SceneModel from '../../models/SceneModel';

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

    // 初期ルート
    this._initialRoute = this.props.initialRoute;
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    // シーンモデルにNavWindowをセット
    SceneModel.instance.currentNavWindow = this.refs.nav;
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
      <route.component {...route.passProps} />
    )
  }
}
