import TiLabel from '../../tiWrapp/TiLabel';
import TiImageView from '../../tiWrapp/TiImageView';
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
    // 高さを60に変更
    this.setHeight(60);

    // テキスト
    let text = this._createText();
    text.setLeft(20);
    this.wrapper.add(text);

    // チェックマーク
    this._checkMark = this._createCheckMark();
    this._checkMark.setRight(20);
    this._checkMark.setVisible(false);
    this.wrapper.add(this._checkMark);
  }

  /**
   * テキストを生成します。
   * @return TiLabel
   */
  _createText() {
    let label = new TiLabel({
      text: this._data.getTitle(),
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
  _createCheckMark() {
    let view = new TiImageView({
      width: 24,
      height: 18,
      image: DesignParam.IMAGE.CHECK
    });
    return view;
  }

  /**
   * チェックをつけます。
   */
  check() {
    this._checkMark.setVisible(true);
  }

  /**
   * チェックを外します。
   */
  unCheck() {
    this._checkMark.setVisible(false);
  }
}
