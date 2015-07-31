var _ = require('/core/lodash')._;
var moment = require('/core/moment');
moment.lang('ja');
var Lib = require('/core/lib');
var tabGroup = null;

/**
 * アプリケーションエントリポイント
 */
(function() {

    // アプリケーションのスタート
    new (require('/ui/iphone/ApplicationWindow'))();

    return;
})();
