import {_} from 'libs/lodash';
import TiWindow from '../../tiWrapp/TiWindow';
import DesignParam from '../../enum/DesignPram';

/**
 * Windowのベースクラス
 */
export default class BaseWindow extends TiWindow {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(param) {
    super(_.extend({
      navTintColor: DesignParam.WHITE,
      translucent: false,
      barImage: 'assets/images/traslusent.png',
      shadowImage: 'assets/images/navbar_shadow.png',
      statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT
    }, param || {}));
  }

}
