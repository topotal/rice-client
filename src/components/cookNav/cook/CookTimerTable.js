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

    this._currentRow = null;

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
   * @param mode
   */
  pushRow(mode) {
    let oldRow = this._currentRow;
    if(oldRow) {
      // タイマーをストップ
      oldRow.stop();
      // 次のRowと繋ぐ
      oldRow.jointNextRow();
    }

    // rowを生成
    var row = new CookTimerRow(mode);
    row.start();
    this.appendRow(row);
    this.scrollToIndex(this.getData().length-1);

    // 前のRowと繋ぐ
    if(this.getData().length > 1) {
      row.jointBeforeRow();
    }

    // 現在Rowを更新
    this._currentRow = row;
  }

}
