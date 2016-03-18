import NavWinManager from './managers/NavWinManager';
import MainNav from './components/mainNav/MainNav';

/**
 * メインアプリクラス
 */
class App {

  /**
   * コンストラクター
   */
  constructor() {
    this.navWinManager = NavWinManager.getInstance();
    this.mainNav = new MainNav();
  }

  /**
   * アプリをスタート
   */
  start() {
    this.mainNav.open();
  }

}

let app = new App();
app.start();
