/**
 * Viewクラスのラップ
 */
export default class TiView {

  /**
   * コンストラクター
   */
  constructor(prop) {
    this.setTiObj(prop);
  }

  /**
   * tiObjをセットします。
   * @override
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createView(prop);
  }

  /**
   * viewを追加します。
   */
  add(view) {
    this.tiObj.add(view.tiObj);
  }

  /**
   * top値を設定します。
   * @param top
   */
  setTop(top) {
    this.tiObj.setTop(top);
  }

  /**
   * Left値を設定します。
   * @param left
   */
  setLeft(left) {
    this.tiObj.setLeft(left);
  }

  /**
   * Right値を設定します。
   * @param right
   */
  setRight(right) {
    this.tiObj.setRight(right);
  }

  /**
   * 幅を設定します。
   * @param width
   */
  setWidth(width) {
    this.tiObj.setWidth(width);
  }

  /**
   * 高さを設定します。
   * @param height
   */
  setHeight(height) {
    this.tiObj.setHeight(height);
  }

  /**
   * 横幅を返却します。
   * @return number
   */
  getWidth() {
    return this.tiObj.getWidth();
  }

  /**
   * イベントリスナーを追加します。
   * @param event
   */
  addEventListener(event) {
    this.tiObj.addEventListener(event);
  }

  /**
   * イベントを発火させます。
   * @param name
   * @param event
   */
  fireEvent(name, event) {
    this.tiObj.fireEvent(name, event);
  }

}
