import TiView from './TiView';

/**
 * TiのTableViewのラップクラス
 */
export default class TiTableViewRow extends TiView {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createTableViewRow(prop);
  }

  /**
   * タップした時の色のスタイルを設定します。
   * @param style
   */
  setSelectionStyle(style) {
    this.tiObj.setSelectionStyle(style);
  }

}
