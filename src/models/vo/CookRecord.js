/**
 * 炊飯記録のバリューオブジェクト
 */
export default class CookRecord {

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
   * タイムライン
   */
  getTimeline() {
    return this._timeline;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, brand, rate, createdAt, updatedAt, timeline) {
    this._id = id;
    this._brand = brand;
    this._rate = rate;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._timeline = timeline;
  }

}
