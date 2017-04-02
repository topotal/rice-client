import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import SceneManager from '../../utils/SceneManager';
import Navbar from '../common/Navbar';

export default class HomeScene extends Component {

  constructor(props) {
    super(props);

    this._onPressForward = this._onPressForward.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="Home"/>
        <TouchableHighlight onPress={this._onPressForward}>
          <Text>進む</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressBack}>
          <Text>戻る</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onPressForward() {
    SceneManager.instance.to({
      component: HomeScene,
      passProps: {
        name: 'hoge'
      }
    });
  }

  _onPressBack() {
    SceneManager.instance.back();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
