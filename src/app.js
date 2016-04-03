import MainNav from './components/mainNav/MainNav';
import CookNav from './components/cookNav/CookNav';

/**
 * メインアプリクラス
 */
class App {

  /**
   * コンストラクター
   */
  constructor() {
    this.mainNav = new MainNav();
    this.cookNav = new CookNav();
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
