import {_} from 'libs/lodash';
import TiView from '../tiWrapp/TiView';

/**
 * TiのTableViewのラップクラス
 */
export default class TiTableView extends TiView {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    // row格納用配列
    this._data = [];

    this.tiObj.addEventListener('scroll', (event) => this._onTiScroll(event));
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
    this.tiObj = Ti.UI.createTableView(prop);
  }

  /**
   * イベント
   */
  _onTiScroll(event) { this.fireEvent('wscroll', event); }

  /**
   * Rowをセットします。
   * @param data rowのデータ
   */
  setData(data) {
    let tiObjData = [];
    _.each(data, (row) => {
      tiObjData.push(row.tiObj);
    });
    this.tiObj.setData(tiObjData);
    this._data = data;
  }

  /**
   * Rowのデータを取得します。
   * @return Array
   */
  getData() {
    return this._data;
  }

  /**
   * デフォルトのrowの高さを設定します。
   * @param height 高さ
   */
  setRowHeight(height) {
    this.tiObj.setRowHeight(height);
  }

  /**
   * セパレーターの色を設定します。
   * @param color
   */
  setSeparatorColor(color) {
    this.tiObj.setSeparatorColor(color);
  }

  /**
   * タップした時に色をつけるか指定します。
   * @param bool
   */
  setAllowsSelection(bool) {
    this.tiObj.setAllowsSelection(bool);
  }

  /**
   * ヘッダービューを設定します。
   * @param TiView
   */
  setHeaderView(view) {
    this.tiObj.setHeaderView(view.tiObj);
  }

  /**
   * フッタービューを設定します。
   * @param TiView
   */
  setFooterView(view) {
    this.tiObj.setFooterView(view.tiObj);
  }

  /**
   * リフレッシュコントロールを設定します。
   * @param control
   */
  setRefreshControl(control) {
    this.tiObj.setRefreshControl(control);
  }
}
