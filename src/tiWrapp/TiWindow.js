import TiView from './TiView';

/**
 * windowクラスのラップ
 */
export default class TiWindow extends TiView {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);
    this._onOpen = this._onOpen.bind(this);
    this.tiObj.addEventListener('open', this._onOpen);
  }

  /**
   * tiObjをセットします。
   * @override
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createWindow(prop);
  }

  /**
   * イベント
   */
  _onOpen(event) {
    event.target = this;
    this.fireEvent('wOpen', event);
  }

  /**
   * navBarのタイトルを設定します。
   * @param title
   */
  setTitle(title) {
    this.tiObj.setTitle(title);
  }

  /**
   * navBarのタイトル画像を設定します。
   * @param titlePath
   */
  setTitleImage(imagePath) {
    this.tiObj.setTitleImage(imagePath);
  }

  /**
   * ナビゲーションバーのtintColorを設定します。
   * @param color
   */
  setNavTintColor(color) {
    this.tiObj.setNavTintColor(color);
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

  /**
   * navBarを透過させるか設定します。
   */
  setTranslucent(bool) {
    this.tiObj.setTranslucent(bool);
  }

  /**
   * navBarの影の画像を設定します。
   * @param path
   */
  setShadowImage(path) {
    this.tiObj.setShadowImage(path);
  }

  /**
   * navBarの背景画像を設定します。
   * @param path
   */
  setBarImage(path) {
    this.tiObj.setBarImage(path);
  }

  /**
   * navBarの影の隠すか設定します。
   * @param bool
   */
  setHideShadow(bool) {
    this.tiObj.setHideShadow(bool);
  }

  /**
   * windowを開きます。
   */
  open(prop) {
    this.tiObj.open(prop);
  }

  /**
   * バックボタンタイトルを設定します。
   */
  setBackButtonTitle(title) {
    this.tiObj.setBackButtonTitle(title);
  }

  /**
   * ナビゲーション左側のボタンを設定します。
   */
  setLeftNavButton(button) {
    this.tiObj.setLeftNavButton(button.tiObj);
  }

  /**
   * windowを閉じます。
   */
  close(prop) {
    this.tiObj.close(prop);
  }

}
