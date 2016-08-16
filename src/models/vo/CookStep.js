/**
 * 炊飯タイムラインのステップバリューオブジェクト
 */
export default class CookStep {

  /** モード */
  get mode() {
    return this._mode;
  }

  /** 秒数 */
  get seconds() {
    return this._seconds;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(mode, seconds) {
    this._mode = mode;
    this._seconds = seconds;
  }

}
