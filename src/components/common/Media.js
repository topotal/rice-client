import EventDispatcher from '../../EventDispatcher';
import TiMedia from '../../tiWrapp/TiMedia';

/**
 * メディアクラスです。
 */
export default class Media extends EventDispatcher {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * カメラを表示します。
   * @param option
   */
  showCamera() {
    TiMedia.showCamera({
      success: (event) => {
        console.log(event);
        this.fireEvent('success');
      },
      cancel: () => {
        //キャンセルの場合の処理
        this.fireEvent('cancel');
      },
      error: (/* error */) => {
        // カメラがない場合は、error.code が Ti.Media.NO_CAMERA として返す。
        this.fireEvent('error');
      },
      // 撮影直後に拡大縮小移動をするか否かのフラグ
      allowEditing: true,
      // 撮影可能なメディア種別を配列で指定
      mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
    });
  }

  /**
   * フォトライブラリを開きます。
   */
  showLibrary() {

  }

}
