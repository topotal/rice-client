import TiWindow from '../../tiWrapp/TiWindow';
import * as DesignParam from '../../enum/DesignPram';
import ColorButton from '../common/ColorButton';

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

    let startButton = new ColorButton(
      DesignParam.COLOR.GREEN,
      '炊飯をはじめる',
      {
        left: 10,
        right: 10,
        bottom: 10,
        height: 60
      }
    );
    this.add(startButton);
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

}
