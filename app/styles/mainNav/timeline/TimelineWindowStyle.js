import { StyleSheet, Dimensions } from 'react-native';
import Const from '../../Const';

/**
 * タイムライン画面のスタイルです。
 */
export default StyleSheet.create({
  recipeButton: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
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
