import {_} from 'lodash';
import Brand from './Brand';
import CookRecord from './CookRecord';

/**
 * 炊飯記録一覧取得APIのレスポンスデータです。
 */
export default class GetCookRecordsResponse {

  /**
   * ステータスを返します。
   */
  getStatus() {
    return this._status;
  }

  /**
   * 炊飯記録を返します。
   */
  getRecords() {
    return this._records;
  }

  /**
   * コンストラクター
   * @constructor
   * @param response
   */
  constructor(response) {
    response = response || {};
    response.records = response.records || [];

    this._status = response.status;
    this._records = [];

    _.each(response.records, (record) => {
      this._records.push(new CookRecord(
        record.id,
        new Brand(record.brand.id, record.brand.title),
        record.rate,
        record.created_at,
        record.updated_at,
        record.timeline
      ));
    });
  }

}
