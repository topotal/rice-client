import {_} from 'lodash';

/**
 * NavWin管理モデルクラスです。
 */
export default class NavWinModel {

  static getInstance() {
    return NavWinModel._instance || new NavWinModel();
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    this._navWinList = [];
    this._stackOpenNavWin = [];

    NavWinModel._instance = this;
  }

  /**
   * NavWinを登録します。
   */
  registerNavWin(navWin) {
    this._navWinList.push(navWin);
    console.info(this._navWinList);
  }

  /**
   * 指定したidのNavWinwを取得します。
   */
  getNavWin(id) {
    let selectNavWin = _.find(this._navWinList, (navWin) => {
      return navWin.id == id;
    });
    return selectNavWin;
  }

  /**
   * 指定したnavWindowを開きます。
   * @param name
   */
  openNavWin(id) {
    let navWin = this.getNavWin(id);
    navWin.open();
    this._stackOpenNavWin.push(navWin);
  }

  /**
   * 指定したnavWindowを閉じます。
   * @param name
   */
  closeNavWin(id) {
    let navWin = this.getNavWin(id);
    navWin.close();
    this._stackOpenNavWin.pop();
  }

  /**
   * 現在開いているnavWindowを返却します。
   * @return TiNavWindow
   */
  getCurrentNavWin() {
    let navWin = this._stackOpenNavWin[this._stackOpenNavWin.length-1];
    return navWin;
  }

}
