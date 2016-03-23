import TiWindow from '../../tiWrapp/TiWindow';
import * as DesignParam from '../../enum/DesignPram';

/**
 * 詳細画面のウィンドウクラス
 */
export default class DetailWin extends TiWindow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setBarColor(DesignParam.COLOR.GREEN);
    this.setBarImage('assets/images/transparent.png');
    this.setHideShadow(true);
    this.setShadowImage('assets/images/transparent.png');
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

}

