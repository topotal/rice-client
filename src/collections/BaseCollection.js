/**
 * コレクションのベースクラスです。
 */
export default class BaseCollection {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    this._collection = [];
  }

  /**
   * コレクションをセットします。
   * @param collection
   */
  setCollection(collection) {
    this._collection = collection;
  }

  /**
   * モデルをコレクションに追加します。
   */
  pushModel(model) {
    this._collection.push(model);
  }

}
