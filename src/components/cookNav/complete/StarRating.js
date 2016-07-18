import TiView from '../../../tiWrapp/TiView';
import DesignParam from '../../../enum/DesignParam';

/**
 * 5段階評価
 */
export default class StarRating extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setHeight(89);
    this.setBorderRadius(5);
    this.setViewShadowOffset({x: 0, y: 2});
    this.setViewShadowRadius(0);
    this.setViewShadowColor('rgba(0, 0, 0, 0.4)');
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
  }

}
