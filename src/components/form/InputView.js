import TiView from '../../tiWrapp/TiView';

/**
 * 値を入力できるViewのクラスです。
 */
export default class InputView extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(name, value, prop) {
    super(prop);

    this._name = '';
    this._value = null;

    // 名前のセット
    this.setName(name);
    // 値のセット
    this.setValue(value);
  }

  /**
   * 名前をセットします。
   * @param name
   */
  setName(name) {
    this._name = name;
  }

  /**
   * 値をセットします。
   * @param value
   */
  setValue(value) {
    this._value = value;
    // 値の変更イベントを発火
    this.fireEvent('change');
  }

  /**
   * 値を取得します。
   * @return value
   */
  getValue() {
    return this._value;
  }

}
