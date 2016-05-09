import {_} from 'libs/lodash';
import TiView from '../../../tiWrapp/TiView';
import DesignParam from '../../../enum/DesignParam';
import DeviceInfo from '../../../enum/DeviceInfo';
import CookMode from '../../../models/vo/CookMode';
import ColorButton from '../../common/ColorButton';

/**
 * 炊飯モード切り替えボタン群クラスです。
 */
export default class CookModeButtons extends TiView {

  /** 高さ */
  static get HEIGHT() {
    return 220;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // モードボタンを用意
    this._setButtons();

    // 切り替えボタン
    this._changeButton = new ColorButton(DesignParam.COLOR.GRAY, '切り替える');
    this._changeButton.setHeight(60);
    this._changeButton.setLeft(10);
    this._changeButton.setRight(10);
    this._changeButton.setBottom(10);
    this.add(this._changeButton);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(DeviceInfo.WIDTH);
    this.setHeight(CookModeButtons.HEIGHT);
  }

  /**
   * モードボタンをセットします。
   */
  _setButtons() {
    _.each(CookMode.MODE_LIST, (mode, index) => {
      let margin = 10;
      let buttonWidth = (DeviceInfo.WIDTH - (margin * 4)) / 3;
      let buttonHeight = 60;
      let button = this._createButton(mode);
      button.setWidth(buttonWidth);
      button.setHeight(buttonHeight);
      button.setLeft((index % 3) * (buttonWidth + margin) + margin);
      button.setTop((Math.floor(index / 3) * (buttonHeight + margin)) + margin);
      this.add(button);
    });
  }

  /**
   * モードボタンを生成します。
   * @param mode
   * @return ColorButton
   */
  _createButton(mode) {
    return new ColorButton(mode.color, mode.buttonText);
  }
}
