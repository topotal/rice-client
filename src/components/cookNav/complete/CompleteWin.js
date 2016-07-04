import * as DesignParam from '../../../enum/DesignParam';
import TiWindow from '../../../tiWrapp/TiWindow';
import ColorButton from '../../common/ColorButton';
import NavWinModel from '../../../models/NavWinModel';

/**
 * 炊飯完了画面クラスです。
 */
export default class CompleteWin extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // 記録に残すボタン
    let saveButton = this._createSaveButton();
    saveButton.setLeft(10);
    saveButton.setRight(10);
    saveButton.setBottom(10);
    this.add(saveButton);
    saveButton.addEventListener('wclick', () => this._onClickSaveButton());
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setTitleImage('assets/images/cook_title.png');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBarImage('assets/images/transparent.png');
    this.setShadowImage('assets/images/navbar_shadow.png');
    this.setBackgroundColor(DesignParam.COLOR.ORANGE);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

  /**
   * 記録に残すボタンを生成します。
   * @return ColorButton
   */
  _createSaveButton() {
    let button = new ColorButton(
      DesignParam.COLOR.GREEN,
      '記録に残す',
      {
        height: 60
      }
    );
    return button;
  }

  /**
   * 記録に残すボタン押下ハンドラーです。
   */
  _onClickSaveButton() {
    let cookNavWin = NavWinModel.getInstance().getNavWin('cook');
    cookNavWin.close();
  }

}
