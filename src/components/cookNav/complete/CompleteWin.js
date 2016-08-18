import * as DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';
import NavWinModel from '../../../models/NavWinModel';
import TiView from '../../../tiWrapp/TiView';
import TiImageView from '../../../tiWrapp/TiImageView';
import TiLabel from '../../../tiWrapp/TiLabel';
import TiScrollView from '../../../tiWrapp/TiScrollView';
import TiButton from '../../../tiWrapp/TiButton';
import BaseWindow from '../../common/BaseWindow';
import StarRating from '../../common/StarRating';
import Media from '../../common/Media';
import TimelineTable from '../../common/TimelineTable';
import CookModel from '../../../models/CookModel';

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

    // モデル
    this._model = CookModel.getInstance();

    // 見栄え処理
    this._initDecoration();

    // スクロールビュー
    let scrollView = new TiScrollView({
      width: Ti.UI.FILL,
      height: Ti.UI.FILL,
      layout: 'vertical'
    });
    this.add(scrollView);

    // GoodJob画像
    let goodJob = new TiImageView({
      top: 14,
      width: 199,
      height: 98,
      image: DesignParam.IMAGE.GOOD_JOB
    });
    scrollView.add(goodJob);

    // カメラボタン
    this._cameraButton = this._createCameraButton();
    this._cameraButton.setTop(23);
    this._cameraButton.setLeft(10);
    this._cameraButton.setRight(10);
    this._cameraButton.setBottom(10);
    this._onClickCameraButton = this._onClickCameraButton.bind(this);
    this._cameraButton.addEventListener('wClick', this._onClickCameraButton);
    scrollView.add(this._cameraButton);

    // タイムライン
    this._timelineTable = new TimelineTable();
    this._timelineTable.setHeight(Ti.UI.SIZE);
    this._timelineTable.setLeft(10);
    this._timelineTable.setRight(10);
    this._timelineTable.setBottom(30);
    this._timelineTable.setTimelineData(this._model.timeline);
    scrollView.add(this._timelineTable);

    // メディア
    this._media = new Media();
    this._onSuccessMedia = this._onSuccessMedia.bind(this);
    this._media.addEventListener('success', this._onSuccessMedia);

    // 5段階評価
    let startRating = this._createStarRating();
    startRating.setLeft(10);
    startRating.setRight(10);
    startRating.setBottom(10);
    scrollView.add(startRating);

    // 記録に残すボタン
    let saveButton = this._createSaveButton();
    saveButton.setLeft(10);
    saveButton.setRight(10);
    saveButton.setBottom(10);
    scrollView.add(saveButton);
    saveButton.addEventListener('wClick', () => this._onClickSaveButton());
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTitle('炊飯記録');
    this.setLayout('vertical');
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
      top: 41,
      image: DesignParam.IMAGE.CAMERA
    });
    button.add(icon);

    // テキスト
    let text = new TiLabel({
      top: 112,
      text: '写真を追加する',
      color: DesignParam.COLOR.WHITE,
      font: {
        fontWeight: 'bold',
        fontSize: 14
      }
    });
    button.add(text);

    // 画像
    this._image = new TiImageView({
      image: null,
      height: Ti.UI.SIZE
    });
    button.add(this._image);

    return button;
  }

  /**
   * ５段階評価ボックスを生成します。
   */
  _createStarRating() {
    let view = new TiView({
      height: 89,
      borderRadius: 5,
      backgroundColor: DesignParam.COLOR.LIGHT_YELLOW
    });

    let text = new TiLabel({
      top: 14,
      text: '今回の炊飯は星いくつ？',
      color: DesignParam.COLOR.GREEN,
      font: {
        fontWeight: 'bold',
        fontSize: 14
      }
    });
    view.add(text);

    // 5段階評価
    this._starRating = new StarRating(0, 29, 17);
    this._starRating.setTop(40);
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
   * カメラボタン押下時のハンドラーです。
   */
  _onClickCameraButton() {
    this._media.showCamera();
  }

  /**
   * 記録に残すボタン押下ハンドラーです。
   */
  _onClickSaveButton() {
    let cookNavWin = NavWinModel.getInstance().getNavWin('cook');
    cookNavWin.close();
  }

  /**
   * メディアの読み込みが完了した際のハンドラーです。
   */
  _onSuccessMedia(media) {
    this._image.setWidth(this._cameraButton.size.width);
    this._image.setImage(media);
  }

}
