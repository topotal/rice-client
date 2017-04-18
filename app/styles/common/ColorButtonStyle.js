import { StyleSheet } from 'react-native';

/**
 * カラーボタンのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#BCCC14',
    height: 60,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.14,
    shadowRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center'
  }
});
