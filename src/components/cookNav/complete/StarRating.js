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
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
  }

}
