/**
 * twitterAPI
 */
module.exports = Lib.extend('/core/model', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.getUrl = 'http://xn--38j8bv87v8z2b18b.com/api/v1/';

        return;
    },

    tweet: function (config) {
        config = config || {};
        var $ = this;

        //_.extend(config, {
        //    method: 'POST',
        //    url: 'https://api.twitter.com/1.1/statuses/update.json',
        //    data: {
        //        status: 'テストです',

        //    }
        //});

        //$.request(config);
        
        return;
    }

});
