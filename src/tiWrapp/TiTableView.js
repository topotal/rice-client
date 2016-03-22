import {_} from 'libs/lodash';

/**
 * TiのTableViewのラップクラス
 */
export default class TiTableView {

  /**
   * コンストラクター
   */
  constructor(prop) {
    this.tiObj = Ti.UI.createTableView(prop);
  }

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
  }

  /**
   * 背景色を追加します。
   * @param color 色
   */
  setBackgroundColor(color) {
    this.tiObj.setBackgroundColor(color);
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

}
