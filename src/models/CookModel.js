import EventDispatcher from '../EventDispatcher';

/**
 * 炊飯モデル
 */
let instance;
class CookModel extends EventDispatcher {

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

    if(!instance) {
      instance = this;
    }

    return instance;
  }

}

export default new CookModel();
