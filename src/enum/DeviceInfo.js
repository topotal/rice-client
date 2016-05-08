export default class DeviceInfo {

  /**
   * 画面幅を取得します。
   * @return number
   */
  static get WIDTH() {
    return Ti.Platform.displayCaps.platformWidth;
  }

  /**
   * 画面高を取得します。
   * @return number
   */
  static get HEIGHT() {
    return Ti.Platform.displayCaps.platformHeight;
  }

  /**
   * ステータスバーとヘッダー分を引いた画面高を取得します。
   */
  static get CONTENT_HEIGHT() {
    let deviceH = DeviceInfo.HEIGHT;
    let headerH = DeviceInfo.HEADER_HEIGHT;
    return deviceH - headerH;
  }

  /**
   * ステータスバー分の高さを取得します。
   */
  static get STATUS_BAR_HEIGHT() {
    return 20;
  }

  /**
   * ナビゲーションバー分の高さを返します。
   */
  static get NAV_BAR_HEIGHT() {
    return 44;
  }

  /**
   * ヘッダー分の高さを取得します。
   * @return number
   */
  static get HEADER_HEIGHT() {
    return DeviceInfo.STATUS_BAR_HEIGHT + DeviceInfo.NAV_BAR_HEIGHT;
  }

}
