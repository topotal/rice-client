module.exports = {


    /**
     * クラス拡張
	 * @param {String} a
	 * @param {Object} b
     */
    extend: function (a, b) {
        var base = require(a) || {};
        var cl = function (config) {
            this.config = config || {};
            this.data = this.config.data || {};

            return this.__construct.call(this, this.config);
        };

        cl.prototype = _.extend({}, base.prototype, b);

        var F = function(){};
        F.prototype = base.prototype;
        cl.superclass = cl.prototype.superclass = new F();

        return cl;
    }


};
