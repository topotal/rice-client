import TiNavWin from '../../tiWrapp/TiNavWin';
import PrepareWin from './prepare/PrepareWin';

/**
 * 炊飯のnavWindowクラスです。
 */
export default class CookNav extends TiNavWin {

  /** ID */
  get id() {
    return this._id;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super({
      modal: true
    });

    this._id = 'cook';

    // ホーム
    let prepareWin = new PrepareWin();
    this.setWindow(prepareWin);
  }

}
