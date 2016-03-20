/**
 * TiのTableViewのラップクラス
 */
export default class TiTableViewRow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    this.tiObj = Ti.UI.createTableViewRow(prop);
  }

  /**
   * 背景色を追加します。
   * @param color 色
   */
  setBackgroundColor(color) {
    this.tiObj.setBackgroundColor(color);
  }

  /**
   * 高さを設定します。
   * @param height 高さ
   */
  setHeight(height) {
    this.tiObj.setHeight(height);
  }

  /**
   * viewを追加します。
   */
  add(view) {
    this.tiObj.add(view.tiObj);
  }

}
