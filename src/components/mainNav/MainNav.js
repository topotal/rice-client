import TiNavWin from '../../tiWrapp/TiNavWin';
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

    // ホーム
    let homeWin = new HomeWin();
    this.setWindow(homeWin);
  }

}
