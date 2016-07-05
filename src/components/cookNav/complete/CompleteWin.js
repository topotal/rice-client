import * as DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';
import NavWinModel from '../../../models/NavWinModel';
import TiImageView from '../../../tiWrapp/TiImageView';
import TiButton from '../../../tiWrapp/TiButton';
import BaseWindow from '../../common/BaseWindow';

/**
 * 炊飯完了画面クラスです。
 */
export default class CompleteWin extends BaseWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // GoodJob画像
    let goodJob = new TiImageView({
      top: 14,
      width: 199,
      height: 98,
      image: DesignParam.IMAGE.GOOD_JOB
    });
    this.add(goodJob);

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
    this.setTitleImage('assets/images/cook_title.png');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBackgroundColor(DesignParam.COLOR.ORANGE);
    this.setLeftNavButton(new TiButton());
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
