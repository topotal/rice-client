var gulp = require('gulp');

/**
 * 全体のファイルの監視
 **/
gulp.task('watch', function(){
    gulp.watch('./src/views/**/*.jade', ['views']);
    gulp.watch('./src/**/*.js', ['babel']);
    gulp.watch('./src/styles/**/*.yml', ['styles']);
});
