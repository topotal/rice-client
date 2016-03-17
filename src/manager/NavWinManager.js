import _ from 'libs/lodash.min';

/**
 * NavigationWindowの管理クラス
 */
export default class NavWinManager {

  /**
   * コンストラクター
   */
  constructor() {
    console.log(_.map);
    this.navWins = [];
  }

  /**
   * navWinを追加します
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
   * navWinを削除します
   * @param id
   */
  remove(id) {
    console.log(id);
  }

  /**
   * navWinを開きます
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
