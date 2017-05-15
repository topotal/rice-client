import { StyleSheet, Dimensions } from 'react-native';
import Const from '../../Const';

/**
 * タブバーアイテムのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    height: 49,
    alignItems: 'center',
    opacity: 0.5
  },
  active: {
    opacity: 1
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
