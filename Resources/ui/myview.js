/**
 * riceアプリ独自
 * view.js
 */
module.exports = Lib.extend('/core/observe', {

    width: Ti.Platform.displayCaps.platformWidth,
    height: Ti.Platform.displayCaps.platformHeight,

    /**
     * タブグループの生成
     */
    createTabGroup: function (config) {
        config = config || {};
        var $ = this,
            navWin = null;

        // 大本のwindow
        var self = Ti.UI.createTabGroup({
            tintColor: '#FFF',
            activeTabIconTint: '#65D073'
        });


        // window遷移イベント
        self.addEventListener('window:open', function (e) {
            e.cancelBubble = true;

            // モーダルが開いている時はモーダル遷移させる
            if(navWin) {
                navWin.openWindow(
                    new (require(e.url))(e.config),
                    {animated: e.animated || true}
                );
                return;
            }
            
            var tab = self.getActiveTab();
            tab.open(
                new (require(e.url))(e.config),
                {animated: e.animated || true}
            );
            return;
        });


        // モーダルウィンドウを開く
        self.addEventListener('window:modalopen', function (e) {
            e.cancelBubble = true;
            navWin = Ti.UI.iOS.createNavigationWindow({
                window: new (require(e.url))(e.config)
            });
            navWin.open({
                modal: true
            });
            return;
        });


        // モーダルウィンドウを閉じる
        self.addEventListener('window:modalclose', function (e) {
            e.cancelBubble = true;
            navWin.close();
            navWin = null;
            return;
        });

        return self;
    },


    /**
     * テキスト入りボタン
     */
    createButton: function (config) {
        config = config || {};
        var $ = this;

        var self = Ti.UI.createView(_.extend({
            height: 60,
            borderRadius: 5,
            backgroundColor: '#e74c3c'
        }, config));
        self.add(Ti.UI.createLabel({
            text: config.text || '',
            color: config.color || '#FFF',
            touchEnabled: false,
            font: {
                fontSize: 16
            }
        }));

        // ボタンを透けさせる
        self.addEventListener('view:touchdisable', function (e) {
            e.cancelBubble = true;
            self.applyProperties({
                opacity: 0.5
            });
            return;
        });

        // ボタンを透明度をもどす 
        self.addEventListener('view:touchenable', function (e) {
            e.cancelBubble = true;
            self.applyProperties({
                opacity: 1
            });
            return;
        });

        // 初期値として押せない設定だった時に発火
        if(config.touchDisabled) {
            self.fireEvent('view:touchdisable');
        }

        return self;
    }

});
