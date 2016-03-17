/**
 * windowクラスのラップ
 */
export default class TiWindow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    return Ti.UI.createWindow(prop);
  }

}
