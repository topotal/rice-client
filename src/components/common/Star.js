import TiImageView from '../../tiWrapp/TiImageView';
import * as DesignParam from '../../enum/DesignParam';

/**
 * ひとつ分の星のクラスです。
 */
export default class Star extends TiImageView {

  /**
   * コンストラクター
   * @constructor
   * @param value
   */
  constructor(value) {
    super();
    // 見栄えの処理
    this._initDecoration();
    // 初期値をセット
    this.setValue(value);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(13);
    this.setHeight(15);
  }

  /**
   * 値をセットします。
   * @param value
   */
  setValue(value) {
    if(value) {
      this.on();
    } else {
      this.off();
    }
  }

  /**
   * OnOffをスイッチします。
   */
  switchValue() {
    this.setValue(!this._value);
  }

  /**
   * Onにします。
   */
  on() {
    this._value = true;
    this.setImage(DesignParam.IMAGE.STAR_ON);
  }

  /**
   * Offにします。
   */
  off() {
    this._value = false;
    this.setImage(DesignParam.IMAGE.STAR_OFF);
  }

  /**
   * valueを取得します。
   * @return boolean
   */
  getValue() {
    return this._value;
  }

}
