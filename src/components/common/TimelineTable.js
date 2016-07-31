import TiTableView from '../../tiWrapp/TiTableView';
import DesignParam from '../../enum/DesignParam';
import TimelineRow from './TimelineRow';

/**
 * 炊飯記録のテーブルクラスです。
 */
export default class TimelineTable extends TiTableView {

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
    this.setBorderRadius(5);
    this.setRowHeight(60);
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
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
    var row = new TimelineRow(mode);
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

  /**
   * Rowをセットします。
   * @param timelineData
   */
  setRow(timelineData) {
    console.info(timelineData);
  }

}
