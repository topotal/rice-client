import TiView from '../../../tiWrapp/TiView';
import {_} from 'lodash';
import * as DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';
import CookWin from '../cook/CookWin';
import WeatherInfo from './WeatherInfo';
import SelectInputView from '../../form/SelectInputView';
import ApiPath from '../../../enum/ApiPath';
import NavWinModel from '../../../models/NavWinModel';
import CookModel from '../../../models/CookModel';
import BaseWindow from '../../common/BaseWindow';
import MessageRow from '../../common/MessageRow';

/**
 * 炊飯準備ウィンドウクラスです。
 */
export default class PrepareWin extends BaseWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // モデル
    this._cookModel = CookModel.getInstance();

    // 見栄え処理
    this._initDecoration();

    // 気温湿度表示
    let weatherInfo = new WeatherInfo();
    weatherInfo.setTop(0);
    this.add(weatherInfo);

    // 吹き出し
    let iconPath = DesignParam.IMAGE.RICE_ICON;
    let messageRow = new MessageRow(iconPath, 'あああ\nいいい');
    messageRow.setTop(102);
    messageRow.setLeft(10);
    messageRow.setRight(10);
    this.add(messageRow);

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
    startButton.setBottom(80);
    this.add(startButton);
    startButton.addEventListener('wclick', _.bind(this._onClickStart, this));

    // キャンセルボタン
    let cancelButton = this._createCancelButton();
    cancelButton.setLeft(10);
    cancelButton.setRight(10);
    cancelButton.setBottom(10);
    this.add(cancelButton);
    cancelButton.addEventListener('wclick', _.bind(this._onClickCancel, this));
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTitle('炊飯設定');
    this.setBarColor(DesignParam.COLOR.ORANGE);
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
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
   * キャンセルボタンを生成します。
   * @return ColorButton
   */
  _createCancelButton() {
    let button = new ColorButton(
      DesignParam.COLOR.GRAY,
      'キャンセル',
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
    let brand = new SelectInputView({
      name: 'brand',
      title: '銘柄',
      apiPath: ApiPath.BRANDS,
      iconPath: DesignParam.IMAGE.BRAND,
      placeholderText: '銘柄を選択してください'
    });
    brand.setTop(0);
    view.add(brand);

    // 合数選択
    let quantity = new SelectInputView({
      name: 'quantity',
      title: '合数',
      apiPath: ApiPath.QUANTITY,
      iconPath: DesignParam.IMAGE.QUANTITY,
      placeholderText: '合数を選択してください'
    });
    quantity.setTop(60);
    view.add(quantity);

    // 水量選択
    let water = new SelectInputView({
      name: 'water',
      title: '水量',
      apiPath: ApiPath.WATER,
      iconPath: DesignParam.IMAGE.WATER,
      placeholderText: '水量を選択してください'
    });
    water.setTop(120);
    view.add(water);

    return view;
  }

  /**
   * スタートボタン押下時のハンドラーです。
   */
  _onClickStart() {
    let cookNavWin = NavWinModel.getInstance().getNavWin('cook');
    cookNavWin.openWindow(new CookWin());
  }

  /**
   * キャンセルボタン押下時のハンドラーです。
   */
  _onClickCancel() {
    let cookNavWin = NavWinModel.getInstance().getNavWin('cook');
    cookNavWin.close();
  }
}
