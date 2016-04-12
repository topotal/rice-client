import TiImageView from '../../tiWrapp/TiImageView';
import TiLabel from '../../tiWrapp/TiLabel';
import InputView from './InputView';
import * as DesignParam from '../../enum/DesignPram';
import SelectWindow from './SelectWindow';

/**
 * セレクトボックスのクラスです。
 */
export default class SelectInputView extends InputView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // アイコンパス
    this._iconPath = prop.iconPath;

    // 見栄え処理
    this._initDecoration();

    // アイコン
    let icon = this._createIcon();
    icon.setLeft(9);
    this.add(icon);

    // テキスト
    let text = this._createText();
    text.setLeft(50);
    this.add(text);

    // 右矢印
    let arrow = this._createArrow();
    arrow.setRight(16);
    this.add(arrow);

    let win = new SelectWindow();

    this.addEventListener('click', () => {
      let navWin = app.getCurrentNavWin();
      navWin.openWindow(win);
    });
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setHeight(50);
    this.setBorderWidth(2);
    this.setBorderRadius(3);
    this.setBackgroundColor(DesignParam.COLOR.WHITE);
    this.setBorderColor('rgba(0, 0, 0, 0.14)');
  }

  /**
   * アイコンを生成します。
   * @return TiImageView
   */
  _createIcon() {
    let view = new TiImageView({
      width: 30,
      height: 30,
      image: this._iconPath
    });
    return view;
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
