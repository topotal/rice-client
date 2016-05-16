import TiTableViewRow from '../../../tiWrapp/TiTableViewRow';
import TiView from '../../../tiWrapp/TiView';

/**
 * 炊飯記録のRowクラスです。
 */
export default class CookTimerRow extends TiTableViewRow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    var hoge = new TiView({
      width: 10,
      height: 10,
      backgroundColor: '#FF0'
    });
    this.add(hoge);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(60);
  }

}
