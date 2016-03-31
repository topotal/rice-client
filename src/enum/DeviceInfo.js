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

}
