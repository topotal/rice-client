import BaseWindow from '../../components/common/BaseWindow';
import * as DesignParam from '../../enum/DesignParam';

/**
 * 詳細画面のウィンドウクラス
 */
export default class DetailWin extends BaseWindow {

  /**
   * コンストラクター
   */
  constructor(prop) {
    super(prop);

    // 見栄え処理
    this._initDecoration();
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setTranslucent(false);
    this.setBarColor(DesignParam.COLOR.GREEN);
    this.setBackgroundColor(DesignParam.COLOR.LIGHT_YELLOW);
  }

}

