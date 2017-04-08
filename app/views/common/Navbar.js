import React, { Component } from 'react';
import { View, StatusBar, Text, TouchableHighlight, StyleSheet } from 'react-native';
import {_} from 'lodash';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title ? (<Text style={styles.title}>{this.props.title}</Text>) : null;
    return (
      <View style={styles.wrapper}>
        <StatusBar
          barStyle="light-content"
        />
        {title}
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  wrapper: {
    height: 64,
    backgroundColor: '#BCCC14'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 44,
    color: '#FFF',
    fontSize: 18
  }
};
