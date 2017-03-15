import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import MainHomeScene from './views/main/MainHomeScene';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.wrapper}
        initialRoute={{
          component: MainHomeScene,
          title: 'My Initialaaaa Scene'
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
