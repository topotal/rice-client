import BaseWindow from '../common/BaseWindow';
import TiImageView from '../../tiWrapp/TiImageView';
import * as DesignParam from '../../enum/DesignParam';
import RecordTable from './record/RecordTable';
import DetailWin from './DetailWin';
import NavWinModel from '../../models/NavWinModel';

/**
 * ホーム画面のウィンドウクラス
 */
export default class HomeWin extends BaseWindow {

  /** スクロール値 */
  _scrollNum = 0;
  /** 炊飯ボタンが表示されているかどうか */
  _cookButtonIsShow = false;
  /** 炊飯記録一覧 */
  _record = null;
  /** 炊飯ボタン */
  _cookButton = null;

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    this._onOpen = this._onOpen.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._onSelectRow = this._onSelectRow.bind(this);
    this._onClickHandler = this._onClickHandler.bind(this);

    // 見栄え処理
    this._initDecoration();
    // ウィンドウを開いた時のイベントを監視
    this.addEventListener('wOpen', this._onOpen);

    // 炊飯記録一覧
    this._record = new RecordTable();
    this._record.addEventListener('select', this._onSelectRow);
    this._record.addEventListener('wScroll', this._onScroll);
    this.add(this._record);

    // 炊飯ボタン
    this._cookButton = this._createButton();
    this._cookButton.setBottom(-80);
    this.add(this._cookButton);
    this._cookButton.addEventListener('wClick', this._onClickHandler);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setTitleImage('assets/images/nav_title.png');
    this.setBarColor(DesignParam.COLOR.GREEN);
    this.setBarImage('assets/images/transparent.png');
    this.setShadowImage('assets/images/navbar_shadow.png');
    this.setBackgroundColor(DesignParam.COLOR.GREEN);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
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
   * Rowクリック時のハンドラーです。
   */
  _onSelectRow() {
    let win = new DetailWin(1);
    let mainNavWin = NavWinModel.getInstance().getNavWin('main');
    mainNavWin.openWindow(win);
  }

  /**
   * スクロール時のハンドラーです。
   * @param e
   */
  _onScroll(e) {
    this._scrollNum = e.contentOffset.y;
    if(this._scrollNum <= 0) {
      this._showCookButton();
    } else {
      this._hideCookButton();
    }
  }

  /**
   * 炊飯ボタン押下時のハンドラーです。
   */
  _onClickHandler(e) {
    e.cancelBubble = true;
    let navWinModel = NavWinModel.getInstance();
    navWinModel.openNavWin('cook');
  }

  /**
   * 炊飯ボタンを隠します。
   */
  _hideCookButton() {
    if(!this._cookButtonIsShow) {
      return;
    }
    this._cookButtonIsShow = false;
    let animation = Ti.UI.createAnimation();
    animation.bottom = -80;
    animation.duration = 300;
    this._cookButton.animate(animation);
  }

  /**
   * 炊飯ボタンを表示します。
   */
  _showCookButton() {
    if(this._cookButtonIsShow) {
      return;
    }
    this._cookButtonIsShow = true;
    let animation = Ti.UI.createAnimation();
    animation.bottom = 32;
    animation.duration = 300;
    this._cookButton.animate(animation);
  }

  /**
   * windowが開いた時のハンドラーです。
   */
  _onOpen() {
    this._showCookButton();
    this._record.initLoad();
  }
}
