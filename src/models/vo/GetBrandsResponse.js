/**
 * ブランド取得APIのレスポンスデータです。
 */
export default class GetBlandsResponse {

  /**
   * ブランド一覧を返します。
   */
  getBrands() {
    this._brands;
  }

  /**
   * コンストラクター
   * @constructor
   * @param response
   */
  constructor(response) {
    this._status = response.status;
    this._brands = [];
  }

}
