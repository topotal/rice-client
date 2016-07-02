import EventDispatcher from '../EventDispatcher';

/**
 * 炊飯モデル
 */
export default class CookModel extends EventDispatcher {

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
  }

}
