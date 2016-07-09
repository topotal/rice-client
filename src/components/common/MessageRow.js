import TiView from '../../tiWrapp/TiView';
import TiImageView from '../../tiWrapp/TiImageView';
import MessageBox from './MessageBox';

/**
 * メッセージのRowクラス
 */
export default class MessageRow extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(iconPath, text) {
    super();

    this._iconPath = iconPath;
    this._text = text;

    // 見栄え処理
    this._initDecoration();

    // ユーザーアイコン
    this._icon = this._createIcon();
    this._icon.setLeft(13);
    this.add(this._icon);

    // 吹き出し
    this._messageBox = new MessageBox();
    this.add(this._messageBox);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(Ti.UI.SIZE);
  }

  /**
   * アイコンを生成します。
   */
  _createIcon() {
    let icon = new TiImageView({
      image: this._iconPath
    });
    return icon;
  }

}
