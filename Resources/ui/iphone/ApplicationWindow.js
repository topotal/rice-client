module.exports = Lib.extend('/core/view', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        // ログアウト後の処理
        Ti.App.addEventListener('app:beforelogin', function (e) {
            e.cancelBubble = true;
            $._beforeLogin();
            return;
        });

        // ログイン後の処理
        Ti.App.addEventListener('app:afterlogin', function (e) {
            e.cancelBubble = true;
            $._afterLogin();
            return;
        });

        Ti.App.fireEvent('app:afterlogin');

        return;
    },

    // ログイン後の処理
    _afterLogin: function () {
        var $ = this;

        var navWin = null;

        // 大本のwindow
        tabGroup = $.createTabGroup();

        // ホーム
        var home = Ti.UI.createTab({
            window:  new (require('/ui/iphone/home/Index'))(),
            icon: '/images/common/icon_home.png',
            title: 'タイムライン'
        });
        tabGroup.addTab(home);

        // 炊飯する
        var boil = Ti.UI.createTab({
            window:  new (require('/ui/iphone/boil/Index'))(),
            icon: '/images/common/icon_boil.png',
            title: '炊飯する'
        });
        tabGroup.addTab(boil);

        tabGroup.open();

        return;
    }

});
