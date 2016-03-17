import TiWindow from './tiWrapp/TiWindow';
import Hoge from './Hoge';

/**
 * メインアプリクラス
 */
class App {

  /**
   * コンストラクター
   */
  constructor() {
    console.log('const');
  }

  /**
   * アプリをスタート
   */
  start() {
    console.log('start');
    let window = new TiWindow({
      backgroundColor: '#FF0000'
    });
  }

}

let app = new App();
app.start();
