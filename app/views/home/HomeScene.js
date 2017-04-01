import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import SceneManager from '../../utils/SceneManager';

export default class HomeScene extends Component {

  constructor(props) {
    super(props);

    this._onPressForward = this._onPressForward.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
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
    marginTop: 100,
    flex: 1
  }
});
