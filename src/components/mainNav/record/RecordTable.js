import TiTableView from '../../../tiWrapp/TiTableView';
import TiView from '../../../tiWrapp/TiView';
import TiImageView from '../../../tiWrapp/TiImageView';
import RecordRow from './RecordRow';
import DesignParam from '../../../enum/DesignPram';

/**
 * 炊飯記録テーブルクラスです。
 */
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

    // 仮データをセットします。
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

    // ヘッダーをセット
    let headerView = this._createHeaderView();
    this.setHeaderView(headerView);

    // フッターをセット
    let footerView = this._createFooterView();
    this.setFooterView(footerView);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setRowHeight(this._rowHeight);
    this.setBackgroundColor('transparent');
    this.setSeparatorColor('transparent');
  }

  /**
   * ヘッダーを生成します。
   * @return TiView
   */
  _createHeaderView() {
    let view = new TiView({
      height: 5
    });
    return view;
  }

  /**
   * フッターを生成します。
   * @return TiView
   */
  _createFooterView() {
    let view = new TiView({
      height: 80
    });

    // お米君画像
    let image = new TiImageView({
      image: DesignParam.IMAGE.FOOTER_VIEW
    });
    view.add(image);

    return view;
  }

}
