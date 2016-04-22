import EventDispatcher from '../EventDispatcher';

/**
 * サービスのベースクラスです。
 */
export default class BaseService extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   * @param url
   */
  constructor(url, method) {
    super();
    this._url = url;
    this._method = method;
  }

  /**
   * 通信開始
   * @param param
   */
  load() {
    var client = Ti.Network.createHTTPClient({
      // レスポンスを受け取れた時
      onload: (e) => this.onLoad(e),
      // エラーの場合
      onerror: (e) => this.onError(e),
      // タイムアウトを15秒に設定
      timeout: 15000
    });

    // Prepare the connection.
    client.open(this._method, this._url);
    // Send the request.
    client.send();
  }

  /**
   * レスポンスを受け取れた時のハンドラーです。
   * overrideして使用してください。
   */
  onLoad() {}

  /**
   * レスポンスを受け取れなかった時のハンドラーです。
   * overrideして使用してください。
   */
  onError() {}
}
