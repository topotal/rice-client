/**
 * ホームのタイムライン
 */
module.exports = Lib.extend('/core/listview', {

    __construct: function (config) {
        config = config || {};
        var $ = this;

        var self = $._createTableView(_.extend({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            rowHeight: $.width,
            model: '/model/Home',
            action: 'find',
            tpl: $._createRowView
        }, config));

        return self;
    },


    _createRowView: function (data) {
        data = data || {};
        var $ = this;

        var self = Ti.UI.createTableViewRow({
            width: $.width,
            height: $.width,
            selectionStyle: 'NONE',
            rowData: data
        });

        // 米画像
        var image = Ti.UI.createImageView({
            width: $.width,
            height: $.width,
            touchEnabled: false,
            defaultImage: '',
            image: data.image
        });
        self.add(image);

        // グラデーション
        var gradation = Ti.UI.createView({
            bottom: 0,
            width: $.width,
            height: 56,
            backgroundGradient:{
                type: 'linear',
                startPoint: { x: '0%', y: '0%' },
                endPoint: { x: '0%', y: '100%' },
                colors: [
                    { color: '#00000000', position: 0.0 },
                    { color: '#42000000', potition: 1.0 }
                ]
            }
        });
        self.add(gradation);


        // 銘柄名
        var bland = Ti.UI.createLabel({
            left: 17,
            bottom: 17,
            color: '#FFF',
            text: '魚沼産 コシヒカリ'
        });
        self.add(bland);


        // 評価
        var rank = Ti.UI.createView({
            right: 17,
            bottom: 17,
            width: 86,
            height: 18
        });
        self.add(rank);


        // 評価分だけ米マークを生成
        _(data.rating).times(function (_index) {
            rank.add(Ti.UI.createImageView({
                right: 19 * _index,
                width: 11,
                height: 18,
                image: '/images/home/icon_rice.png'
            }));
            return;
        });

        return self;
    }

});
