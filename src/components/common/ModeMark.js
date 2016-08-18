import TiLabel from '../../tiWrapp/TiLabel';
import TiView from '../../tiWrapp/TiView';

export default class ModeMark extends TiView {

  /**
   * コンストラクター
   * @constructor
   * @param mode
   */
  constructor(mode) {
    super();

    this._mode = mode;

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
    this.setBackgroundColor('#FFFFFF');
    this.setBorderWidth(5);
    this.setBorderRadius(20);
    this.setBorderColor(this._mode.color);
  }

  /**
   * テキスト
   */
  _createText() {
    return new TiLabel({
      text: this._mode.modeText,
      color: this._mode.color,
      font: {
        fontSize: 14,
        fontWeight: 'bold'
      }
    });
  }
}
