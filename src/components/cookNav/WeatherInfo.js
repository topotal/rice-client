import * as DesignParam from '../../enum/DesignPram';
import TiView from '../../tiWrapp/TiView';

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

    // 温度表示
    var tempreture = this._createTemperature();
    tempreture.setLeft(30);
    this.add(tempreture);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(120);
    this.setBackgroundColor(DesignParam.COLOR.ORANGE);
  }

  /**
   * 気温表示を生成します。
   * @return TiView
   */
  _createTemperature() {
    let view = new TiView({
      width: 121,
      height: 79,
      backgroundColor: '#FFFFFF'
    });
    return view;
  }

}
