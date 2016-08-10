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
    this._onTiRefreshStart = this._onTiRefreshStart.bind(this);
    this.tiObj.addEventListener('refreshstart', this._onTiRefreshStart);
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
  _onTiRefreshStart(event) {
    event.target = this;
    this.fireEvent('wRefreshstart', event);
  }

  /**
   * リフレッシュを終わらせます。
   */
  endRefreshing() {
    this.tiObj.endRefreshing();
  }
}
