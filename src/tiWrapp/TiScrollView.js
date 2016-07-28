import TiView from './TiView';

/**
 * スクロールビュークラスのラッパー
 */
export default class TiScrollView extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super();

    this.setTiObj(prop);
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createScrollView(prop);
  }

}
