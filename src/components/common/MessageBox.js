import DesignParam from '../../enum/DesignParam';
import TiView from '../../tiWrapp/TiView';
import TiLabel from '../../tiWrapp/TiLabel';

/**
 * 吹き出しクラスです。
 */
export default class MessageBox extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // 箱
    this._box = this._createBox();
    this.add(this._box);

    // テキスト
    this._label = this._createText();
    this.add(this._label);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(Ti.UI.SIZE);
    this.setBorderRadius(3);
    this.setBorderWidth(2);
    this.setBorderColor(DesignParam.COLOR.GRAY);
  }

  /**
   * 箱を生成します。
   * @return TiView
   */
  _createBox() {
    let view = new TiView({
      width: Ti.UI.FILL,
      height: 60,
      backgroundColor: '#FFF'
    });
    return view;
  }

  /**
   * テキストを生成します。
   * @return TiLabel
   */
  _createText() {
    let label = new TiLabel({
      text: 'ああああ',
      color: DesignParam.COLOR.BLACK,
      font: {
        fontZise: 14
      }
    });
    return label;
  }

}
