import TiTableView from '../../../tiWrapp/TiTableView';
import TiView from '../../../tiWrapp/TiView';
import TiImageView from '../../../tiWrapp/TiImageView';
import RecordRow from './RecordRow';
import DesignParam from '../../../enum/DesignParam';
import GetCookRecordsService from '../../../service/GetCookRecordsService';
import TiRefreshControl from '../../../tiWrapp/TiRefreshControl';

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

    // ヘッダーをセット
    let headerView = this._createHeaderView();
    this.setHeaderView(headerView);

    // フッターをセット
    let footerView = this._createFooterView();
    this.setFooterView(footerView);

    // リフレッシュコントロール
    this._refreshControl = new TiRefreshControl({
      tintColor: DesignParam.COLOR.LIGHT_YELLOW
    });
    this._refreshControl.addEventListener('refreshstart', () => this._onRefresh());
    this.setRefreshControl(this._refreshControl);

    // サービス
    this._service = new GetCookRecordsService();
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
   * リフレッシュ時のハンドラーです。
   */
  _onRefresh() {
    this.initLoad();
  }

  /**
   * サービス成功時のハンドラーです。
   * @param event
   */
  _onSuccess(event) {
    this._refreshControl.endRefreshing();
    let data = event.data.getRecords();
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
    var row = new RecordRow(data);
    row.addEventListener('wclick', () => this._onClickRow());
    // すでに選択している値があればレ点をつける
    if(this._value && this._value.getId() === data.getId()) {
      row.check();
    }
    return row;
  }

  /**
   * Rowのクリック時のハンドラーです。
   */
  _onClickRow() {
    // 選択イベントを発火
    this.fireEvent('select');
  }
}
