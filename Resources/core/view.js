module.exports = Lib.extend('/ui/myview', {

    width: Ti.Platform.displayCaps.platformWidth,
    height: Ti.Platform.displayCaps.platformHeight,


    /**
     * window生成
     */
    createWindow: function (config) {
        config = config || {};
        var $ = this;

        var win = Ti.UI.createWindow(_.extend({
            top: 0,
            width: $.width,
            height: $.height,
            translucent     : true,
            includeOpaqueBars:true,
            autoAdjustScrollViewInsets: true,
            backgroundColor : '#E1F1E3',
            barColor        : '#65D073',
            titleAttributes : {
                color: '#FFF'
            },
            statusBarStyle  : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
            extendEdges     : [Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM],
        }, config));
        
        return win;
    },


    /**
     * ベースとなるviewの生成
     */
    createBaseView: function (config) {
        config = config || {};
        var $ = this,
            isScroll = config.isScroll || false;
        delete config.isScroll;

        // スクロール有りの場合はscrollViewを返却
        if(isScroll) {
            return Ti.UI.createScrollView(_.extend({
                top: 0,
                width: Ti.UI.FILL,
                height: Ti.UI.FILL
            }, config));
        }

        // 普通のViewを返却
        return Ti.UI.createView(_.extend({
            top: 0,
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        }, config));
    },



    /**
     * 1pxの横線
     */
    createSeparator: function (config) {
        config = config || {};
        var $ = this;

        var self = Ti.UI.createView(_.extend({
            width: Ti.UI.FILL,
            height: 1,
            backgroundColor: '#BDC3C7'
        }, config));

        return self;
    }


});
