import MainNav from './components/mainNav/MainNav';
import CookNav from './components/cookNav/CookNav';
import GetBlandsService from './service/GetBlandsService';

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
    // 開いているnavWinのスタック
    this._stackOpenNavWin = [];
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

    var service = new GetBlandsService();
    service.addEventListener('success', (e) => {
      console.info('success^^^^^^^^', e);
    });
    service.load();
  }

  /**
   * 指定したnavWindowを返却します。
   * @param name
   * @return TiNavWindow
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
    let navWin = this.getNavWin(name);
    navWin.open();
    this._stackOpenNavWin.push(navWin);
  }

  /**
   * 指定したnavWindowを閉じます。
   * @param name
   */
  closeNavWin(name) {
    let navWin = this.getNavWin(name);
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

let app = new App();
app.openNavWin('main');
