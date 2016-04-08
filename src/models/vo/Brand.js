/**
 * ブランドのバリューオブジェクト
 */
export default class Brand {

  /**
   * コンストラクター
   * @constructor
   * @param id
   * @param title
   */
  constructor(id, title) {
    this._id = id;
    this._title = title;
  }

  /**
   * IDを取得します。
   */
  getId() {
    return this._id;
  }

  /**
   * タイトル
   */
  getTitle() {
    return this._title;
  }

}
