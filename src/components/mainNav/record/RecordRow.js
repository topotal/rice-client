import TiTableViewRow from '../../../tiWrapp/TiTableViewRow';
import * as DesignParam from '../../../enum/DesignPram';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import StarRating from '../../common/StarRating';
import moment from 'libs/moment';

/**
 * 炊飯記録のRowクラスです。
 */
export default class RecordRow extends TiTableViewRow {

  /**
   * コンストラクター
   * @constructor
   * @param data
   */
  constructor(data) {
    super();

    // データ
    this.data = data;

    // 見栄え処理
    this._initDecoration();

    // ラッパー
    let wrapper = this._createWrapper();
    wrapper.setLeft(10);
    wrapper.setRight(10);
    this.add(wrapper);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setHeight(80);
    this.setBackgroundColor('transparent');
  }

  /**
   * ラッパーを生成します。
   */
  _createWrapper() {
    let view = new TiView({
      height: 70,
      borderRadius: 3,
      backgroundColor: DesignParam.COLOR.LIGHT_YELLOW,
      viewShadowColor: 'rgba(0, 0, 0, 0.4)',
      viewShadowOffset: {
        x: 0, y: 2
      },
      viewShadowRadius: 0
    });

    // 日付
    let date = this._createDate();
    date.setLeft(10);
    view.add(date);

    // 5段階評価
    let starRating = new StarRating(this.data.rate);
    starRating.setTop(12);
    starRating.setLeft(70);
    view.add(starRating);

    // ブランド
    let brand = this._createBrand();
    brand.setLeft(70);
    brand.setBottom(10);
    view.add(brand);

    return view;
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
      text: moment(this.data.date).format('YYYY/MM'),
      font: {
        fontSize: 9
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(yearAndMonth);

    // 日
    let day = new TiLabel({
      bottom: 6,
      text: moment(this.data.date).format('DD'),
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

    let district = new TiLabel({
      top: 0,
      width: maxWidth,
      height: 9,
      text: this.data.brand.district,
      font: {
        fontSize: 9,
        fontWeight: 'bold'
      },
      color: DesignParam.COLOR.BLACK
    });
    view.add(district);

    let name = new TiLabel({
      bottom: 0,
      width: maxWidth,
      height: 14,
      text: this.data.brand.name,
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
