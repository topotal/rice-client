import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Navbar from '../common/Navbar';

/**
 * 炊飯画面クラスです。
 */
export default class CookScene extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <View style={styles.container}>
        <Navbar title="炊飯"/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
