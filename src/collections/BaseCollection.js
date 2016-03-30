import EventDispatcher from '../EventDispatcher';

/**
 * コレクションのベースクラスです。
 */
export default class BaseCollection extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();
    // コレクション
    this._collection = [];
  }

  /**
   * コレクションをセットします。
   * @param collection
   */
  setCollection(collection) {
    this._collection = collection;
    // コレクションの変更イベントを発火
    this.fireEvent('chage');
  }

  /**
   * コレクションを取得します。
   */
  getCollection() {
    return this._collection;
  }

  /**
   * モデルをコレクションに追加します。
   */
  pushModel(model) {
    this._collection.push(model);
    // コレクションの変更イベントを発火
    this.fireEvent('chage');
  }

}
