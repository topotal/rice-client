/**
 * メディアクラスのラッパーです。
 */
export default class TiMedia {

  /**
   * カメラを起動します。
   * @param option
   */
  static showCamera(option) {
    Ti.Media.showCamera(option);
  }

}
