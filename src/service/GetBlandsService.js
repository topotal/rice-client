import BaseService from './BaseService';
import ApiPath from '../enum/ApiPath';
import GetBlandsResponse from '../models/vo/GetBrandsResponse';

/**
 * 銘柄一覧取得サービスクラスです。
 */
export default class GetBlandsService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super(ApiPath.BLANDS, 'GET');
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
