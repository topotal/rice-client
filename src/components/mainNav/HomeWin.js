import TiWindow from '../../tiWrapp/TiWindow';
import * as DesignParam from '../../enum/DesignPram';

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
    this.setTitleImage('assets/images/nav_title.png');
    this.setBarColor(DesignParam.COLOR.GREEN);
    this.setBackgroundColor(DesignParam.COLOR.WHITE);
  }

}
