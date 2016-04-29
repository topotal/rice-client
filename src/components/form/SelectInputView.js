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

    this._apiPath = prop.apiPath;
    this._iconPath = prop.iconPath;
    this._title = prop.title;
    this._placeholderText = prop.placeholderText || '選択してください';

    // 見栄え処理
    this._initDecoration();

    // アイコン
    let icon = this._createIcon();
    icon.setLeft(9);
    this.add(icon);

    // 値のテキスト
    this._displayValue = this._createDisplayValue();
    this._displayValue.setLeft(50);
    this.add(this._displayValue);

    // プレースホルダ
    this._placeholder = this._createPlaceholder();
    this._placeholder.setLeft(50);
    this.add(this._placeholder);

    // 右矢印
    let arrow = this._createArrow();
    arrow.setRight(16);
    this.add(arrow);

    // 選択ウィンドウ
    this._win = new SelectWindow(this._apiPath, DesignParam.COLOR.ORANGE, this._title);
    this._win.addEventListener('select', () => this._onSelect());

    // クリックを監視
    this.addEventListener('click', () => this._onClick());

    // 初期値のセット
    this.setValue(this._value);
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
   * 値のテキストを生成します。
   * @return TiLabel
   */
  _createDisplayValue() {
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

  /**
   * プレースホルダーを生成します。
   * @return TiLabel
   */
  _createPlaceholder() {
    let label = new TiLabel({
      text: this._placeholderText,
      color: DesignParam.COLOR.GRAY,
      font: {
        fontSize: 14,
        fontWeight: 'bold'
      }
    });
    return label;
  }

  /**
   * 値選択時のハンドラーです。
   */
  _onSelect() {
    this.setValue(this._win.getValue());
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClick() {
    let navWin = app.getCurrentNavWin();
    navWin.openWindow(this._win);
  }

  /**
   * 値をセットします。
   * @override
   * @param value
   */
  setValue(value) {

    if(value !== null) {
      this._displayValue.setText(value.getTitle());
      this._displayValue.setVisible(true);
      this._placeholder.setVisible(false);
    } else {
      this._displayValue.setVisible(false);
      this._placeholder.setVisible(true);
    }

    super.setValue(value);
  }

}
