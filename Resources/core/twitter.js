/**
 * twitter認証
 */
module.exports = Lib.extend('/core/view', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        // ヘッダーの左ボタン
        var leftNavButton = Ti.UI.createLabel({
            color: '#FFF',
            text: 'キャンセル'
        });
        leftNavButton.addEventListener('click', function (e) {
            e.cancelBubble = true;
            tabGroup.fireEvent('window:modalclose');
            return;
        });

        $.mainWin = $.createWindow({
            title: 'twitter',
            barColor        : '#55ACEE',
            titleAttributes : {
                color: '#FFF'
            },
            leftNavButton: leftNavButton
        });

        $.mainWin.add($._createView(config));

        // ログイン成功後の処理
        $.mainWin.addEventListener('view:loginsuccess', function (e) {
            e.cancelBubble = true;
            config.success();
            return;
        });

        return $.mainWin;    
    },

    _createView: function (config) {
        config = config || {};
        var $ = this;

        var self = Ti.UI.createWebView({
            top: 0,
            width: $.width,
            height: $.height
        });
        self.addEventListener('load', function(event) {
            if (!event.url.match(/oauth_verifier=([^&]+)/)) {
                return;
            }
            twitter.setVerifier(RegExp.$1);
            twitter.fetchAccessToken(
                function (data) {
                    if (!data.text.match(/^oauth_token=([^&]+)&oauth_token_secret=([^&]+)/)) {
                        return;
                    }

                    // twitter周りの必要なデータをTi.App.Propertiesに残す
                    Ti.App.Properties.setString('tw-oauth-token', RegExp.$1);
                    Ti.App.Properties.setString('tw-oauth-token-secret', RegExp.$2);

                    // ユーザデータを取得
                    data.text.match(/screen_name=([^&]+)/);
                    twitter.get('https://api.twitter.com/1.1/users/show.json?screen_name=' + RegExp.$1, function (_data) {
                        console.debug('======== user data ======', JSON.parse(_data.text));
                        var ud = JSON.parse(_data.text);
                        Ti.App.Properties.setObject('user-data', JSON.parse(_data.text) || {});
                        tabGroup.fireEvent('window:modalclose');
                        $.mainWin.fireEvent('view:loginsuccess');
                        return;
                    });


                    return;
                }, function (data) {
                    console.log(JSON.stringify(data));
                    return;
                }
            );
            return;
        });


        var jsOAuth = require('/core/jsOAuth');
        var twitter = jsOAuth.OAuth({
            consumerKey: Ti.App.Properties.getString('tw-consumer-key'),
            consumerSecret: Ti.App.Properties.getString('tw-consumer-secret'),
            callbackUrl: Ti.App.Properties.getString('app-siteurl'),
            requestTokenUrl: 'https://api.twitter.com/oauth/request_token',
            authorizationUrl: 'https://api.twitter.com/oauth/authorize',
            accessTokenUrl: 'https://api.twitter.com/oauth/access_token'
        });
        twitter.fetchRequestToken(
            function (url) {
                console.debug("Opening Request Token URL: " + url);
                // urlをセットしなおして
                // 画面を更新
                self.setUrl(url);
                self.reload();
                return;
            },
            function (data) {
                console.log(JSON.stringify(data));
                return;
            }
        );


        return self;
    }

});
