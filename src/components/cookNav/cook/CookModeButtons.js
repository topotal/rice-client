import {_} from 'lodash';
import TiView from '../../../tiWrapp/TiView';
import DesignParam from '../../../enum/DesignParam';
import DeviceInfo from '../../../enum/DeviceInfo';
import CookMode from '../../../models/vo/CookMode';
import ColorButton from '../../common/ColorButton';
import CookModeButton from './CookModeButton';

/**
 * 炊飯モード切り替えボタン群クラスです。
 */
export default class CookModeButtons extends TiView {

  /** 高さ */
  static get HEIGHT() {
    return 150;
  }

  /**
   * カレントモード
   * @return CookMode
   */
  get currentMode() {
    return this._currentMode;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._selectMode = null;
    this._currentMode = null;
    this._modeButtons = [];

    // 見栄え処理
    this._initDecoration();

    // モードボタンを用意
    this._setButtons();

    // 切り替えボタン
    this._changeButton = new ColorButton(DesignParam.COLOR.BLUE, '切り替える');
    this._changeButton.setHeight(60);
    this._changeButton.setLeft(10);
    this._changeButton.setRight(10);
    this._changeButton.setBottom(10);
    this._changeButton.setTouchEnabled(false);
    this._onClickChangeButton = this._onClickChangeButton.bind(this);
    this._changeButton.addEventListener('wClick', this._onClickChangeButton);
    this.add(this._changeButton);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(DeviceInfo.WIDTH);
    this.setHeight(CookModeButtons.HEIGHT);
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
  }

  /**
   * モードボタンをセットします。
   */
  _setButtons() {
    _.each(CookMode.FIRE_LEVEL, (mode, index) => {
      let margin = 10;
      let buttonWidth = (DeviceInfo.WIDTH - (margin * 4)) / 3;
      let buttonHeight = 60;
      let button = this._createButton(mode);
      button.setWidth(buttonWidth);
      button.setHeight(buttonHeight);
      button.setLeft((index % 3) * (buttonWidth + margin) + margin);
      button.setTop(margin);
      this.add(button);
      this._modeButtons.push(button);
    });
  }

  /**
   * モードボタンを生成します。
   * @param mode
   * @return ColorButton
   */
  _createButton(mode) {
    let button = new CookModeButton(mode);
    this._onClickModeButton = this._onClickModeButton.bind(this);
    button.addEventListener('wTouchstart', this._onClickModeButton);
    return button;
  }

  /**
   * モードボタン押下時のハンドラーです。
   * @param event
   */
  _onClickModeButton(event) {
    var target = event.target;

    // 選択済みのボタンであれば処理しない
    if(target.mode == this._selectMode) {
      return;
    }

    // 切り替えボタンをタップできるように
    this._changeButton.setTouchEnabled(true);

    // 選択モードを更新
    this._selectMode = target.mode;
    // 選択中のボタンを更新
    this._selectButton = target;

    _.each(this._modeButtons, (modeButton) => {
      if(target == modeButton) {
        modeButton.push();
      } else {
        modeButton.pull();
      }
    });
  }

  /**
   * 切り替えボタンクリック時のハンドラーです。
   */
  _onClickChangeButton() {
    // 同じモードだった場合は処理させない
    if(this._currentMode == this._selectMode) {
      return;
    }

    // 前に選択していたボタンがあればタップを解除
    if(this._currentButton) {
      this._currentButton.setTouchEnabled(true);
    }

    // カレントを更新
    this._currentMode = this._selectMode;
    // カレントボタンを更新
    this._currentButton = this._selectButton;
    // 切り替えボタンをタップできなくする
    this._changeButton.setTouchEnabled(false);
    // 選択したボタンを押せなくする
    this._currentButton.setTouchEnabled(false);
    this._currentButton.pull();
    // 変更イベントを発火
    this.fireEvent('change');
  }
}
