/**
 * ログイン画面
 */
module.exports = Lib.extend('/core/view', {


    __construct: function (config) {
        config = config || {};
        var $ = this;

        tabGroup = $.createTabGroup();
        $.mainWin = $.createWindow();

        var v = $._createView(config);
        $.mainWin.add(v);

        // タブグループ生成
        tabGroup.addTab(Ti.UI.createTab({
            window: $.mainWin
        }));

        // ログイン画面ではバーは全て表示しない
        $.mainWin.hideTabBar();
        $.mainWin.hideNavBar();

        return tabGroup;    
    },


    _createView: function (config) {
        config = config || {};
        var $ = this;

        var self = $.createBaseView();

        var button = $.createButton({
            left: 10,
            right: 10,
            bottom: 100,
            text: 'twitterログイン'
        });
        self.add(button);


        // ログイン処理
        button.addEventListener('click', function (e) {
            e.cancelBubble = true;
            tabGroup.fireEvent('window:modalopen', {
                url: '/core/twitter',
                animated: true,
                config: {
                    success: function () {
                        tabGroup.close();
                        Ti.App.Properties.setBool('app-login', true);
                        Ti.App.fireEvent('app:afterlogin');
                        return;
                    }
                }
            });
            return;
        });


        return self;
    }


});
