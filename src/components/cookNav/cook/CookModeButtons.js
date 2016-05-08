import TiView from '../../../tiWrapp/TiView';
import DeviceInfo from '../../../enum/DeviceInfo';

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
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(DeviceInfo.WIDTH);
    this.setHeight(CookModeButtons.HEIGHT);
  }
}
