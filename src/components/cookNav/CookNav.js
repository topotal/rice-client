import TiNavWin from '../../tiWrapp/TiNavWin';
import PrepareWin from './PrepareWin';

/**
 * 炊飯のnavWindowクラスです。
 */
export default class CookNav extends TiNavWin {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // ホーム
    let prepareWin = new PrepareWin();
    this.setWindow(prepareWin);

    prepareWin.addEventListener('click', () => {
      this.close();
    });
  }

}
