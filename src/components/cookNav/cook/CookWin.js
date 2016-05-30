import {_} from 'libs/lodash';
import * as DesignParam from '../../../enum/DesignParam';
import BaseWindow from '../../common/BaseWindow';
import CompleteWin from './../CompleteWin';
import CookMainTimer from './CookMainTimer';
import CookTimerTable from './CookTimerTable';
import CookMode from '../../../models/vo/CookMode';
import CookModeButtons from './CookModeButtons';

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

    // 履歴テーブル
    this._timerTable = new CookTimerTable();
    this._timerTable.setBottom(CookMainTimer.HEIGHT + 220);
    this.add(this._timerTable);

    // メインタイマー
    this._mainTimer = new CookMainTimer();
    this._mainTimer.setBottom(220);
    this.add(this._mainTimer);

    // 炊飯モード切り替えボタン群
    this._modeButtons = new CookModeButtons();
    this._modeButtons.setBottom(0);
    this._modeButtons.addEventListener('change', () => this._onChangeMode());
    this.add(this._modeButtons);

    // タイマーをスタートさせる
    this._mainTimer.start();
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
  * 完了画面を開きます。
  */
  _openCompleteWin() {
   let completeWin = new CompleteWin();
   app.getNavWin('cook').openWindow(completeWin);
  }

  /**
   * モード切り替え時のハンドラーです。
   */
  _onChangeMode() {
    let mode = this._modeButtons.currentMode;
    if(_.isEqual(mode, CookMode.COMP)) {
      this._openCompleteWin();
      return;
    }
    this._timerTable.pushRow(mode);
  }

}
