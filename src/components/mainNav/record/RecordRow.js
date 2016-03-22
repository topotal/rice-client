import TiTableViewRow from '../../../tiWrapp/TiTableViewRow';
import * as DesignParam from '../../../enum/DesignPram';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import StarRating from '../../common/StarRating';

/**
 * 炊飯記録のRowクラスです。
 */
export default class RecordRow extends TiTableViewRow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // ラッパー
    let wrapper = this._createWrapper();
    wrapper.setLeft(10);
    wrapper.setRight(10);
    this.add(wrapper);

    // 日付
    let date = this._createDate();
    date.setLeft(10);
    wrapper.add(date);

    // 5段階評価
    let starRating = new StarRating();
    starRating.setTop(12);
    starRating.setLeft(70);
    wrapper.add(starRating);
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
      text: '2016/03',
      font: {
        fontSize: 9
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(yearAndMonth);

    // 日
    let day = new TiLabel({
      bottom: 6,
      text: '25',
      font: {
        fontSize: 21,
        fontWeight: 'bold'
      },
      color: DesignParam.COLOR.WHITE
    });
    view.add(day);

    return view;
  }

}
