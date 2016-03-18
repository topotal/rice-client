/**
 * Windowの管理クラス
 */
export default class WinManager {

  /**
   * コンストラクターです。
   */
  constructor() {
    // winの格納配列
    this.wins = [];
  }

  /**
   * winを追加します。
   * @param id
   * @param win
   */
  add(id, win) {
    let data = {
      id: id,
      win: win
    };
    this.wins.push(data);
  }

  /**
   * winを削除します。
   * @param id
   */
  remove(id) {
    console.log(id);
  }

  /**
   * winを開きます。
   * @param id
   */
  open(id) {
    console.log(id);
  }

  /**
   * winを閉じます
   * @param id
   */
  close(id) {
    console.log(id);
  }

}
