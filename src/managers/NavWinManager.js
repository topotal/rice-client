//import _ from 'libs/lodash';

/**
 * NavigationWindowの管理クラス
 */
export default class NavWinManager {

  /**
   * インスタンスを返却します。
   * @return NavWinManager
   */
  static getInstance() {
    return this._instance || new NavWinManager(true);
  }

  /**
   * コンストラクターです。
   * @param fromThisClass getInstance経由かどうかの真偽値
   */
  constructor(fromThisClass) {
    // getInstance経由で無ければ処理しない
    if(!fromThisClass) {
      return false;
    }

    // navWinの格納配列
    this.navWins = [];
    // インスタンス
    this._instance = this;
  }

  /**
   * navWinを追加します。
   * @param id
   * @param navWin
   */
  add(id, navWin) {
    let data = {
      id: id,
      navWin: navWin
    };
    this.navWins.push(data);
  }

  /**
   * navWinを削除します。
   * @param id
   */
  remove(id) {
    console.log(id);
  }

  /**
   * navWinを開きます。
   * @param id
   */
  open(id) {
    console.log(id);
  }

  /**
   * navWinを閉じます
   * @param id
   */
  close(id) {
    console.log(id);
  }

}
