import DesignParam from '../../enum/DesignParam';
import TiView from '../../tiWrapp/TiView';
import TiLabel from '../../tiWrapp/TiLabel';
import TiImageView from '../../tiWrapp/TiImageView';

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
    this._box.setLeft(80);
    this._box.setRight(0);
    this.add(this._box);

    // テキスト
    this._label = this._createText();
    this._box.add(this._label);

    // 突起
    this._stick = this._createStick();
    this._stick.setLeft(68);
    this.add(this._stick);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setHeight(Ti.UI.SIZE);
  }

  /**
   * 突起を生成します。
   * @return TiImageView
   */
  _createStick() {
    let view = new TiImageView({
      image: DesignParam.IMAGE.STICK
    });
    return view;
  }

  /**
   * 箱を生成します。
   * @return TiView
   */
  _createBox() {
    let view = new TiView({
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 3,
      borderWidth: 2,
      borderColor: DesignParam.COLOR.GRAY
    });
    return view;
  }

  /**
   * テキストを生成します。
   * @return TiLabel
   */
  _createText() {
    let label = new TiLabel({
      text: 'あいいあ',
      color: DesignParam.COLOR.BLACK,
      font: {
        fontZise: 14
      }
    });
    return label;
  }

}
