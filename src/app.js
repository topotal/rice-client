import MainNav from './components/mainNav/MainNav';
import CookNav from './components/cookNav/CookNav';
import NavWinModel from './models/NavWinModel';

/**
 * メインアプリクラス
 */
class App {

  hoge = 'hoge';

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

    console.info('====================================');
    console.info(this.hoge);

    // メインNavWinを開く
    NavWinModel.getInstance().openNavWin('main');
  }

  /**
   * 初期化
   */
  _init() {
    let navWinModel = NavWinModel.getInstance();
    navWinModel.registerNavWin(new MainNav());
    navWinModel.registerNavWin(new CookNav());
  }


}
new App();
