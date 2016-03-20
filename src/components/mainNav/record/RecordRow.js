import TiTableViewRow from '../../../tiWrapp/TiTableViewRow';
import TiView from '../../../tiWrapp/TiView';

export default class RecordRow extends TiTableViewRow {

  /**
   * コンストラクター
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
    this.setHeight(100);
    this.setBackgroundColor('#FF00FF');
  }
}
