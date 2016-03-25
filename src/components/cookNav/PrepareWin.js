import TiWindow from '../../tiWrapp/TiWindow';
import {_} from 'libs/lodash';
import * as DesignParam from '../../enum/DesignPram';
import ColorButton from '../common/ColorButton';
import NavWinManager from '../../managers/NavWinManager';

/**
 * 炊飯準備ウィンドウクラスです。
 */
export default class PrepareWin extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super({
      modal: true
    });

    // 見栄え処理
    this._initDecoration();

    let startButton = this._createStartButton();
    startButton.setLeft(10);
    startButton.setRight(10);
    startButton.setBottom(10);
    this.add(startButton);
    startButton.addEventListener('click', _.bind(this._onClickStart, this));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setTitleImage('assets/images/cook_title.png');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBarImage('assets/images/transparent.png');
    this.setHideShadow(true);
    this.setShadowImage('assets/images/transparent.png');
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

  /**
   * スタートボタンを生成します。
   * @return ColorButton
   */
  _createStartButton() {
    let button = new ColorButton(
      DesignParam.COLOR.GREEN,
      '炊飯をはじめる',
      {
        height: 60
      }
    );
    return button;
  }

  /**
   * スタートボタン押下時のハンドラーです。
   */
  _onClickStart() {
    let navWinManager = NavWinManager.getInstance();
    navWinManager.closeNavWin('cook');
  }

}
