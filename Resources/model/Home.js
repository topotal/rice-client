/**
 * ホームAPI
 */
module.exports = Lib.extend('/core/model', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.getUrl = 'http://xn--38j8bv87v8z2b18b.com/api/v1/';

        return;
    },

    find: function (config) {
        config = config || {};
        var $ = this;

        _.extend(config, {
            method: 'GET',
            url: $.getUrl + 'timeline'
        });

        $.request(config);
        
        return;
    },

    show: function (config) {
        config = config || {};
        var $ = this,
            data = config.data || {};

        _.extend(config, {
            method: 'GET',
            url: $.getUrl + 'cook/' + data.id
        });

        $.request(config);
        return;
    }

});
