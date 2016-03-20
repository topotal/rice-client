import {_} from 'libs/lodash.min';

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
    //let tiObjData = [];
    //_.each(data, (row) => {
    //  tiObjData.push(row.tiObj);
    //});
    //this.tiObj.setData(tiObjData);
    console.log(data[0].tiObj);
    this.tiObj.appendRow(data[0].tiObj);
    //this.tiObj.appendRow(data[0].tiObj);
  }

  /**
   * 背景色を追加します。
   * @param color 色
   */
  setBackgroundColor(color) {
    this.tiObj.setBackgroundColor(color);
  }

}

