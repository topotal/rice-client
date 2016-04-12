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
   * navBarのタイトル画像を設定します。
   */
  setTitleImage(imagePath) {
    this.tiObj.setTitleImage(imagePath);
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
   * windowを閉じます。
   */
  close(prop) {
    this.tiObj.close(prop);
  }

}
