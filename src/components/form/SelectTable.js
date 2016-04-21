import {_} from 'libs/lodash';
import TiTableView from '../../tiWrapp/TiTableView';
import TiView from '../../tiWrapp/TiView';
import TiImageView from '../../tiWrapp/TiImageView';
import DesignParam from '../../enum/DesignPram';
import SelectTableRow from './SelectTableRow';

/**
 * セレクト用のテーブルクラスです。
 */
export default class SelectTable extends TiTableView {

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
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData),
      new SelectTableRow(sampleData)
    ]);

    // ヘッダーをセット
    let headerView = this._createHeaderView();
    this.setHeaderView(headerView);

    // フッターをセット
    let footerView = this._createFooterView();
    this.setFooterView(footerView);

    // クリックを監視
    this.addEventListener('click', (event) => this._onClick(event));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setBackgroundColor('transparent');
    this.setSeparatorColor('transparent');
  }

  /**
   * ヘッダーを生成します。
   * @return TiView
   */
  _createHeaderView() {
    let view = new TiView({
      height: 8
    });
    return view;
  }

  /**
   * フッターを生成します。
   * @return TiView
   */
  _createFooterView() {
    let view = new TiView({
      height: 60
    });

    // お米君画像
    let image = new TiImageView({
      top: 12,
      image: DesignParam.IMAGE.FOOTER_VIEW
    });
    view.add(image);

    return view;
  }

  /**
   * クリック時のハンドラーです。
   * @param event
   */
  _onClick(event) {
    let data = this.getData();
    _.each(data, (row) => {

      // row以外は処理しない
      if(!row.getRowData) { return; }

      // 同じidのrowであればチェックを付ける
      if(event.row.data.id === row.getRowData().id) {
        row.check();
      } else {
        row.unCheck();
      }
    });
  }
}
