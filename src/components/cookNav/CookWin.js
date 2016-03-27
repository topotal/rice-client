import * as DesignParam from '../../enum/DesignPram';
import NavWinManager from '../../managers/NavWinManager';
import TiWindow from '../../tiWrapp/TiWindow';
import ColorButton from '../common/ColorButton';

/**
 * 炊飯画面クラスです。
 */
export default class CookWin extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // 切り替えボタン
    let changeButton = this._createChangeButton();
    changeButton.setLeft(10);
    changeButton.setRight(10);
    changeButton.setBottom(10);
    this.add(changeButton);
    changeButton.addEventListener('click', () => {
      let navWinManager = NavWinManager.getInstance();
      navWinManager.closeNavWin('cook');
    });
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
   * 切り替えボタンを生成します。
   * @return ColorButton
   */
  _createChangeButton() {
    let button = new ColorButton(
      DesignParam.COLOR.GREEN,
      '切り替える',
      {
        height: 60
      }
    );
    return button;
  }

}
