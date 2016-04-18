import BaseWindow from '../common/BaseWindow';
import SelectTable from './SelectTable';

/**
 * 選択画面クラス
 */
export default class SelectWindow extends BaseWindow {

  /**
   * コンストラクター
   * @constructor
   * @param color テーマカラー
   */
  constructor(color) {
    super();

    // テーマカラー
    this._color = color;

    // 見栄え処理
    this._initDecoration();

    // テーブル
    let table = new SelectTable();
    this.add(table);
    table.addEventListener('click', (e) => this._onClickTable(e));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTitle('銘柄');
    this.setBarColor(this._color);
    this.setBackgroundColor(this._color);
  }

  /**
   * テーブルのクリック時のハンドラーです。
   */
  _onClickTable(e) {
    console.info(e);
    this.close();
  }

}
