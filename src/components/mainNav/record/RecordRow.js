import * as DesignParam from '../../../enum/DesignPram';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import StarRating from '../../common/StarRating';
import moment from 'libs/moment';
import PopRow from '../../common/PopRow';

/**
 * 炊飯記録のRowクラスです。
 */
export default class RecordRow extends PopRow {

  /**
   * コンストラクター
   * @constructor
   * @param data
   */
  constructor(data) {
    super(data);
  }

  /**
   * 中の要素を生成します。
   */
  _initContent() {
    // 日付
    let date = this._createDate();
    date.setLeft(10);
    this.wrapper.add(date);

    // 5段階評価
    let starRating = new StarRating(this._data.rate);
    starRating.setTop(12);
    starRating.setLeft(70);
    this.wrapper.add(starRating);

    // ブランド
    let brand = this._createBrand();
    brand.setLeft(70);
    brand.setBottom(10);
    this.wrapper.add(brand);
  }

  /**
   * 日付部分を生成します。
   */
  _createDate() {
    let view = new TiView({
      width: 50,
      height: 50,
      borderRadius: 3,
      backgroundColor: DesignParam.COLOR.BLUE
    });

    // 年/月
    let yearAndMonth = new TiLabel({
      top: 7,
      text: moment(this._data.date).format('YYYY/MM'),
      font: {
        fontSize: 9
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(yearAndMonth);

    // 日
    let day = new TiLabel({
      bottom: 6,
      text: moment(this._data.date).format('DD'),
      font: {
        fontSize: 21,
        fontWeight: 'bold'
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(day);

    return view;
  }

  /**
   * 銘柄名を生成します。
   */
  _createBrand() {
    let maxWidth = 160;

    let view = new TiView({
      width: maxWidth,
      height: 30
    });

    console.info(this);
    let name = new TiLabel({
      bottom: 0,
      width: maxWidth,
      height: 14,
      text: 'aaa', //this._data.getBrand().getTitle,
      font: {
        fontSize: 14,
        fontWeight: 'bold'
      },
      color: DesignParam.COLOR.BLACK
    });
    view.add(name);

    return view;
  }

}
