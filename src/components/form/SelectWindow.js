import BaseWindow from '../common/BaseWindow';
import SelectTable from './SelectTable';

/**
 * 選択画面クラス
 */
export default class SelectWindow extends BaseWindow {

  /**
   * 値を取得します。
   */
  getValue() {
    return this._value;
  }

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
    this._table = new SelectTable();
    this._table.addEventListener('select', () => this._onSelectTable());
    this.add(this._table);

    // ウィンドウオープンを監視
    this.addEventListener('open', () => this._onOpen());
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
   * ウィンドウオープン時のハンドラーです。
   */
  _onOpen() {
    this._table.initLoad();
  }

  /**
   * 選択時のハンドラーです。
   */
  _onSelectTable() {
    this._value = this._table.getValue();
    this.fireEvent('select');
    this.close();
  }

}
