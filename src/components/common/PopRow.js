import TiTableViewRow from '../../tiWrapp/TiTableViewRow';
import TiView from '../../tiWrapp/TiView';
import DesignParam from '../../enum/DesignParam';

/**
 * ポップ調のRowクラス
 */
export default class PopRow extends TiTableViewRow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(data) {

    super({value: data});

    // データ
    this._data = data;

    // 見栄え処理
    this._initDecoration();

    // ラッパー
    this.wrapper = this._createWrapper();
    this.wrapper.setTop(5);
    this.wrapper.setLeft(10);
    this.wrapper.setRight(10);
    this.wrapper.setBottom(5);
    this.add(this.wrapper);

    // 中の要素を生成
    this._initContent();
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setHeight(80);
    this.setSelectionStyle(Ti.UI.iPhone.TableViewCellSelectionStyle.NONE);
    this.setBackgroundColor('transparent');
  }

  /**
   * ラッパーを生成します。
   */
  _createWrapper() {
    let view = new TiView({
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
   * rowのデータを取得します。
   * @return data
   */
  getRowData() {
    return this._data;
  }

}
