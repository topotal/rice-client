import BaseService from './BaseService';
import GetBlandsResponse from '../models/vo/GetBrandsResponse';

/**
 * 銘柄一覧取得サービスクラスです。
 */
export default class GetSelectService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   * @param apiPath
   */
  constructor(apiPath) {
    super(apiPath, 'GET');
  }

  /**
   * レスポンスを受け取れた時のハンドラーです。
   * @override
   * @param response
   */
  onLoad(response) {
    var data = new GetBlandsResponse(response);
    if(data.getStatus() === 200) {
      // 成功イベントを発火
      this.fireEvent('success', {data: data});
    } else {
      // エラーイベントを発火
      this.fireEvent('error', {data: data});
    }
  }

  /**
   * レスポンスを受け取れなかった時のハンドラーです。
   * @override
   */
  onError() {
    // 成功イベントを発火
    this.fireEvent('failure');
  }
}
