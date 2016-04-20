/**
 * Viewクラスのラップ
 */
export default class TiView {

  /**
   * コンストラクター
   * @constructor
   * @param prop
   */
  constructor(prop) {
    this.setTiObj(prop);
  }

  /**
   * tiObjをセットします。
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
   * Bottom値を設定します。
   * @param bottom
   */
  setBottom(bottom) {
    this.tiObj.setBottom(bottom);
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
   * @param name
   * @param event
   */
  addEventListener(name, event) {
    this.tiObj.addEventListener(name, event);
  }

  /**
   * イベントを発火させます。
   * @param name
   * @param event
   */
  fireEvent(name, event) {
    this.tiObj.fireEvent(name, event);
  }

  /**
   * 背景色を追加します。
   * @param color 色
   */
  setBackgroundColor(color) {
    this.tiObj.setBackgroundColor(color);
  }

  /**
   * アニメーションさせます。
   * @param animation
   */
  animate(animation) {
    this.tiObj.animate(animation);
  }

  /**
   * ボーダーの幅を設定します。
   * @param width
   */
  setBorderWidth(width) {
    this.tiObj.setBorderWidth(width);
  }

  /**
   * ボーダーの色を設定します。
   * @param color
   */
  setBorderColor(color) {
    this.tiObj.setBorderColor(color);
  }

  /**
   * ボーダーの丸角を設定します。
   * @param radius
   */
  setBorderRadius(radius) {
    this.tiObj.setBorderRadius(radius);
  }

  /**
   * 表示非表示を設定します。
   * @param visible
   */
  setVisible(visible) {
    this.tiObj.setVisible(visible);
  }

}
