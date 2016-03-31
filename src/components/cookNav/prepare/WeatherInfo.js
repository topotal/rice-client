import * as DesignParam from '../../../enum/DesignPram';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';

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

    // 温度表示
    let tempreture = this._createTemperature();
    tempreture.setLeft(30);
    this.add(tempreture);
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
      width: 121,
      height: 79
    });
    return view;
  }

}
