/**
 * 炊飯計測画面
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
            level: '浸',
            time: 0
        },
        steam: {
            step: 'steam',
            color: '#7F8C8D',
            level: '蒸',
            time: 0
        },
        low: {
            step: 'low',
            color: '#F1C40F',
            level: '弱',
            time: 0
        },
        medium: {
            step: 'medium',
            color: '#E67E22',
            level: '中',
            time: 0
        },
        high: {
            step: 'high',
            color: '#E74C3C',
            level: '強',
            time: 0
        },
        finish: {
            step: 'finish',
            color: '#2ECC71',
            level: '完',
            text: '出来上がり!'
        }
    },

    mode: 'start',
    select: null,


    __construct: function (config) {
        config = config || {};
        var $ = this;

        // ヘッダーの左ボタン
        var leftNavButton = Ti.UI.createLabel({
            color: '#FFF',
            text: '中止'
        });
        leftNavButton.addEventListener('click', function (e) {
            e.cancelBubble = true;
            $.confirm(
                '炊飯を中止してもよろしいですか？',
                function () {
                    tabGroup.fireEvent('window:modalclose');
                    return;
                }
            );
            return;
        });

        $.mainWin = $.createWindow({
            title: '炊飯',
            backgroundColor : '#E1F1E3',
            barColor        : '#F39C12',
            titleAttributes : {
                color: '#FFF'
            },
            leftNavButton: leftNavButton
        });

        var v = $._createView(config);
        $.mainWin.add(v);

        return $.mainWin;    
    },


    _createView: function (config) {
        config = config || {};
        var $ = this,
            currentRow = null;

        var self = $.createBaseView();


        // タイムライン
        var timeline = Ti.UI.createTableView({
            top: 0,
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            bottom: 280,
            separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
        });
        self.add(timeline);

        // 全体時間を表すタイマー
        var timer = $.createTimer({
            bottom: 220
        });
        self.add(timer);


        // 火加減ボタン
        var levelButtons = $.createLevelButtons({
            bottom: 80
        });
        levelButtons.addEventListener('click', function (e) {
            e.cancelBubble = true;
            var target = e.source;
            if(!target.buttonType){
                return;
            }

            // 同じボタンを押した時は無駄に評価しない
            if($.select == target.buttonType){
                return;
            }

            // 現時点と同じモードのボタンだったら時も処理しない
            if($.mode == target.buttonType){
                return;
            }

            // 選択したmodeを保持
            $.select = target.buttonType;

            // ボタンの切り替え
            levelButtons.fireEvent('view:change', {
                buttonType: target.buttonType
            });

            // ボタンを透明度を戻す
            changeButton.fireEvent('view:touchenable');

            return;
        });
        self.add(levelButtons);


        // 切り替えボタン
        var changeButton = $.createButton({
            left: 10,
            right: 10,
            bottom: 10,
            backgroundColor: '#7F8C8D',
            text: '切り替える',
            opacity: 0.5
        });
        self.add(changeButton);
        changeButton.addEventListener('click', function (e) {
            e.cancelBubble = true;

            if(!$.select) {
                $.alert([
                    '火加減を最低でもひとつ選択して',
                    'スタートしてください'
                ].join('\n'));
                return;
            }

            // しょっぱなから完成を押した場合
            if($.mode == 'start' && $.select == 'finish'){
                $.alert([
                    'お米が炊けているはずがありません',
                    '選択しなおしてください'
                ].join('\n'));
                return;
            }

            // しょっぱなから蒸らしを押した場合
            if($.mode == 'start' && $.select == 'steam'){
                $.alert([
                    '蒸らすのは火をかえた後です',
                    '選択しなおしてください'
                ].join('\n'));
                return;
            }

            // モード変更がなければ処理しない
            if($.select == $.mode){
                return;
            }

            // モードを保持
            $.mode = $.select;

            // 押したボタンのrowを追加　
            timeline.fireEvent('view:setrow', {
                rowType: $.select
            });

            // ボタンを透明に
            changeButton.fireEvent('view:touchdisable');


            // 完成した時 
            if($.select == 'finish'){
                timer.fireEvent('view:stoptimer');
                _.delay(function () {
                    $.alert(
                        [
                            'お疲れ様でした',
                            '今回の出来栄えを残しましょう'
                        ].join('\n'),
                        function () {

                            var data = [];

                            // タイムラインのデータを整形
                            _.each(timeline.getData()[0].getRows(), function (_row) {
                                var _data = _row.getData();
                                if(!_.has(_data, 'time')) {
                                    return;
                                }
                                data.push(_row.getData());
                                return;
                            });
        
                            tabGroup.fireEvent('window:open', {
                                url: '/ui/iphone/boil/Rating',
                                animated: true,
                                config: {
                                    data: data
                                }
                            });
                            return;
                        }
                    );
                    return;
                }, 1000);
            }

            // timerをスタート
            timer.fireEvent('view:starttimer');

            return;
        });


        // タイムラインのrowの追加
        timeline.addEventListener('view:setrow', function (e) {
            e.cancelBubble = true;
            currentRow = $._createRowView($.rowData[e.rowType]);
            timeline.appendRow(currentRow, {
                animated: true,
                animationStyle: Ti.UI.iPhone.RowAnimationStyle.RIGHT
            });
            var toIndex = timeline.getData()[0].getRows().length-1;
            timeline.scrollToIndex(toIndex, {
                animated: true
            });
            return;
        });

        // 初期値として[始]を設置
        timeline.fireEvent('view:setrow', {
            rowType: 'start'
        });


        // タイムラインの秒数をカウント
        self.addEventListener('view:settime', function (e) {
            e.cancelBubble = true;
            if($.mode == 'finish') {
                return;
            }
            currentRow.fireEvent('view:setrowtime');
            return;
        });


        return self;
    },


    /** 
     * タイマーの生成
     */
    createTimer: function (config) {
        config = config || {};
        var $ = this,
            intervalID = null,
            startTime = null;

        var self = Ti.UI.createView(_.extend({
            width: Ti.UI.FILL,
            height: 60,
            backgroundColor: '#FFF'
        }, config));

        // タイマー
        var timer = Ti.UI.createLabel({
            text: '00:00:00',
            font: {
                fontSize: 26
            }
        });
        self.add(timer);

        // 上部境界線
        var topSeparator = $.createSeparator({
            top: 0
        });
        self.add(topSeparator);

        // 下部境界線
        var bottomSeparator = $.createSeparator({
            bottom: 0
        });
        self.add(bottomSeparator);
        
        
        // タイマースタート
        self.addEventListener('view:starttimer', function (e) {

            // すでにタイマーが起動していれば処理しない
            if(intervalID) {
                return;
            }

            intervalID = setInterval(function () {
                if(!startTime) {
                    startTime = moment();
                }
                var nowTime = moment();
                timer.setText(moment(
                    nowTime.diff(startTime)
                ).format('mm:ss:SS'));

                self.fireEvent('view:settime');

                return;
            }, 40);
            e.cancelBubble = true;
            return;
        });

        // タイマーストップ
        self.addEventListener('view:stoptimer', function (e) {
            e.cancelBubble = true;
            clearInterval(intervalID);
            return;
        });


        return self;
    },


    /**
     * 火加減ボタン郡
     */
    createLevelButtons: function (config) {
        config = config || {};
        var $ = this;

        var self = Ti.UI.createView(_.extend({
            width: Ti.UI.FILL,
            height: 130
        }, config));
        

        var buttonData = [
            {
                top: 0,
                left: 10,
                backgroundColor: '#3498DB',
                text: '浸す',
                buttonType: 'soak'
            },
            {
                top: 0,
                backgroundColor: '#7F8C8D',
                text: '蒸らす',
                buttonType: 'steam'
            },
            {
                top: 0,
                right: 10,
                backgroundColor: '#2ECC71',
                text: '完成',
                buttonType: 'finish'
            },
            {
                left: 10,
                bottom: 0,
                backgroundColor: '#F1C40F',
                text: '弱火',
                buttonType: 'low'
            },
            {
                bottom: 0,
                backgroundColor: '#E67E22',
                text: '中火',
                buttonType: 'medium'
            },
            {
                right: 10,
                bottom: 0,
                backgroundColor: '#E74C3C',
                text: '強火',
                buttonType: 'high'
            }
        ]


        // ボタンをそれぞれ生成
        _.each(buttonData, function (_data) {
            self.add($.createButton(_.extend({
                width: ($.width-40) / 3,
                touchDisabled: true
            }, _data)));
            return;
        });


        // 火加減の切り替え
        self.addEventListener('view:change', function (e) {
            e.cancelBubble = true;
            _.each(self.getChildren(), function (_btn) {
                // タッチしたものと同じtypeが同じであれば
                // ボタンの透過を1に戻す
                if(_btn.buttonType == e.buttonType) {
                    _btn.fireEvent('view:touchenable');
                    return;
                }
                // それ以外は全て半透明に
                _btn.fireEvent('view:touchdisable');
                return;
            });
            return;
        });

        return self;
    },


    /**
     * タイムラインのrow
     * 生成
     */
    _createRowView: function (data) {
        data = data || {};
        var $ = this,
            startTime = moment();
       
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
            borderColor: data.color,
            backgroundColor: '#FFF'
        });
        circle.add(Ti.UI.createLabel({
            width: 39,
            height: 39,
            text: data.level,
            color: data.color,
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        }));
        self.add(circle);

        // 秒数などの表示項目
        var label = Ti.UI.createLabel({
            right: 50,
            text: data.text || '0秒',
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

        self.getData = function () {
            return data;
        }
       
        // 秒数をラベルとしてセット
        self.addEventListener('view:setrowtime', function (e) {
            e.cancelBubble = true;
            var nowTime = moment();
            var diff = nowTime.diff(startTime);
            label.setText(moment(diff).format('m分 s秒 経過'));
            data.time = Math.floor(diff/1000);
            return;
        });

        return self;
    }

});
