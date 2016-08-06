import TiWindow from '../../../tiWrapp/TiWindow';
import DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';

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

    this.setBackgroundColor('transparent');
    this.setZIndex(10000);

    this._resumeButton = new ColorButton(DesignParam.COLOR.RED, '再開する');
    this._resumeButton.setWidth(200);
    this._resumeButton.setHeight(60);
    this._onClickResume = this._onClickResume.bind(this);
    this._resumeButton.addEventListener('wclick', this._onClickResume);
    this.add(this._resumeButton);
  }

  /**
   * 再開ボタン押下ジのハンドラーです。
   */
  _onClickResume() {
    this.close();
  }

}
