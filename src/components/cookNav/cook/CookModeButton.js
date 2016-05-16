import ColorButton from '../../common/ColorButton';

/**
 * 炊飯モードボタンクラスです。
 */
export default class CookModeButton extends ColorButton {

  /**
   * モード
   */
  get mode() {
    return this._mode;
  }

  /**
   * コンストラクター
   * @constructor
   * @param mode
   */
  constructor(mode) {
    super(mode.color, mode.buttonText);

    this._mode = mode;

    this.autoPush = false;
    this.autoPull = false;
  }

}
