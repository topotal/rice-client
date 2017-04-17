import { StyleSheet, Platform } from 'react-native';

/**
 * ウィンドウのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    height: Platform.OS === 'android' ? 44 : 64,
    backgroundColor: '#BCCC14',
    overflow: 'hidden'
  },
  body: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18
  },
  backButton: {
    position: 'absolute',
    left: 10
  },
  backButtonText: {
    color: '#FFF'
  }
});
