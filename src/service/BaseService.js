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
    this._url = 'https://randomuser.me/api/';
    this._method = method || 'GET';
  }

  /**
   * ロード
   * @param param
   */
  load() {

    var client = Ti.Network.createHTTPClient({
      // レスポンスを受け取れた時
      onload: (e) => {
        console.info(client.responseText);
        console.info(JSON.stringify(e, null, '--->'));
        this.fireEvent('complete');
      },
      // エラーの場合
      onerror: (e) => {
        Ti.API.debug(e.error);
      },
      timeout: 5000
    });

    // Prepare the connection.
    client.open(this._method, this._url);
    // Send the request.
    client.send();
  }

}
