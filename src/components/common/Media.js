import EventDispatcher from '../../EventDispatcher';
import TiMedia from '../../tiWrapp/TiMedia';
import DeviceInfo from '../../enum/DeviceInfo';

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

    // シミュレーターの場合はギャラリーから選ぶ
    if(DeviceInfo.isSimulator()) {
      this.showGallery();
      return;
    }

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
   * ギャラリーを開きます。
   */
  showGallery() {
    TiMedia.openPhotoGallery({
      success: (event) => {
        console.info(event);
      },
      cancel: () => {},
      error: (error) => {
        console.error(error);
      }
    });
  }

}
