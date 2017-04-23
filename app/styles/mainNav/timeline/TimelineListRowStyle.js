import { StyleSheet, Dimensions } from 'react-native';
import Const from '../../Const';

/**
 * タイムラインのRowのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    height: 230
  },
  content: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 3
  }
});

