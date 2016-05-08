import * as DesignParam from '../../../enum/DesignParam';
import DeviceInfo from '../../../enum/DeviceInfo';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import TiImageView from '../../../tiWrapp/TiImageView';

/**
 * 気温湿度の表示クラス
 */
export default class WeatherInfo extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // 場所表示
    let locale = this._createLocale();
    locale.setTop(10);
    this.add(locale);

    // 温度湿度の位置
    let posX = DeviceInfo.getWidth() / 2 + 10;

    // 温度表示
    let tempreture = this._createTemperature();
    tempreture.setTop(28);
    tempreture.setRight(posX);
    this.add(tempreture);

    // 湿度表示
    let humidity = this._createHumidity();
    humidity.setTop(28);
    humidity.setLeft(posX);
    this.add(humidity);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(80);
    this.setBackgroundColor(DesignParam.COLOR.BLUE);
  }

  /**
   * 場所のテキストを生成します。
   * @return TiLabel
   */
  _createLocale() {
    let label = new TiLabel({
      color: DesignParam.COLOR.WHITE,
      text: 'Tokyo, JP',
      font: {
        fontSize: 12,
        fontWeight: 'bold'
      }
    });
    return label;
  }

  /**
   * 気温表示を生成します。
   * @return TiView
   */
  _createTemperature() {
    let view = new TiView({
      width: 84,
      height: 46
    });

    // アイコン
    let icon = new TiImageView({
      left: 0,
      width: 25,
      height: 30,
      image: DesignParam.IMAGE.TEMPERATURE
    });
    view.add(icon);

    // 値
    let value = new TiLabel({
      left: 23,
      color: DesignParam.COLOR.WHITE,
      text: '25',
      font: {
        fontSize: 36,
        fontWeight: 'bold'
      }
    });
    view.add(value);

    // 単位
    let unit = new TiLabel({
      right: 0,
      bottom: 8,
      color: DesignParam.COLOR.WHITE,
      text: '℃',
      font: {
        fontSize: 13,
        fontWeight: 'bold'
      }
    });
    view.add(unit);

    return view;
  }

  /**
   * 湿度表示を生成します。
   * @return TiView
   */
  _createHumidity() {
    let view = new TiView({
      width: 84,
      height: 46
    });

    // アイコン
    let icon = new TiImageView({
      left: 0,
      width: 25,
      height: 30,
      image: DesignParam.IMAGE.HUMIDITY
    });
    view.add(icon);

    // 値
    let value = new TiLabel({
      left: 23,
      color: DesignParam.COLOR.WHITE,
      text: '32',
      font: {
        fontSize: 36,
        fontWeight: 'bold'
      }
    });
    view.add(value);

    // 単位
    let unit = new TiLabel({
      right: 0,
      bottom: 8,
      color: DesignParam.COLOR.WHITE,
      text: '％',
      font: {
        fontSize: 13,
        fontWeight: 'bold'
      }
    });
    view.add(unit);

    return view;
  }

}
