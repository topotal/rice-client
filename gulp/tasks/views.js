var gulp = require('gulp');
var path = require('path');
var jade = require('gulp-jade');
var map = require('map-stream');
var shell = require('gulp-shell');


function changeExtensionToXml(file, callback){
    if (file.isStream()) {
        return callback(new Error('Cannot do change extension on a stream'), file);
    }
    file.path = path.join(file.base, path.basename(file.path, path.extname(file.path)) + '.xml');
    callback(null, file);
}


function changeExtensionFromHtmlToXml() {
    return map(changeExtensionToXml);
}


/**
 * viewのbuild
 **/
gulp.task('views', function(){
    return gulp.src('./src/views/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(changeExtensionFromHtmlToXml())
        .pipe(gulp.dest('./app/views/'))
        .pipe(shell([
            'ts run --update'
        ]));
});
