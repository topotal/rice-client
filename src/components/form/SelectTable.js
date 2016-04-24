import {_} from 'libs/lodash';
import TiTableView from '../../tiWrapp/TiTableView';
import TiView from '../../tiWrapp/TiView';
import TiImageView from '../../tiWrapp/TiImageView';
import DesignParam from '../../enum/DesignPram';
import SelectTableRow from './SelectTableRow';
import GetSelectService from '../../service/GetSelectService';

/**
 * セレクト用のテーブルクラスです。
 */
export default class SelectTable extends TiTableView {

  /**
   * 選択している値を取得します。
   */
  getValue() {
    return this._value;
  }

  /**
   * コンストラクター
   */
  constructor(apiPath) {
    super();

    this._apiPath = apiPath;

    // 見栄え処理
    this._initDecoration();

    // ヘッダーをセット
    let headerView = this._createHeaderView();
    this.setHeaderView(headerView);

    // フッターをセット
    let footerView = this._createFooterView();
    this.setFooterView(footerView);

    // サービス
    this._service = new GetSelectService(this._apiPath);
    this._service.addEventListener('success', (event) => this._onSuccess(event));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setBackgroundColor('transparent');
    this.setSeparatorColor('transparent');
  }

  /**
   * 初回ロード
   */
  initLoad() {
    this._service.load();
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
   * サービス成功時のハンドラーです。
   * @param event
   */
  _onSuccess(event) {
    let data = event.data.getBrands();
    let rows = [];
    for(var index = 0; index < data.length; index++) {
      rows.push(this._createRow(index, data[index]));
    }
    this.setData(rows);
  }

  /**
   * SelectTableRowを生成します。
   * @param index
   * @param data
   */
  _createRow(index, data) {
    var row = new SelectTableRow(index, data);
    row.addEventListener('click', () => this._onClickRow({
      data: data
    }));

    // すでに選択している値があればレ点をつける
    if(this._value && this._value.getId() === data.getId()) {
      row.check();
    }

    return row;
  }

  /**
   * Rowのクリック時のハンドラーです。
   * @param event
   */
  _onClickRow(event) {
    let data = this.getData();
    _.each(data, (row) => {
      // row以外は処理しない
      if(!row.getRowData) { return; }
      // 同じidのrowであればチェックを付ける
      if(event.data.getId() === row.getRowData().getId()) {
        row.check();
      } else {
        row.unCheck();
      }
    });

    // 値を更新
    this._value = event.data;

    // 選択イベント発火
    this.fireEvent('select');
  }
}
