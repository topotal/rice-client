import {_} from 'lodash';
import Brand from './Brand';

/**
 * ブランド取得APIのレスポンスデータです。
 */
export default class GetBlandsResponse {

  /**
   * ステータスを返します。
   */
  getStatus() {
    return this._status;
  }

  /**
   * ブランド一覧を返します。
   */
  getBrands() {
    return this._brands;
  }

  /**
   * コンストラクター
   * @constructor
   * @param response
   */
  constructor(response) {
    response = response || {};
    response.brands = response.brands || [];

    this._status = response.status;
    this._brands = [];

    // ブランドデータ分データを生成
    _.each(response.brands, (data) =>  {
      this._brands.push(new Brand(data.id, data.title));
    });
  }

}
