import TiView from '../../tiWrapp/TiView';
import Star from './Star';

/**
 * ５段階評価クラスです。
 */
export default class StarRating extends TiView {

  /**
   * コンストラクター
   */
  constructor(value) {
    super();

    // 評価
    this._value = 0;
    // 5つの星の格納配列
    this._stars = [];
    // 星の右側マージン
    this._marginRight = 3;

    // 見栄え処理
    this._initDecoration();

    // 星のリストを生成
    this._createStarList();

    // 初期値をセット
    this.setValue(value);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(77);
    this.setHeight(15);
  }

  /**
   * 星のリストを生成します。
   */
  _createStarList() {
    for(let i=0; i<5; i++) {
      let star = new Star();
      star.setLeft(i * (star.getWidth() + this._marginRight));
      this.add(star);
      this._stars.push(star);
    }
  }

  /**
   * 値をセットします。
   * @param value
   */
  setValue(value) {
    this._value = value;
    for(let index=0; index<5; index++) {
      if(index < this._value) {
        this._stars[index].on();
      } else {
        this._stars[index].off();
      }
    }
  }

}
