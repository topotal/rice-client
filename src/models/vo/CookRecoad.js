/**
 * 炊飯記録のバリューオブジェクト
 */
export default class CookRecoad {

  /**
   * IDを取得します。
   */
  getId() {
    return this._id;
  }

  /**
   * 銘柄
   */
  getBrand() {
    return this._brand;
  }

  /**
   * 評価
   */
  getRate() {
    return this._rate;
  }

  /**
   * 作成日時
   */
  getCreatedAt() {
    return this._createdAt;
  }

  /**
   * アップデート日時
   */
  getUpdateAt() {
    return this._updatedAt;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, brand, rate, createdAt, updatedAt) {
    this._id = id;
    this._brand = brand;
    this._rate = rate;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

}
