import {_} from 'libs/lodash';
import TiView from '../../../tiWrapp/TiView';
import DeviceInfo from '../../../enum/DeviceInfo';
import CookMode from '../../../models/vo/CookMode';

/**
 * 炊飯モード切り替えボタン群クラスです。
 */
export default class CookModeButtons extends TiView {

  /** 高さ */
  static get HEIGHT() {
    return 220;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // モードボタンを用意
    this._setButtons();
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(DeviceInfo.WIDTH);
    this.setHeight(CookModeButtons.HEIGHT);
  }

  /**
   * モードボタンをセットします。
   */
  _setButtons() {
    _.each(CookMode.MODE_LIST, (mode) => {
      let button = this._createButton(mode);
      this.add(button);
    });
  }

  /**
   * モードボタンを生成します。
   * @param mode
   * @return ColorButton
   */
  _createButton(mode) {

  }
}
