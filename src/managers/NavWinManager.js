import {_} from 'libs/lodash';

/**
 * NavigationWindowの管理クラス
 */
export default class NavWinManager {

  /**
   * コンストラクターです。
   * @constructor
   */
  constructor() {
    if(!Ti.App.navWins) {
      Ti.App.navWins = [];
    }
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
    let navWins = Ti.App.navWins;
    navWins.push(data);
    Ti.App.navWins = navWins;
  }

  /**
   * navWinを削除します。
   * @param id
   */
  remove(id) {
    console.log(id);
  }

  /**
   * 指定されたidのnavWinを取得します。
   * @param id
   */
  getNavWin(id) {
    let navWinData = _.find(Ti.App.navWins, (data) => {
      return data.id === id;
    });
    return navWinData.navWin;
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
  closeNavWin(id) {
    let navWinData = _.remove(Ti.App.navWins, (data) => {
      return data.id === id;
    });
    navWinData[0].navWin.close();
  }

}
