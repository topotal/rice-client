import TiView from './TiView';

/**
 * アラートダイアログラップクラス
 */
export default class TiAlertDialog extends TiView {

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
    this.tiObj = Ti.UI.createAlertDialog(prop);
  }

  /**
   * 表示します。
   */
  show() {
    this.tiObj.show();
  }

}
