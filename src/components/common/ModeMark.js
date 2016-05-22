import TiLabel from '../../tiWrapp/TiLabel';
import TiView from '../../tiWrapp/TiView';

export default class ModeMark extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // 文字
    this._text = this._createText();
    this.add(this._text);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(40);
    this.setHeight(40);
    this.setBorderWidth(5);
    this.setBorderRadius(20);
    this.setBorderColor('#ff0000');
  }

  /**
   * テキスト
   */
  _createText() {
    return new TiLabel({
      text: '強',
      color: '#ff0000',
      font: {
        fontSize: 14
      }
    });
  }
}
