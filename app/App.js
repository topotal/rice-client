import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import HomeScene from './views/home/HomeScene';

export default class App extends Component {

  constructor(props) {
    super(props);

    this._renderScene = this._renderScene.bind(this);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);

    this._initialRoute = {
      title: 'hoge',
      index: 0
    };
  }

  render() {
    return (
      <Navigator
        initialRoute={this._initialRoute}
        renderScene={this._renderScene}
      />
    );
  }

  _renderScene(route, navigator) {
    this._route = route;
    this._navigator = navigator;

    return (
      <HomeScene title={route.title}
        onForward={this._onForward}
        onBack={this._onBack}
      />
    );
  }

  _onForward() {
    const nextIndex = this._route.index + 1;
    this._navigator.push({
      title: 'Scene ' + nextIndex,
      index: nextIndex
    });
  }

  _onBack() {
    if (this._route.index > 0) {
      this._navigator.pop();
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
