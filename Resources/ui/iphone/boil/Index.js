/**
 * 炊飯トップ
 */
module.exports = Lib.extend('/core/view', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.mainWin = $.createWindow({
            title: '炊飯する',
            titleAttributes : {
                color: '#FFF'
            },
            backgroundImage: '/images/boil/top.png'
        });

        var v = $._createView(config);
        $.mainWin.add(v);

        return $.mainWin;    
    },

    _createView: function (config) {
        config = config || {};
        var $ = this;

        var self = $.createBaseView();

        // 炊飯開始ボタン
        var startButton = $.createButton({
            left: 10,
            right: 10,
            bottom: 60,
            color: '#000',
            text: '炊飯を始める',
            backgroundColor: '#33FFFFFF'
        });
        self.add(startButton);
        startButton.addEventListener('click', function (e) {
            e.cancelBubble = true;
            tabGroup.fireEvent('window:modalopen', {
                url: '/ui/iphone/boil/Timer',
                animated: true,
                config: {
                }
            });
            return;
        });

        return self;
    }

});
