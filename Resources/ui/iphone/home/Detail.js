/**
 * 炊飯記録詳細
 */
module.exports = Lib.extend('/core/view', {

    /**
     * タイムラインのrowパターン
     */
    rowData: {
        start: {
            step: 'start',
            color: '#2ECC71',
            level: '始',
            text: 'スタート'
        },
        soak: {
            step: 'soak',
            color: '#3498DB',
            level: '浸'
        },
        steam: {
            step: 'steam',
            color: '#7F8C8D',
            level: '蒸'
        },
        low: {
            step: 'low',
            color: '#F1C40F',
            level: '弱'
        },
        medium: {
            step: 'medium',
            color: '#E67E22',
            level: '中'
        },
        high: {
            step: 'high',
            color: '#E74C3C',
            level: '強'
        },
        finish: {
            step: 'finish',
            color: '#2ECC71',
            level: '完',
            text: '出来上がり!'
        }
    },


    __construct: function (config) {
        config = config || {};
        var $ = this;

        $.mainWin = $.createWindow({
            title : '炊飯記録',
            leftNabButton: ''
        });

        $.mainWin.hideTabBar();

        var v = $._createView(config);
        $.mainWin.add(v);

        return $.mainWin;    
    },


    _createView: function (config) {
        config = config || {};
        var $ = this,
            data = config.data || {};

        var self = $.createBaseView({
            isScroll: true
        });

        // 出来上がり写真
        var image = Ti.UI.createImageView({
            top: 0,
            width: $.width,
            height: $.width,
            defaultImage: '',
            image: data.image
        });
        self.add(image);

        // 評価
        var rank = Ti.UI.createView({
            top: $.width - 36,
            right: 17,
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

        // タイムライン
        var timeline = Ti.UI.createTableView({
            top: $.width,
            width: Ti.UI.FILL,
            height: 120 + (60 * data.heats.length),
            separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
        });
        self.add(timeline);

        var model = new (require('/model/Home'))();
        model.show({
            data: {
                id: data._id.$oid
            },
            success: function (res) {
                timeline.appendRow($._createRowView({
                    step: 'start'
                }));
                _.each(res.heats, function (_data) {
                    timeline.appendRow($._createRowView(_data));
                    return;
                });
                timeline.appendRow($._createRowView({
                    step: 'finish'
                }));
                return;
            },
            error: function (res) {
                return;
            },
            complete: function (res) {
                return;
            }
        });

        return self;
    },


    /**
     * タイムラインのrow
     * 生成
     */
    _createRowView: function (data) {
        data = data || {};
        var $ = this;
       
        var self = Ti.UI.createTableViewRow({
            width: Ti.UI.FILL,
            height: 60,
            selectionStyle: 'NONE',
            rowData: data
        });

        // 縦線
        var line = Ti.UI.createView({
            left: 50,
            width: 5,
            height: Ti.UI.FILL,
            backgroundColor: '#CCC'
        });
        self.add(line);

        // 円
        var circle = Ti.UI.createView({
            left: 33,
            width: 39,
            height: 39,
            borderRadius: 19,
            borderWidth: 5,
            borderColor: $.rowData[data.step].color,
            backgroundColor: '#FFF'
        });
        circle.add(Ti.UI.createLabel({
            width: 39,
            height: 39,
            text: $.rowData[data.step].level,
            color: $.rowData[data.step].color,
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        }));
        self.add(circle);

        // 秒数などの表示項目
        var label = Ti.UI.createLabel({
            right: 50,
            text: $.rowData[data.step].text || moment((data.time*1000 || 0)).format('m分 s秒'),
            font: {
                fontSize: 14
            }
        });
        self.add(label);

        // 下線
        var separator = $.createSeparator({
            right: 0,
            bottom: 0,
            width: 200,
            backgroundColor: '#ECF0F1'
        });
        self.add(separator);

        return self;
    }

});
