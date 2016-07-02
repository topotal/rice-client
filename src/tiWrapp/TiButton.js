import TiView from './TiView';

/**
 * Buttonクラスのラップ
 */
export default class TiButton extends TiView {

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
    this.tiObj = Ti.UI.createButton(prop);
  }

  /**
   * タイトルを設定します。
   */
  setTitle(title) {
    this.tiObj.setTitle(title);
  }

}

