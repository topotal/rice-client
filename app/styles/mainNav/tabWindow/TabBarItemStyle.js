import { StyleSheet, Dimensions } from 'react-native';
import Const from '../../Const';

/**
 * タブバーアイテムのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    height: 49,
    alignItems: 'center'
  },
  icon: {
    marginTop: 3,
    width: 33,
    height: 33,
    backgroundColor: Const.BLACK
  },
  title: {
    fontSize: 9,
    color: Const.BLACK
  }
});
