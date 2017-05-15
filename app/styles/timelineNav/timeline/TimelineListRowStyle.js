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
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  icon: {
    top: 10,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#CCCCCC'
  },
  thumbnail: {
    position: 'absolute',
    borderRadius: 3,
    left: 10,
    right: 10,
    bottom: 10,
    height: 140,
    backgroundColor: '#CCCCCC'
  },
  rate: {
    position: 'absolute',
    top: 12,
    left: 70,
    width: 77,
    height: 13,
    backgroundColor: '#0000FF'
  },
  date: {
    position: 'absolute',
    top: 30,
    left: 72,
    fontSize: 9,
    fontWeight: 'bold',
    color: '#626262'
  },
  rice: {
    position: 'absolute',
    top: 43,
    left: 70,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#626262'
  }
});

