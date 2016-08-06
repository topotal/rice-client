import TiView from './TiView';

/**
 * オプションダイアログのラッパークラスです。
 */
export default class TiOptionDialog extends TiView {

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
    this.tiObj = Ti.UI.createOptionDialog(prop);
  }

  /**
   * ダイアログを表示します。
   */
  show() {
    this.tiObj.show();
  }

}
