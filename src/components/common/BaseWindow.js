import {_} from 'lodash';
import TiWindow from '../../tiWrapp/TiWindow';
import DesignParam from '../../enum/DesignParam';

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
      navTintColor: DesignParam.COLOR.WHITE,
      translucent: false,
      barImage: 'assets/images/transparent.png',
      shadowImage: 'assets/images/navbar_shadow.png',
      statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
      titleAttributes: {
        color: '#FFFFFF'
      }
    }, param || {}));
  }

}
