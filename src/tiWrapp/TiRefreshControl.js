import EventDispatcher from '../EventDispatcher';

/**
 * リフレッシュコントロールのラッパークラスです。
 */
export default class TiRefreshControl extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super();
    this.setTiObj(prop);
    this.tiObj.addEventListener('refreshstart', (event) => this._onTiRefreshStart(event));
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createRefreshControl(prop);
  }

  /**
   * イベント
   */
  _onTiRefreshStart() { this.fireEvent('wrefreshstart', { target: this }); }

  /**
   * リフレッシュを終わらせます。
   */
  endRefreshing() {
    this.tiObj.endRefreshing();
  }
}
