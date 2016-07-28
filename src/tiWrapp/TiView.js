import EventDispatcher from '../EventDispatcher';

/**
 * Viewクラスのラップ
 */
export default class TiView extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   * @param prop
   */
  constructor(prop) {
    super();

    this.setTiObj(prop);

    this.size = this.tiObj.size;

    this.tiObj.addEventListener('click', (event) => this._onTiClick(event));
    this.tiObj.addEventListener('touchstart', (event) => this._onTiTouchStart(event));
    this.tiObj.addEventListener('touchend', (event) => this._onTiTouchEnd(event));
    this.tiObj.addEventListener('postlayout', (event) => this._onTiPostLayout(event));
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createView(prop);
  }

  /**
   * イベント
   */
  _onTiClick(event) {
    event.target = this;
    this.fireEvent('wclick', event);
  }
  _onTiTouchStart() { this.fireEvent('wtouchstart', { target: this }); }
  _onTiTouchEnd() { this.fireEvent('wtouchend', { target: this }); }
  _onTiPostLayout() {
    this.size = this.tiObj.size;
    this.fireEvent('wpostlayout', { target: this });
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

}
