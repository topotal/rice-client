import TiNavWin from '../../tiWrapp/TiNavWin';
import HomeWin from './HomeWin';

/**
 * メインのナビゲーションウィンドウ
 */
export default class MainNav extends TiNavWin {

  /**
   * コンストラクター
   */
  constructor() {
    super();

    // ホーム
    let homeWin = new HomeWin();
    this.setWindow(homeWin);
  }

}
