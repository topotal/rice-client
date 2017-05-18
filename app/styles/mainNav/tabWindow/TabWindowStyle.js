import { StyleSheet, Dimensions } from 'react-native';

/**
 * タブバーのスタイルです。
 */
export default StyleSheet.create({
  wrapper: {
    flex: 1
  },
  content: {
    flex: 1,
    marginBottom: 49
  },
  tabBar: {
    flex: 1
  },
  page: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: 0
  },
  pageActive: {
    opacity: 1,
    height: '100%'
  }
});
