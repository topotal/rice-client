import EventDispatcher from '../EventDispatcher';

/**
 * モデルのベースクラスです。
 */
export default class BaseModel extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // データ
    this._data = {};
  }

  /**
   * コレクションをセットします。
   * @param data
   */
  setData(data) {
    this._data = data;
    // モデルの変更イベントを発火
    this.fireEvent('chage');
  }

  /**
   * コレクションを取得します。
   */
  getData() {
    return this._data;
  }

}

