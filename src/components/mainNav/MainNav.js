import TiNavWin from '../../tiWrapp/TiNavWin';
import HomeWin from './HomeWin';

/**
 * メインのナビゲーションウィンドウ
 */
export default class MainNav extends TiNavWin {

  /** ID */
  get id() {
    return this._id;
  }

  /**
   * コンストラクター
   */
  constructor() {
    super();

    this._id = 'main';

    // ホーム
    let homeWin = new HomeWin();
    this.setWindow(homeWin);
  }

}
