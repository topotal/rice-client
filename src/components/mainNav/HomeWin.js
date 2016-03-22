import TiWindow from '../../tiWrapp/TiWindow';
import TiImageView from '../../tiWrapp/TiImageView';
import * as DesignParam from '../../enum/DesignPram';
import RecordTable from './record/RecordTable';
import NavWinManager from '../../managers/NavWinManager';
import CookNav from '../cookNav/CookNav';

/**
 * ホーム画面のウィンドウクラス
 */
export default class HomeWin extends TiWindow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // 炊飯記録一覧
    this._record = this._createRecord();
    this.add(this._record);

    // 炊飯ボタン
    this._cookButton = this._createButton();
    this._cookButton.setBottom(32);
    this.add(this._cookButton);

    // 炊飯ボタンのクリックイベント
    this._cookButton.addEventListener('click', (e) => this._onClickHandler(e));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setTitleImage('assets/images/nav_title.png');
    this.setBarColor(DesignParam.COLOR.GREEN);
    this.setBarImage('assets/images/transparent.png');
    this.setHideShadow(true);
    this.setShadowImage('assets/images/transparent.png');
    this.setBackgroundColor(DesignParam.COLOR.GREEN);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

  /**
   * 炊飯記録一覧を生成します。
   */
  _createRecord() {
    let table = new RecordTable();
    return table;
  }

  /**
   * 炊飯ボタンを生成します。
   */
  _createButton() {
    let button = new TiImageView({
      width: 60,
      height: 62,
      backgroundImage: DesignParam.IMAGE.COOK_BUTTON
    });
    return button;
  }

  /**
   * 炊飯ボタン押下時のハンドラーです。
   */
  _onClickHandler(e) {
    e.cancelBubble = true;
    let cookNavWin = new CookNav({
      modal: true
    });
    cookNavWin.open();
    console.info('click');
  }

}
