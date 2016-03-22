import TiView from './TiView';

/**
 * ImageViewクラスのラップ
 */
export default class TiImageView extends TiView {

  /**
   * コンストラクター
   * @constructor
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
    this.tiObj = Ti.UI.createImageView(prop);
  }

  /**
   * 画像をセットします。
   * @param path
   */
  setImage(path) {
    this.tiObj.setImage(path);
  }

}

