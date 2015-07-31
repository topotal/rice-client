/**
 * 天気API
 */
module.exports = Lib.extend('/core/model', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.getUrl = 'http://weather.livedoor.com/forecast/webservice/json/';

        return;
    },

    find: function (config) {
        config = config || {};
        var $ = this;

        _.extend(config, {
            method: 'GET',
            url: $.getUrl + 'v1?city=130010'
        });

        $.request(config);
        
        return;
    }

});
