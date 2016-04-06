import BaseModel from './BaseModel';

/**
 * フォームモデルクラスです。
 */
export default class FromModel extends BaseModel {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // inputViewのリスト
    this._inputViewList = [];
  }

  /**
   * inputViewを登録します。
   * @param view
   */
  registInputView(view) {
    this._inputViewList.push(view);
  }

  /**
   * 登録したviewの値をまとめて返却します。
   */
  getValue() {
    return {};
  }

}
