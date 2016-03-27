import TiNavWin from '../../tiWrapp/TiNavWin';
import NavWinManager from '../../managers/NavWinManager';
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

    let navWinManager = NavWinManager.getInstance();
    navWinManager.add('main', this);

    // ホーム
    let homeWin = new HomeWin();
    this.setWindow(homeWin);
  }

}
