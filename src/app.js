import MainNav from './components/mainNav/MainNav';
import CookNav from './components/cookNav/CookNav';
import BaseService from './service/BaseService';

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

    new BaseService();
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
