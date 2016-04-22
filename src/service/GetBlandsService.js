import BaseService from './BaseService';
import ApiPath from '../enum/ApiPath';

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
    console.info(response);
  }

  /**
   * レスポンスを受け取れなかった時のハンドラーです。
   * @override
   */
  onError() {
  }
}
