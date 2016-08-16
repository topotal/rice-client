import TiWindow from '../../../tiWrapp/TiWindow';
import DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';
import TiImageView from '../../../tiWrapp/TiImageView';

/**
 * タイマー停止中のウィンドウクラスです。
 */
export default class StopWindow extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
    this.setZIndex(10000);

    let image = new TiImageView({
      image: DesignParam.IMAGE.STOP_ICON
    });
    this.add(image);

    this._resumeButton = new ColorButton(DesignParam.COLOR.GREEN, '再開する');
    this._resumeButton.setHeight(60);
    this._resumeButton.setLeft(10);
    this._resumeButton.setRight(10);
    this._resumeButton.setBottom(10);
    this._onClickResume = this._onClickResume.bind(this);
    this._resumeButton.addEventListener('wClick', this._onClickResume);
    this.add(this._resumeButton);
  }

  /**
   * 再開ボタン押下ジのハンドラーです。
   */
  _onClickResume() {
    this.close();
  }

}
