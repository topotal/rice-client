import TiView from '../../tiWrapp/TiView';
import TiImageView from '../../tiWrapp/TiImageView';

/**
 * メッセージのRowクラス
 */
export default class MessageRow extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // ユーザーアイコン
    this._icon = this._createIcon();
    this.add(this._icon);

    // 吹き出し
    this._messageBox = this._createMessageBox();
    this.add(this._messageBox);
  }

}
