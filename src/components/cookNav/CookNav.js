import TiNavWin from '../../tiWrapp/TiNavWin';
import PrepareWin from './PrepareWin';
import NavWinManager from '../../managers/NavWinManager';

/**
 * 炊飯のnavWindowクラスです。
 */
export default class CookNav extends TiNavWin {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // ホーム
    let prepareWin = new PrepareWin();
    this.setWindow(prepareWin);

    let navWinManager = NavWinManager.getInstance();
    navWinManager.add('cook', this);
  }

}
