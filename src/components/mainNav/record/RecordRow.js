import * as DesignParam from '../../../enum/DesignParam';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import StarRating from '../../common/StarRating';
import moment from 'moment';
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
    date.setTouchEnabled(false);
    this.wrapper.add(date);

    // 5段階評価
    let starRating = new StarRating(this.getRowData().getRate());
    starRating.setTop(12);
    starRating.setLeft(70);
    starRating.setTouchEnabled(false);
    this.wrapper.add(starRating);

    // ブランド
    let brand = this._createBrand();
    brand.setLeft(70);
    brand.setBottom(10);
    brand.setTouchEnabled(false);
    this.wrapper.add(brand);

    this.wrapper.setTouchEnabled(false);
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
      text: moment(this.getRowData().getCreatedAt()).format('YYYY/MM'),
      font: {
        fontSize: 9
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(yearAndMonth);

    // 日
    let day = new TiLabel({
      bottom: 6,
      text: moment(this.getRowData().getCreatedAt()).format('DD'),
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

    let name = new TiLabel({
      bottom: 0,
      width: maxWidth,
      height: 14,
      text: this.getRowData().getBrand().getTitle(),
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
