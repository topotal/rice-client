import { StyleSheet, Dimensions } from 'react-native';
import Const from '../Const';

/**
 * タブバーのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 49,
    backgroundColor: Const.WHITE,
    borderTopWidth: 1,
    borderColor: Const.GRAY,
    flexDirection: 'row'
  },
  item: {
    flex: 1
  }
});
