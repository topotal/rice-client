import TiTableViewRow from '../../../tiWrapp/TiTableViewRow';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import DesignParam from '../../../enum/DesignParam';
import ModeMark from '../../common/ModeMark';

/**
 * 炊飯記録のRowクラスです。
 */
export default class CookTimerRow extends TiTableViewRow {

  /**
   * コンストラクター
   * @constructor
   * @param mode
   */
  constructor(mode) {
    super();

    this._mode = mode;

    // 見栄え処理
    this._initDecoration();

    // モードマーク
    this._modeMark = new ModeMark(this._mode);
    this._modeMark.setLeft(36);
    this.add(this._modeMark);

    // 秒数
    this._time = this._createTime();
    this._time.setRight(20);
    this.add(this._time);

    // カレントマーク
    this._currentMark = this._createCurrentMark();
    this._currentMark.setRight(115);
    this.add(this._currentMark);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(60);
    this.setSelectionStyle(Ti.UI.iPhone.TableViewCellSelectionStyle.NONE);
  }

  /**
   * 秒数
   * @return TiLabel
   */
  _createTime() {
    return new TiLabel({
      text: '3分 6秒 経過',
      color: DesignParam.COLOR.BLACK,
      font: {
        fontSize: 14
      }
    });
  }

  /**
   * カレントマーク
   * @return TiView
   */
  _createCurrentMark() {
    return new TiView({
      width: 10,
      height: 10,
      backgroundColor: DesignParam.COLOR.GREEN,
      borderRadius: 5
    });
  }
}
