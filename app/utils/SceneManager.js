import EventEmitter from 'eventemitter3';
import {_} from 'lodash';

/**
 * シーン管理クラス
 */
export default class SceneManager extends EventEmitter {

  /** インスタンス */
  static get instance() {
    return SceneManager._instance || new SceneManager();
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    SceneManager._instance = this;
  }

  /**
   * 指定したシーンへ遷移させます。
   */
  to(scene, props = {}) {
    // デフォルトプロパティ
    let defaultProps = {
      backButton: true
    };

    this.emit('forward', {
      route: {
        component: scene,
        passProps: _.extend(defaultProps, props)
      }
    });
  }

  /**
   * シーンを一つ戻します。
   */
  back() {
    this.emit('back');
  }
}
