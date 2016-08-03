import * as DesignParam from '../../../enum/DesignParam';
import BaseWindow from '../../common/BaseWindow';
import CompleteWin from './../complete/CompleteWin';
import CookMainTimer from './CookMainTimer';
import TimelineTable from '../../common/TimelineTable';
import CookModeButtons from './CookModeButtons';
import TiAlertDialog from '../../../tiWrapp/TiAlertDialog';
import NavWinModel from '../../../models/NavWinModel';
import TiImageView from '../../../tiWrapp/TiImageView';

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
    this._timelineTable = new TimelineTable();
    this._timelineTable.setTop(10);
    this._timelineTable.setLeft(10);
    this._timelineTable.setRight(10);
    this._timelineTable.setBottom(CookMainTimer.HEIGHT + CookModeButtons.HEIGHT + 10);
    this.add(this._timelineTable);

    // メインタイマー
    this._mainTimer = new CookMainTimer();
    this._mainTimer.setBottom(CookModeButtons.HEIGHT);
    this._onClickComp = this._onClickComp.bind(this);
    this._mainTimer.addEventListener('clickComp', this._onClickComp);
    this.add(this._mainTimer);

    // 炊飯モード切り替えボタン群
    this._modeButtons = new CookModeButtons();
    this._modeButtons.setBottom(0);
    this._modeButtons.addEventListener('change', () => this._onChangeMode());
    this.add(this._modeButtons);

    // 中止ボタン
    this._cancelButton = new TiImageView({
      image: DesignParam.IMAGE.CLOSE
    });
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
    this.setTitle('炊飯');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBackgroundColor(DesignParam.COLOR.ORANGE);
  }

  /**
   * 完了画面を開きます。
   */
  _openCompleteWin() {
    let cookNavWin = NavWinModel.getInstance().getNavWin('cook');
    cookNavWin.openWindow(new CompleteWin());
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
    this._timelineTable.pushRow(mode);
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
      let cookNavWin = NavWinModel.getInstance().getNavWin('cook');
      cookNavWin.close();
    }
  }

  /**
   * 完成ボタン押下時のハンドラーです。
   */
  _onClickComp() {
    this._openCompleteWin();
  }
}
