import EventDispatcher from '../EventDispatcher';

/**
 * 炊飯モデル
 */
export default class CookModel extends EventDispatcher {

  /**
   * インスタンス
   */
  static getInstance() {
    return CookModel._instance || new CookModel();
  }

  /**
   * タイムライン
   */
  get timeline() {
    return this._timeline;
  }
  set timeline(timeline) {
    this._timeline = timeline;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._timeline = [];

    CookModel._instance = this;
  }

}
