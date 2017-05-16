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
    opacity: 0
  },
  pageActive: {
    opacity: 1
  }
});
