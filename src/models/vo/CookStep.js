/**
 * 炊飯タイムラインのステップバリューオブジェクト
 */
export default class CookStep {

  /** モード */
  get mode() {
    return this._mode;
  }

  /** タイム */
  get time() {
    return this._time;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(mode, time) {
    this._mode = mode;
    this._time = time;
  }

}
