import * as DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';
import NavWinModel from '../../../models/NavWinModel';
import TiView from '../../../tiWrapp/TiView';
import TiImageView from '../../../tiWrapp/TiImageView';
import TiButton from '../../../tiWrapp/TiButton';
import BaseWindow from '../../common/BaseWindow';
import StarRating from '../../common/StarRating';

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

    this._starRating = null;

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

    // カメラボタン
    let cameraButton = this._createCameraButton();
    cameraButton.setTop(135);
    cameraButton.setLeft(10);
    cameraButton.setRight(10);
    this.add(cameraButton);

    // 5段階評価
    let startRating = this._createStarRating();
    startRating.setTop(314);
    startRating.setLeft(10);
    startRating.setRight(10);
    this.add(startRating);

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
    this.setTitle('炊飯記録');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBackgroundColor(DesignParam.COLOR.ORANGE);
    this.setLeftNavButton(new TiButton());
  }

  /**
   * カメラボタンを生成します。
   * @return ColorButton
   */
  _createCameraButton() {
    let button = new ColorButton(
      DesignParam.COLOR.GRAY,
      null,
      {
        height: 169
      }
    );

    // アイコン
    let icon = new TiImageView({
      image: DesignParam.IMAGE.CAMERA
    });
    button.add(icon);

    return button;
  }

  /**
   * ５段階評価ボックスを生成します。
   */
  _createStarRating() {
    let view = new TiView({
      height: 89,
      borderRadius: 5,
      viewShadowOffset: {x: 0, y: 2},
      viewShadowRadius: 0,
      viewShadowColor: 'rgba(0, 0, 0, 0.4)',
      backgroundColor: DesignParam.COLOR.LIGHT_YELLOW
    });

    // 5段階評価
    this._starRating = new StarRating(0, 29);
    view.add(this._starRating);

    return view;
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
