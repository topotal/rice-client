var cl = function () {};
cl.prototype = {

    __construct: function () {},


    isLogin: function () {
        if(Ti.App.Properties.getBool('app-login')){
            return true; 
        }
        return false; 
    },


    /**
     * アラート
     */
    alert: function (text, callback) {
        var $ = this;

        var dialog = Ti.UI.createAlertDialog({
            message: text || '',
            ok: 'OK',
            title: Ti.App.getName()
        });
        dialog.addEventListener('click', function (e) {
            e.cancelBubble = true;
            if(_.isFunction(callback)) {
                callback();
            }
            return;
        });
        dialog.show();

        return;
    },


    
    /**
     * 確認ダイアログ
     */
    confirm: function (text, callback) {
        var $ = this;

        var dialog = Ti.UI.createAlertDialog({
            message: text || '',
            cancel: 0,
            buttonNames: ['キャンセル', 'OK'],
            title: Ti.App.getName()
        });
        dialog.addEventListener('click', function (e) {
            e.cancelBubble = true;
            if(e.cancel == e.index) {
                return;
            }
            callback();
            return;
        });
        dialog.show();

        return;
    }


};
module.exports = cl;
