/**
 * 炊飯API
 */
module.exports = Lib.extend('/core/model', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.getUrl = 'http://xn--38j8bv87v8z2b18b.com/api/v1/';

        return;
    },


    create: function (config) {
        config = config || {};
        var $ = this;

        _.extend(config, {
            method: 'POST',
            url: $.getUrl + 'cook',
            data: config.data
        });

        $.request(config);
        
        return;
    },


    findImageUrl: function (config) {
        config = config || {};
        var $ = this;

        _.extend(config, {
            method: 'POST',
            url: $.getUrl + 'image',
            isBlob: true,
            data: config.data
        });

        $.request(config);
        
        return;
    }

});
