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

  /**
   * テキストをセットします。
   * @param text
   */
  setText(text) {
    this.tiObj.setText(text);
  }

  /**
   * フォントを設定します。
   * @param font
   */
  setFont(font) {
    this.tiObj.setFont(font);
  }

}

