export default class DeviceInfo {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {}

  /**
   * 画面幅を取得します。
   * @return number
   */
  static getWidth() {
    return Ti.Platform.displayCaps.platformWidth;
  }

  /**
   * 画面高を取得します。
   * @return number
   */
  static getHeight() {
    return Ti.Platform.displayCaps.platformHeight;
  }

  /**
   * ステータスバー分の高さを取得します。
   */
  static getStatusBarHeight() {
    return 20;
  }

  /**
   * ナビゲーションバー分の高さを返します。
   */
  static getNavBarHeight() {
    return 44;
  }

  /**
   * ヘッダー分の高さを取得します。
   * @return number
   */
  static getHeaderHeight() {
    return DeviceInfo.getStatusBarHeight() + DeviceInfo.getNavBarHeight();
  }

}
