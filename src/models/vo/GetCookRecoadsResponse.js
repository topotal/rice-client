import {_} from 'libs/lodash';
import Brand from './Brand';
import CookRecoad from './CookRecoad';

/**
 * 炊飯記録一覧取得APIのレスポンスデータです。
 */
export default class GetCookRecoadsResponse {

  /**
   * ステータスを返します。
   */
  getStatus() {
    return this._status;
  }

  /**
   * 炊飯記録を返します。
   */
  getRecoads() {
    return this._recoads;
  }

  /**
   * コンストラクター
   * @constructor
   * @param response
   */
  constructor(response) {
    response = response || {};
    response.recoads = response.recoads || [];

    this._status = response.status;
    this._recoads = [];

    _.each(response.recoads, (recoad) => {
      this._recoads.push(new CookRecoad(
        recoad.id,
        new Brand(recoad.brand.id, recoad.brand.title),
        recoad.rate,
        recoad.createdAt,
        recoad.updatedAt
      ));
    });
  }

}
