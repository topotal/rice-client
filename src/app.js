import NavWinManager from './manager/NavWinManager';

/**
 * メインアプリクラス
 */
class App {

  /**
   * コンストラクター
   */
  constructor() {
    new NavWinManager();
  }

  /**
   * アプリをスタート
   */
  start() {
  }

}

let app = new App();
app.start();
