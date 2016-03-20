/**
 * Viewクラスのラップ
 */
export default class TiView {

  /**
   * コンストラクター
   */
  constructor(prop) {
    this.tiObj = Ti.UI.createView(prop);
  }

  /**
   * viewを追加します。
   */
  add(view) {
    this.tiObj.add(view.tiObj);
  }

}
