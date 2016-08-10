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

    this.size = this.tiObj.size;

    this._onTiClick = this._onTiClick.bind(this);
    this.tiObj.addEventListener('click', this._onTiClick);
    this._onTiTouchStart = this._onTiTouchStart.bind(this);
    this.tiObj.addEventListener('touchstart', this._onTiTouchStart);
    this._onTiTouchEnd = this._onTiTouchEnd.bind(this);
    this.tiObj.addEventListener('touchend', this._onTiTouchEnd);
    this._onTiPostLayout = this._onTiPostLayout.bind(this);
    this.tiObj.addEventListener('postlayout', this._onTiPostLayout);
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createView(prop);
  }

  /**
   * イベントリスナーを追加します。
   * @param type
   * @param callback
   */
  addEventListener(type, callback) {
    this.tiObj.addEventListener(type, callback);
  }

  /**
   * イベントリスナーを削除します。
   * @param type
   * @param callback
   */
  removeEventListener(type, callback) {
    this.tiObj.removeEventListener(type, callback);
  }

  /**
   * イベントを発火させます。
   * @param type
   * @param option
   */
  fireEvent(type, option) {
    this.tiObj.fireEvent(type, option);
  }

  /**
   * イベント
   */
  _onTiClick(event) {
    event.target = this;
    this.fireEvent('wClick', event);
  }
  _onTiTouchStart(event) {
    event.target = this;
    this.fireEvent('wTouchstart', event);
  }
  _onTiTouchEnd(event) {
    event.target = this;
    this.fireEvent('wTouchend', event);
  }
  _onTiPostLayout(event) {
    event.target = this;
    this.size = this.tiObj.size;
    this.fireEvent('wPostlayout', event);
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
   *
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

  /**
   * 透明度を設定します。
   * @param opacity
   */
  setOpacity(opacity) {
    this.tiObj.setOpacity(opacity);
  }

  /**
   * シャドウの色を設定します。
   * @param color
   */
  setViewShadowColor(color) {
    this.tiObj.setViewShadowColor(color);
  }

  /**
   * シャドウのオフセットを設定します。
   * @param offset
   */
  setViewShadowOffset(offset) {
    this.tiObj.setViewShadowOffset(offset);
  }

  /**
   * シャドウの半径をぼかしを設定します。
   * @param radius
   */
  setViewShadowRadius(radius) {
    this.tiObj.setViewShadowRadius(radius);
  }

  /**
   * レイアウトを設定します。
   * @param layout
   */
  setLayout(layout) {
    this.tiObj.setLayout(layout);
  }

  /**
   * zIndexを設定します。
   */
  setZIndex(index) {
    this.tiObj.setZIndex(index);
  }

  /**
   * タップの許可、禁止を設定します。
   * @param boolean
   */
  setTouchEnabled(boolean) {
    this.tiObj.setTouchEnabled(boolean);
  }

}
