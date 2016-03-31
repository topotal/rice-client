import TiView from './TiView';

/**
 * Labelクラスのラップ
 */
export default class TiLabel extends TiView {

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
    this.tiObj = Ti.UI.createLabel(prop);
  }

}

