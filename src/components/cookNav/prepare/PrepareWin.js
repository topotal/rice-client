import TiWindow from '../../../tiWrapp/TiWindow';
import TiView from '../../../tiWrapp/TiView';
import {_} from 'libs/lodash';
import * as DesignParam from '../../../enum/DesignPram';
import ColorButton from '../../common/ColorButton';
import CookWin from '../CookWin';
import WeatherInfo from './WeatherInfo';
import SelectInputView from '../../form/SelectInputView';

/**
 * 炊飯準備ウィンドウクラスです。
 */
export default class PrepareWin extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // 気温湿度表示
    let weatherInfo = new WeatherInfo();
    weatherInfo.setTop(0);
    this.add(weatherInfo);

    // フォームグループ
    let formGroup = this._createFormGroup();
    formGroup.setTop(183);
    formGroup.setLeft(10);
    formGroup.setRight(10);
    this.add(formGroup);

    // 炊飯スタートボタン
    let startButton = this._createStartButton();
    startButton.setLeft(10);
    startButton.setRight(10);
    startButton.setBottom(10);
    this.add(startButton);
    startButton.addEventListener('click', _.bind(this._onClickStart, this));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setTitleImage('assets/images/cook_title.png');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBarImage('assets/images/transparent.png');
    this.setShadowImage('assets/images/navbar_shadow.png');
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

  /**
   * スタートボタンを生成します。
   * @return ColorButton
   */
  _createStartButton() {
    let button = new ColorButton(
      DesignParam.COLOR.GREEN,
      '炊飯をはじめる',
      {
        height: 60
      }
    );
    return button;
  }

  /**
   * フォームグループを生成します。
   * @return TiView
   */
  _createFormGroup() {
    let view = new TiView();

    // 銘柄選択
    let brand = new SelectInputView();
    brand.setTop(0);
    view.add(brand);

    // 合数選択
    let quantity = new SelectInputView();
    quantity.setTop(60);
    view.add(quantity);

    // 水量選択
    let water = new SelectInputView();
    water.setTop(120);
    view.add(water);

    return view;
  }

  /**
   * スタートボタン押下時のハンドラーです。
   */
  _onClickStart() {
    let cookWin = new CookWin();
    app.cookNav.openWindow(cookWin);
  }

}
