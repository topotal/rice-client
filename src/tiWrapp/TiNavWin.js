/**
 * TiのNavigationWindowのラップクラス
 */
export default class TiNavWin {

  /**
   * コンストラクター
   */
  constructor(prop) {
    return Ti.UI.iOS.createNavigationWindow(prop);
  }

}
