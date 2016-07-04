import TiTableViewRow from '../../../tiWrapp/TiTableViewRow';
import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import DesignParam from '../../../enum/DesignParam';
import ModeMark from '../../common/ModeMark';
import moment from 'moment';

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
    this._timer = null;
    this._secounds = 0;

    // 見栄え処理
    this._initDecoration();

    // 前との繋ぎ棒
    this._beforeBar = this._createBar();
    this._beforeBar.setTop(0);
    this._beforeBar.setLeft(54);
    this._beforeBar.setVisible(false);
    this.add(this._beforeBar);

    // 次との繋ぎ棒
    this._nextBar = this._createBar();
    this._nextBar.setBottom(0);
    this._nextBar.setLeft(54);
    this._nextBar.setVisible(false);
    this.add(this._nextBar);

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
    this._currentMark.setRight(184);
    this._currentMark.setVisible(false);
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
      text: '00時間 00分 00秒 経過',
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
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

  /**
   * 繋ぎ棒を生成します。
   * @return TiView
   */
  _createBar() {
    return new TiView({
      width: 4,
      height: 30,
      backgroundColor: DesignParam.COLOR.GRAY
    });
  }

  /**
   * タイマーをスタートさせます。
   */
  start() {
    this._currentMark.setVisible(true);
    this._timer = setInterval(() => this._increment(), 1000);
  }

  /**
   * タイマーをストップします。
   */
  stop() {
    this._currentMark.setVisible(false);
    clearInterval(this._timer);
  }

  /**
   * 前のRowと繋ぎます。
   */
  jointBeforeRow() {
    this._beforeBar.setVisible(true);
  }

  /**
   * 次のRowと繋ぎます。
   */
  jointNextRow() {
    this._nextBar.setVisible(true);
  }

  /**
   * タイマーのカウントを進めます。
   */
  _increment() {
    this._secounds+=1;
    let zeroMoment = moment('00:00:00', 'HH:mm:ss');
    let nowMoment = zeroMoment.seconds(this._secounds);
    this._time.setText(nowMoment.format('HH時間 mm分 ss秒 経過'));
  }
}
