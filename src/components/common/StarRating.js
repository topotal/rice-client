import TiView from '../../tiWrapp/TiView';
import Star from './Star';

/**
 * ５段階評価クラスです。
 */
export default class StarRating extends TiView {

  /**
   * コンストラクター
   */
  constructor(value, size) {
    super();

    // 評価
    this._value = 0;
    // 5つの星の格納配列
    this._stars = [];
    // 星のサイズ
    this._size = size || 12;
    // 星の右側マージン
    this._marginRight = this._size * 0.25;

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
    this.setWidth(this._size * 5 + this._marginRight * 4);
    this.setHeight(this._size);
  }

  /**
   * 星のリストを生成します。
   */
  _createStarList() {
    this._onClickStar = this._onClickStar.bind(this);
    for(let i=0; i<5; i++) {
      let star = new Star(false, this._size);
      star.addEventListener('wclick', this._onClickStar);
      star.setLeft(i * (this._size + this._marginRight));
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

  /**
   * 値を取得します。
   * @return number
   */
  getValue() {
    return this._value;
  }

  /**
   * 星をクリックした際のハンドラーです。
   */
  _onClickStar(event) {
    let targetStar = event.target;
    let length = this._stars.length;
    let value = 0;
    for(let i = 0; i < length; i++) {
      if(targetStar == this._stars[i]) {
        value = i + 1;
        break;
      }
    }

    // 値をセット
    this.setValue(value);
  }

}
