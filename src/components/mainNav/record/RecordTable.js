import TiTableView from '../../../tiWrapp/TiTableView';
import RecordRow from './RecordRow';

export default class RecordTable extends TiTableView {

  /**
   * コンストラクター
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    this.setData([
      new RecordRow(),
      new RecordRow(),
      new RecordRow(),
      new RecordRow(),
      new RecordRow(),
      new RecordRow(),
      new RecordRow(),
      new RecordRow()
    ]);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setRowHeight(this._rowHeight);
    this.setAllowsSelection(false);
    this.setBackgroundColor('transparent');
    this.setSeparatorColor('transparent');
  }
}
