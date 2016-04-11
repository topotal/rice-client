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
    // navWinのリスト
    this._navWinList = [];
    // 初期navWindowの準備
    this._init();
  }

  /**
   * 初期化
   */
  _init() {
    this._navWinList.push({
      name: 'main',
      navWin: new MainNav()
    });
    this._navWinList.push({
      name: 'cook',
      navWin: new CookNav()
    });
  }

  /**
   * 指定したnavWindowを返却します。
   * @param name
   */
  getNavWin(name) {
    let navWin = null;
    let length = this._navWinList.length;
    for(let i = 0; i < length; i++) {
      if(this._navWinList[i].name == name) {
        navWin = this._navWinList[i].navWin;
      }
    }
    return navWin;
  }

  /**
   * 指定したnavWindowを開きます。
   * @param name
   */
  openNavWin(name) {
    console.info('~~~~~~~~~~~~~~', name);
    let navWin = this.getNavWin(name);
    console.info(navWin);
    navWin.open();
  }

  /**
   * 指定したnavWindowを閉じます。
   */
  closeNavWin() {
  }

  /**
   * 現在開いているnavWindowを返却します。
   */
  getCurrentNavWin() {
    return;
  }

}

let app = new App();
app.openNavWin('main');
