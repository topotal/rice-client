import TiView from '../../tiWrapp/TiView';
import TiLabel from '../../tiWrapp/TiLabel';
import * as DesignParam from '../../enum/DesignParam';

/**
 * カラフルな丸角ボタンクラスです。
 */
export default class ColorButton extends TiView {

  /**
   * タッチ可能かどうかの真偽値
   */
  get touchEnabled() {
    return this._touchEnabled;
  }

  /**
   * 自動で押し込むかどうかの真偽値
   */
  get autoPush() {
    return this._autoPush;
  }
  set autoPush(bool) {
    this._autoPush = bool;
  }

  /**
   * 自動で引くかどうかの真偽値
   */
  get autoPull() {
    return this._autoPull;
  }
  set autoPull(bool) {
    this._autoPull = bool;
  }

  set touchEnabled(bool) {
    this._touchEnabled = bool;
    if(this._touchEnabled) {
      this.setOpacity(1);
    } else {
      this.setOpacity(0.3);
    }
  }

  /**
   * コンストラクター
   * @constructor
   * @param color
   * @param text
   * @param prop
   */
  constructor(color, text, prop) {
    super(prop);

    this._color = color;
    this._text = text;
    this._touchEnabled = true;
    this._autoPush = true;
    this._autoPull = true;

    // ラッパー
    this._wrapper = this._createWrapper();
    this.add(this._wrapper);

    // 初期状態として引いておく
    this.pull();

    // タップを監視
    this.addEventListener('wTouchstart', (event) => this._onTouchStart(event));
    this.addEventListener('wTouchend', (event) => this._onTouchEnd(event));
  }

  /**
   * wrapperを生成します。
   * @return TiView
   */
  _createWrapper() {
    let view = new TiView({
      top: 0,
      left: 0,
      right: 0,
      borderRadius: 5,
      backgroundColor: this._color,
      viewShadowOffset: {x: 0, y: 2},
      viewShadowRadius: 0
    });

    this._wrapperShadow = new TiView({
      width: Ti.UI.FILL,
      height: Ti.UI.FILL,
      borderRadius: 3,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      visible: false
    });
    view.add(this._wrapperShadow);

    if(this._text) {
      // テキスト
      let text = new TiLabel({
        text: this._text,
        font: {
          fontSize: 17,
          fontWeight: 'bold'
        },
        color: DesignParam.COLOR.WHITE
      });
      view.add(text);
    }

    return view;
  }

  /**
   * 押し込む
   */
  push() {
    this._wrapper.setTop(2);
    this._wrapper.setBottom(0);
    this._wrapper.setViewShadowColor('rgba(0, 0, 0, 0)');
    this._wrapperShadow.setVisible(true);
  }

  /**
   * 引く
   */
  pull() {
    this._wrapper.setTop(0);
    this._wrapper.setBottom(2);
    this._wrapper.setViewShadowColor('rgba(0, 0, 0, 0.4)');
    this._wrapperShadow.setVisible(false);
  }

  /**
   * タップ開始時のハンドラーです。
   */
  _onTouchStart() {
    if(this._autoPush) {
      this.push();
    }
  }

  /**
   * タップ終了時のハンドラーです。
   */
  _onTouchEnd() {
    if(this._autoPull) {
      this.pull();
    }
  }
}
