import { StyleSheet, Dimensions } from 'react-native';
import Const from '../../Const';

/**
 * タイムライン画面のスタイルです。
 */
export default StyleSheet.create({
  timelineList: {
    flex: 1
  },
  cookButton: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 30,
    bottom: 20,
    width: 60,
    height: 62
  },
  cookButtonImg: {
    width: 60,
    height: 62
  }
});
