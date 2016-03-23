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

    let sampleData = {
      id: 5,
      date: '2016-03-23 23:20:33',
      brand: {
        id: 10,
        district: '魚沼産',
        name: 'コシヒカリ'
      },
      temperature: 23,
      humidity: 20,
      rate: 4
    };

    this.setData([
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData),
      new RecordRow(sampleData)
    ]);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setRowHeight(this._rowHeight);
    this.setBackgroundColor('transparent');
    this.setSeparatorColor('transparent');
  }
}
