import {_} from 'libs/lodash';
import * as DesignParam from '../../../enum/DesignParam';
import BaseWindow from '../../common/BaseWindow';
import CompleteWin from './../complete/CompleteWin';
import CookMainTimer from './CookMainTimer';
import CookTimerTable from './CookTimerTable';
import CookMode from '../../../models/vo/CookMode';
import CookModeButtons from './CookModeButtons';
import TiButton from '../../../tiWrapp/TiButton';
import TiAlertDialog from '../../../tiWrapp/TiAlertDialog';

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

    // 中止ボタン
    this._cancelButton = new TiButton({title: '中止'});
    this.setLeftNavButton(this._cancelButton);
    this._onClickCancel = this._onClickCancel.bind(this);
    this._cancelButton.addEventListener('wclick', this._onClickCancel);

    // 中止ダイアログ
    this._cancelDialog = new TiAlertDialog({
      message: '炊飯の記録を中止しても\nよろしいですか？',
      cancel: 0,
      buttonNames: ['キャンセル', 'OK'],
      title: 'Best Rice'
    });
    this._onClickDialog = this._onClickDialog.bind(this);
    this._cancelDialog.addEventListener('wclick', this._onClickDialog);
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

    // メインタイマーが動いていなければスタートさせる
    if(!this._mainTimer.isActive) {
      this._mainTimer.start();
    }

    let mode = this._modeButtons.currentMode;
    if(_.isEqual(mode, CookMode.COMP)) {
      this._openCompleteWin();
      return;
    }
    this._timerTable.pushRow(mode);
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onClickCancel() {
    this._cancelDialog.show();
  }

  /**
   * キャンセルダイアログのボタンクリック時のハンドラーです。
   */
  _onClickDialog(event) {
    // OKボタンであれば炊飯画面を閉じる
    if(event.index == 1) {
      app.getNavWin('cook').close();
    }
  }

}
