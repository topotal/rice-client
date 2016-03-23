/**
 * TiのNavigationWindowのラップクラス
 */
export default class TiNavWin {

  /**
   * コンストラクター
   */
  constructor(prop) {
    this.tiObj = Ti.UI.iOS.createNavigationWindow(prop);
  }

  /**
   * navWinを開きます。
   */
  open() {
    this.tiObj.open();
  }

  /**
   * navWinを閉じます。
   */
  close() {
    this.tiObj.close();
  }

  /**
   * windowを開きます。
   * @param win
   * @param option
   */
  openWindow(win, option) {
    this.tiObj.openWindow(win.tiObj, option);
  }

  /**
   * windowをセットします。
   */
  setWindow(window) {
    this.tiObj.setWindow(window.tiObj);
  }

}
