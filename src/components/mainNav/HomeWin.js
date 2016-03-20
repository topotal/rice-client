import TiWindow from '../../tiWrapp/TiWindow';
import TiView from '../../tiWrapp/TiView';
import * as DesignParam from '../../enum/DesignPram';
import RecordTable from './record/RecordTable';

/**
 * ホーム画面のウィンドウクラス
 */
export default class HomeWin extends TiWindow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();

    // ラッパー
    let wrapper = new this._createWrapper();
    this.add(wrapper);

    // 炊飯記録一覧
    this._record = this._createRecord();
    this.add(this._record);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setTitleImage('assets/images/nav_title.png');
    this.setBarColor(DesignParam.COLOR.GREEN);
    this.setHideShadow(true);
    this.setShadowImage('assets/images/transparent.png');
    this.setBackgroundColor(DesignParam.COLOR.GREEN);
    this.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
  }

  /**
   * ラッパーViewを生成します。
   */
  _createWrapper() {
    let view = new TiView({
      width: Ti.UI.FILL,
      height: Ti.UI.FILL
    });
    return view;
  }

  /**
   * 炊飯記録一覧を生成します。
   */
  _createRecord() {
    let table = new RecordTable();
    return table;
  }

}
