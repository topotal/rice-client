import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import HomeScene from './views/home/HomeScene';
import SceneManager from './utils/SceneManager';

export default class App extends Component {

  constructor(props) {
    super(props);

    this._onForwardScene = this._onForwardScene.bind(this);
    this._onBackScene = this._onBackScene.bind(this);
    this._renderScene = this._renderScene.bind(this);

    this._manager = SceneManager.instance;
    this._manager.on('forward', this._onForwardScene);
    this._manager.on('back', this._onBackScene);

    this._initialRoute = {
      component: HomeScene,
      passProps: {
        name: 'huga'
      }
    };
  }

  render() {
    return (
      <Navigator ref="nav" initialRoute={this._initialRoute} renderScene={this._renderScene} />
    );
  }

  _renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  _onForwardScene(event) {
    this.refs.nav.push(event.route);
  }

  _onBackScene() {
    this.refs.nav.pop();
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
