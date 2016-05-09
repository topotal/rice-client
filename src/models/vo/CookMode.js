import DesignParam from '../../enum/DesignParam';

/**
 * 炊飯モード
 */
export default class CookMode {

  /** 浸し */
  static get SOAK() { return new CookMode(1, '浸し', '浸す', DesignParam.COLOR.DEEP_BLUE); };

  /** 弱火 */
  static get LOW() { return new CookMode(2, '弱火', '弱火', DesignParam.COLOR.YELLOW); };

  /** 中火 */
  static get MIDDLE() { return new CookMode(3, '中火', '中火', DesignParam.COLOR.ORANGE); };

  /** 強火 */
  static get HIGH() { return new CookMode(4, '強火', '強火', DesignParam.COLOR.RED); };

  /** 蒸らし */
  static get STEAM() { return new CookMode(5, '蒸らし', '蒸らす', DesignParam.COLOR.BLUE); };

  /** 完成 */
  static get COMP() { return new CookMode(6, '完成', '完成', DesignParam.COLOR.GREEN); };

  /** モード切り替え用リスト */
  static get MODE_LIST() {
    return [
      CookMode.SOAK,
      CookMode.STEAM,
      CookMode.COMP,
      CookMode.LOW,
      CookMode.MIDDLE,
      CookMode.HIGH
    ];
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get buttonText() {
    return this._buttonText;
  }

  get color() {
    return this._color;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(id, title, buttonText, color) {
    this._id = id;
    this._title = title;
    this._buttonText = buttonText;
    this._color = color;
  }
}
