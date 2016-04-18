import TiLabel from '../../tiWrapp/TiLabel';
import DesignParam from '../../enum/DesignPram';
import PopRow from '../common/PopRow';

/**
 * セレクトフォームのテーブル行クラス
 */
export default class SelectTableRow extends PopRow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(data) {
    super(data);
  }

  /**
   * 中の要素を生成します。
   */
  _initContent() {
    // テキスト
    let text = this._createText();
    text.setLeft(20);
    this.wrapper.add(text);
  }

  /**
   * テキストを生成します。
   * @return TiLabel
   */
  _createText() {
    let label = new TiLabel({
      text: '魚沼産 コシヒカリ',
      color: DesignParam.COLOR.BLACK,
      font: {
        fontSize: 14,
        fontWeight: 'bold'
      }
    });
    return label;
  }

  /**
   * 右矢印を生成します。
   * @return TiImageView
   */
  _createArrow() {
    let view = new TiImageView({
      width: 11,
      height: 17,
      image: DesignParam.IMAGE.ROW_ARROW
    });
    return view;
  }
}
