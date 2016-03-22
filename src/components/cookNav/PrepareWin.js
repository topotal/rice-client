import TiWindow from '../../tiWrapp/TiWindow';
import * as DesignParam from '../../enum/DesignPram';

/**
 * 炊飯準備ウィンドウクラスです。
 */
export default class PrepareWin extends TiWindow {

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
    this.setTranslucent(false);
    this.setTitleImage('assets/images/nav_title.png');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBarImage('assets/images/transparent.png');
    this.setHideShadow(true);
    this.setShadowImage('assets/images/transparent.png');
    this.setBackgroundColor(DesignParam.COLOR.ORANGE);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

}
