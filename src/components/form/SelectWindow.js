import TiWindow from '../../tiWrapp/TiWindow';
import TiTableView from '../../tiWrapp/TiTableView';
import * as DesignParam from '../../enum/DesignPram';

/**
 * 選択画面クラス
 */
export default class SelectWindow extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // テーブル
    let table = this._createTable();
    this.add(table);
    table.addEventListener('click', (e) => this._onClickTable(e));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setBarColor(DesignParam.COLOR.BLACK);
    this.setBarImage('assets/images/transparent.png');
    this.setShadowImage('assets/images/navbar_shadow.png');
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

  /**
   * テーブルを生成します。
   * @return TiTableView
   */
  _createTable() {
    let table = new TiTableView();

    table.setData([{
      title: '魚沼産 コシヒカリ'
    }]);

    return table;
  }

  /**
   * テーブルのクリック時のハンドラーです。
   */
  _onClickTable(e) {
    console.info(e);
  }

}
