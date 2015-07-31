/**
 * 炊飯計測画面
 */
module.exports = Lib.extend('/core/view', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        // ヘッダーの左ボタン
        var leftNavButton = Ti.UI.createLabel({
            color: '#FFF',
            text: '中止'
        });
        leftNavButton.addEventListener('click', function (e) {
            e.cancelBubble = true;
            $.confirm(
                '炊飯を中止してもよろしいですか？',
                function () {
                    tabGroup.fireEvent('window:modalclose');
                    return;
                }
            );
            return;
        });

        $.mainWin = $.createWindow({
            title: '評価',
            backgroundColor : '#E1F1E3',
            barColor        : '#F39C12',
            titleAttributes : {
                color: '#FFF'
            },
            leftNavButton: leftNavButton
        });

        var v = $._createView(config);
        $.mainWin.add(v);

        return $.mainWin;    
    },


    _createView: function (config) {
        config = config || {};
        var $ = this,
            value = {
                heats: config.data || []
            },
            currentRow = null;

        var self = $.createBaseView({
            top: 60
        });

        // ラベル
        var label = Ti.UI.createLabel({
            top: 10,
            left: 10,
            right: 10,
            text: [
                '今日のごはんのできはどうですか？',
                '五段階評価で言うと米いくつ？'
            ].join('\n'),
            color: '#333',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            borderRadius: 5,
            font: {
                fontSize: 13
            } 
        });
        self.add(label);


        // 評価
        var rating = $.createRating({
            top: 50,
            value: 0
        });
        self.add(rating);
        
        rating.addEventListener('click', function (e) {
            e.cancelBubble = true;
            var target = e.source;
            if(!target.index) {
                return;
            }

            value.rating = target.index;

            // 米の画像を変更
            _.each(rating.getChildren(), function (_view, _index) {
                if (_index+1 <= target.index) {
                    _view.setImage('/images/boil/rait_rice_on.png');
                    return;
                }
                _view.setImage('/images/boil/rait_rice_off.png');
                return;
            });

            return; 
        });


        // 画像
        var image = Ti.UI.createImageView({
            top: 120,
            width: 300,
            height: 300,
            defaultImage: '',
            image: '/images/boil/camera.png',
            borderColor: '#CCC',
            borderWidth: 1
        });
        self.add(image);
       
        // カメラ起動
        image.addEventListener('click', function (e) {
            Titanium.Media.showCamera({
                // JSON形式の引数です
                success:function(event){
                    var model = new (require('/model/Boil'))();
                    model.findImageUrl({
                        data: {
                            image: event.media.imageAsResized(640,640)
                        },
                        success: function (res) {
                            image.setImage(res.url);
                            value.image = res.url;
                            return;
                        },
                        error: function (res) {
                            return;
                        },
                        complete: function (res) {
                            return;
                        }
                    });
                    return;
                },
                cancel:function(){
                },
                error:function(error){
                },
                saveToPhotoGallery:true,
                allowEditing: true,
                // 撮影可能なメディア種別を配列で指定
                mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
            });
            return;
        });


        // 結果送信ボタン
        var submitButton = $.createButton({
            left: 10,
            right: 10,
            bottom: 10,
            text: '送信'
        });
        self.add(submitButton);

        submitButton.addEventListener('click', function (e) {
            e.cancelBubble = true;
            if (!value.rating) {
                $.alert('五段階評価は必須です');
                return;
            }

            if (!value.image) {
                $.alert('写真は必須です');
                return;
            }

            var model = new (require('/model/Boil'))();
            model.create({
                data: value,
                success: function (res) {
                    image.setImage(res.url);
                    $.alert('送信が完了しました', function () {
                        tabGroup.fireEvent('window:modalclose');
                        return;
                    });
                    return;
                },
                error: function (res) {
                    return;
                },
                complete: function (res) {
                    return;
                }
            });

            return;
        });

        return self;
    },


    /**
     * 5段階評価view
     */
    createRating: function (config) {
        config = config || {};
        var $ = this;

        var self = Ti.UI.createView(_.extend({
            width: Ti.UI.SIZE,
            height: 60
        }, config));

        _(5).times(function (_index) {
            self.add(Ti.UI.createImageView({
                left: _index * (28 + 25),
                width: 28,
                height: 47,
                index: _index + 1,
                image: '/images/boil/rait_rice_off.png'
            }));
            return;
        });

        return self;
    }


});
