import TiNavWin from '../../tiWrapp/TiNavWin';
import PrepareWin from './prepare/PrepareWin';

/**
 * 炊飯のnavWindowクラスです。
 */
export default class CookNav extends TiNavWin {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super({
      modal: true
    });

    // ホーム
    let prepareWin = new PrepareWin();
    this.setWindow(prepareWin);
  }

}
