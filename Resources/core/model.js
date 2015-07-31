module.exports = Lib.extend('/core/observe', {

    /**
     * window生成
     */
    request: function (config) {
        config = config || {};
        var $ = this;
        
        // オフラインなら処理しないようにしたほうがいいですよね！
        if(Titanium.Network.online == false){
            // エラー表示
            return;
        }

        // オブジェクトを生成
        var xhr = Titanium.Network.createHTTPClient();
      
        // 第一引数はHTTP Method(GETかPOSTがほとんどだと思いますが)
        // 第二引数はURIです。
        // 第三引数は非同期か同期かを選択します。（デフォルトは非同期）
        console.debug('method: ' + config.method);
        console.debug('url: ' + config.url);
        xhr.open(config.method || 'GET', config.url);

        // レスポンスを受け取るイベント
        xhr.onload = function(){
            //alert(this.responseText);

            var json = JSON.parse(this.responseText);
            
            if(xhr.status != 200) {
                if(_.isFunction(config.error)) {
                    config.error(json);
                }
                return;
            }
            
            console.debug(json);

            if(_.isFunction(config.success)) {
                config.success(json);
            }

            if(_.isFunction(config.complete)) {
                config.complete(json);
            }

            return;
        };

        // エラー発生時のイベント
        xhr.onerror = function(error){
            console.error(error);
            // errorにはエラー事由の文字列オブジェクトが入ってくる。
            if(_.isFunction(config.complete)) {
                config.complete(error);
            }
            return;
        };
        

        console.debug(JSON.stringify(config.data));

        if(!config.isBlob) {
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        }
      
        // 画像生成
        if (config.isBlob) {
            xhr.send(config.data);
            return;
        }
        

        if(config.method == 'GET') {
            xhr.send();
            return;
        }

        xhr.send(config.data ? JSON.stringify(config.data) :  null);
        
        return;
    }

});
