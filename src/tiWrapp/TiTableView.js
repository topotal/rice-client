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
  }

  /**
   * tiObjをセットします。
   * @param prop
   */
  setTiObj(prop) {
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
