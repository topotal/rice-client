import EventEmitter from 'eventemitter3';

/**
 * シーンのモデルクラスです。
 */
export default class SceneModel extends EventEmitter {

  /** インスタンス */
  static _instance;
  static get instance() {
    return SceneModel._instance || new SceneModel();
  }

  /** アプリメインのNavigation */
  _mainNav;
  set mainNav(mainNav) {
    this._mainNav = mainNav;
  }

  /** 表示中のNavWin */
  _currentNavWindow;
  set currentNavWindow(navWindow) {
    this._currentNavWindow = navWindow;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    SceneModel._instance = this;
  }

  /**
   * NavWindowをPushします。
   */
  pushNavWindow(navWindowRoute) {
    this._mainNav.push(navWindowRoute);
  }

  /**
   * NavWindowをPopします。
   */
  popNavWindow() {
    this._mainNav.pop();
  }

  /**
   * 画面をPushします。
   */
  pushWindow(windowRoute) {
    this._currentNavWindow.push(windowRoute);
  }

  /**
   * 画面をPopします。
   */
  popWindow() {
    this._currentNavWindow.pop();
  }
}
