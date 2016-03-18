import TiNavWin from '../../tiWrapp/TiNavWin';
import * as DesignParam from '../../enum/DesignPram';
import WinManager from '../../managers/WinManager';
import HomeWin from './HomeWin';

/**
 * メインのナビゲーションウィンドウ
 */
export default class MainNav extends TiNavWin {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    // window管理マネージャー
    this.winManager = new WinManager();

    console.info(DesignParam.COLOR);

    // ホーム
    let homeWin = new HomeWin();
    this.setWindow(homeWin);
  }

}
