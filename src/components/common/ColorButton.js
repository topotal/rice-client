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

  set touchEnabled(bool) {
    this._touchEnabled = bool;
    if(this._touchEnabled) {
      this.setOpacity(1);
    } else {
      this.setOpacity(0.5);
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

    // ラッパー
    this._wrapper = this._createWrapper();
    this.add(this._wrapper);

    // 初期状態として引いておく
    this.pull();
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
      //bottom: 2,
      borderRadius: 3,
      backgroundColor: this._color,
      //viewShadowColor: 'rgba(0, 0, 0, 0.4)',
      //viewShadowOffset: {
      //  x: 0, y: 2
      //},
      viewShadowRadius: 0
    });

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

    return view;
  }

  /**
   * 押し込む
   */
  push() {
    this._wrapper.setTop(2);
    this._wrapper.setBottom(0);
    this._wrapper.setViewShadowColor('rgba(0, 0, 0, 0)');
    this._wrapper.setViewShadowOffset({x: 0, y: 2});
    this._wrapper.setViewShadowRadius(0);
  }

  /**
   * 引く
   */
  pull() {
    this._wrapper.setTop(0);
    this._wrapper.setBottom(2);
    this._wrapper.setViewShadowColor('rgba(0, 0, 0, 0.4)');
    this._wrapper.setViewShadowOffset({x: 0, y: 2});
    this._wrapper.setViewShadowRadius(0);
  }

}
