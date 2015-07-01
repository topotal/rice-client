var gulp = require('gulp');
var path = require('path');
var jsYaml = require('js-yaml');
var fs = require('fs');
var wrench = require('wrench');
var exec = require('child_process').exec;

// yamlをコンパイル
function compile(yaml) {
    var replaceVal = function(_target, _value, _object) {
        for (var _key in _object) {
            if (object.hasOwnProperty(_key)) {
                if (typeof object[key] !== 'object') {
                    if (object[key] === _target) {
                        object[key] = _value;
                    }
                } else {
                    replaceVal(_target, _value, _object[key]);
                }
            }
        }
    };

    var object = jsYaml.load(yaml);
    if (typeof object.parameters === 'object') {
        var param = object.parameters;
        delete object.parameters;
        for (var key in param) {
            if (param.hasOwnProperty(key) && typeof param[key] !== 'object') {
                replaceVal('%' + key + '%', param[key], object);
            }
        }
    }

    var json = JSON.stringify(object, null, '  ');
    json = json.replace(/['"]expr(.+?)['"]/gi, 'expr$1');
    json = json.replace(/['"]Ti(.+?)['"]/gi, 'Ti$1');
    json = json.replace(/['"]Titanium(.+?)['"]/gi, 'Titanium$1');

    return json;
}


/**
 * stylesのbuild
 **/
gulp.task('styles', function(){
    // ymlの変換
    wrench.readdirSyncRecursive('./src/styles').forEach(function(target){
        if (target.match(/\.yml$/)) {
            fs.writeFileSync(
                path.join('./app/styles', target.replace(/\.yml$/, '.tss')),
                compile(
                    fs.readFileSync(path.join('./src/styles' + '/' + target)).toString(),
                    { bare: true }
                )
            );
            // tishadow run
            exec('ts run --update');
        }
    });
});
