import TiView from '../../tiWrapp/TiView';
import TiLabel from '../../tiWrapp/TiLabel';
import * as DesignParam from '../../enum/DesignPram';

/**
 * カラフルな丸角ボタンクラスです。
 */
export default class ColorButton extends TiView {

  /**
   * コンストラクター
   * @constructor
   * @param color
   * @param text
   * @param prop
   */
  constructor(color, text, prop) {
    super(prop);
    // 見栄えの処理
    this._initDecoration();

    this._color = color;
    this._text = text;

    // ラッパー
    this._wrapper = this._createWrapper();
    this.add(this._wrapper);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
  }

  /**
   * wrapperを生成します。
   * @return TiView
   */
  _createWrapper() {
    let view = new TiView({
      top: 0,
      left: 0,
      right: 0,
      bottom: 2,
      borderRadius: 3,
      backgroundColor: this._color,
      viewShadowColor: 'rgba(0, 0, 0, 0.4)',
      viewShadowOffset: {
        x: 0, y: 2
      },
      viewShadowRadius: 0
    });

    // テキスト
    let text = new TiLabel({
      text: this._text,
      font: {
        fontSize: 17,
        fontWeight: 'bold'
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(text);

    return view;
  }

}
