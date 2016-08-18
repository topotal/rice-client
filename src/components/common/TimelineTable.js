import TiTableView from '../../tiWrapp/TiTableView';
import DesignParam from '../../enum/DesignParam';
import TimelineRow from './TimelineRow';
import CookStep from '../../models/vo/CookStep';

/**
 * 炊飯記録のテーブルクラスです。
 */
export default class TimelineTable extends TiTableView {

  get timelineData() {
    let data = [];
    let rows = this.getData();
    rows.forEach((row) => {
      data.push(row.data);
    });

    return data;
  }

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
    this.setSeparatorStyle(Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE);
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
    let data = new CookStep(mode, 0);
    let row = new TimelineRow(data);
    this.appendRow(row);
    this.scrollToIndex(this.getData().length-1);

    // 前のRowと繋ぐ
    if(this.getData().length > 1) {
      row.jointBeforeRow();
    }

    // 現在Rowを更新
    this._currentRow = row;

    // タイマーをスタート
    this.start();
  }

  /**
   * Rowをセットします。
   * @param timelineData
   */
  setTimelineData(timelineData) {
    timelineData = timelineData || [];
    let rows = [];

    timelineData.forEach((data) => {
      var row = new TimelineRow(data);
      rows.push(row);
    });

    this.setData(rows);
  }

  /**
   * タイマーをスタートさせます。
   */
  start() {
    this._currentRow.start();
  }

  /**
   * タイマーをストップさせます。
   */
  stop() {
    this._currentRow.stop();
  }

}
