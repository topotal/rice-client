/**
 * Ajax用tableView
 */
module.exports = Lib.extend('/core/view', {


    /**
     * window生成
     */
    _createTableView: function (config) {
        config = config || {};
        var $ = this;


        // リフレッシュコントロール
        var refreshControl = Ti.UI.createRefreshControl({
            tintColor: '#333'
        });
        refreshControl.addEventListener('refreshstart', function(){
            self.fireEvent('view:load', {
                reload: true
            });
        });


        var footerView = Ti.UI.createView({
            width: Ti.UI.FILL,
            height: 60
        });
        footerView.add(Ti.UI.createImageView({
            width: 18,
            height: 30,
            image: '/images/common/icon_fotterview_rice.png'
        }));


        var self = Ti.UI.createTableView(_.extend({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            backgroundColor: '#E1F1E3',
            refreshControlEnabled: true,
            refreshControlTintColor: '#66cc99',
            refreshControlBackgroundColor: '#ccc',
            refreshControl: refreshControl,
            separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
            footerView: footerView
        }, config));

        
        var model = new (require(config.model))();

        self.addEventListener('view:load', function (e) {
            e.cancelBubble = true;

            model[config.action]({
                test: 'hoge',
                data: {},
                success: function (res) {

                    // リロードの場合はrowを全て消す
                    if(e.reload) {
                        self.removeAllChildren();
                        self.setData([]);
                    }

                    _.each(res, function (data) {
                        self.appendRow(config.tpl(data));
                    });

                    return;
                },
                error: function (res) {
                    return;
                },
                complete: function (res) {
                    refreshControl.endRefreshing();
                    return;
                }
            });

            return;
        });

        self.fireEvent('view:load');

        return self;
    }

});
