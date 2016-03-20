/**
 * windowクラスのラップ
 */
export default class TiWindow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    this.tiObj = Ti.UI.createWindow(prop);
  }

  /**
   * viewをaddします。
   */
  add(view) {
    this.tiObj.add(view.tiObj);
  }

  /**
   * navBarのタイトル画像を設定します。
   */
  setTitleImage(imagePath) {
    this.tiObj.setTitleImage(imagePath);
  }

  /**
   * navBarの背景色を設定します。
   */
  setBarColor(color) {
    this.tiObj.setBarColor(color);
  }

  /**
   * 背景色を設定します。
   */
  setBackgroundColor(color) {
    this.tiObj.setBackgroundColor(color);
  }

  /**
   * ステータスバーの色を設定します。
   */
  setStatusBarStyle(style) {
    this.tiObj.setStatusBarStyle(style);
  }

}
