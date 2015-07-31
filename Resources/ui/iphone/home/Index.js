/**
 * ホーム
 */
module.exports = Lib.extend('/core/view', {


    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.mainWin = $.createWindow({
            title : '最高のごはんにしようぜ'
        });

        var v = $._createView(config);
        $.mainWin.add(v);

        return $.mainWin;    
    },


    _createView: function (config) {
        config = config || {};
        var $ = this;


        // tableView
        var self = new (require('/ui/iphone/home/List'))({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });


        var offsetY = 0;
        var scrollType = null;
        self.addEventListener('scroll', function (e) {
            e.cancelBubble = true;

            // 60以下しかスクロールしていない時
            if(e.contentOffset.y <= 60) {
                if(scrollType == 'up') {
                    return;
                }
                scrollType = 'up';
                $.mainWin.showNavBar();
                offsetY = e.contentOffset.y;
                return;
            }
            
            // 下にスクロールした時
            if(offsetY < e.contentOffset.y) {
                if(scrollType == 'down') {
                    return;
                }
                scrollType = 'down';
                $.mainWin.hideNavBar();
            }

            // 上ににスクロールした時
            if(offsetY > e.contentOffset.y) {
                if(scrollType == 'up') {
                    return;
                }
                scrollType = 'up';
                $.mainWin.showNavBar();
            }

            offsetY = e.contentOffset.y;
            return;
        });


        // 記録詳細への遷移
        self.addEventListener('click', function (e) {
            e.cancelBubble = true;
            target = e.source;

            if(!target.rowData) {
                return;
            }

            tabGroup.fireEvent('window:open', {
                url: '/ui/iphone/home/Detail',
                animated: true,
                config: {
                    data: target.rowData
                }
            });
            return; 
        });

        return self;
    }

});
