import TiView from '../../tiWrapp/TiView';

/**
 * 値を入力できるViewのクラスです。
 */
export default class InputView extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    this._name = prop.name || '';
    this._value = prop.value || null;
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
