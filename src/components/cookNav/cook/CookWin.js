import * as DesignParam from '../../../enum/DesignPram';
import BaseWindow from '../../common/BaseWindow';
import ColorButton from '../../common/ColorButton';
import CompleteWin from './../CompleteWin';
import Timeline from './Timeline';

/**
 * 炊飯画面クラスです。
 */
export default class CookWin extends BaseWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // タイムライン
    this._timeline = new Timeline();
    this._timeline.setTop(0);
    this.add(this._timeline);

    // 切り替えボタン
    let changeButton = this._createChangeButton();
    changeButton.setLeft(10);
    changeButton.setRight(10);
    changeButton.setBottom(10);
    this.add(changeButton);
    changeButton.addEventListener('click', () => this._openCompleteWin());
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTitleImage('assets/images/cook_title.png');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
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

  /**
   * 完了画面を開きます。
   */
  _openCompleteWin() {
    let completeWin = new CompleteWin();
    app.getNavWin('cook').openWindow(completeWin);
  }

}
