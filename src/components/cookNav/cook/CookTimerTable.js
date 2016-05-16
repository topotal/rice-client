import TiTableView from '../../../tiWrapp/TiTableView';
import DesignParam from '../../../enum/DesignParam';
import CookTimerRow from './CookTimerRow';

/**
 * 炊飯記録のテーブルクラスです。
 */
export default class CookTimerTable extends TiTableView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(Ti.UI.FILL);
    this.setRowHeight(60);
    this.setBackgroundColor(DesignParam.COLOR.WHITE);
  }

  /**
   * Rowを追加します。
   */
  pushRow() {
    var row = new CookTimerRow();
    this.appendRow(row);
    this.scrollToIndex(this.getData().length-1);
  }

}
