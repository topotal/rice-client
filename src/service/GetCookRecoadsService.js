import BaseService from './BaseService';
import GetCookRecoadsResponse from '../models/vo/GetCookRecoadsResponse';
import ApiPath from '../enum/ApiPath';

/**
 * 炊飯記録一覧取得サービスクラスです。
 */
export default class GetCookRecoadsService extends BaseService {

  /**
   * コンストラクター
   * @constructor
   * @param apiPath
   */
  constructor() {
    super(ApiPath.COOK_RECOADS, 'GET');
  }

  /**
   * レスポンスを受け取れた時のハンドラーです。
   * @override
   * @param response
   */
  onLoad(response) {
    var data = new GetCookRecoadsResponse(response);
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
