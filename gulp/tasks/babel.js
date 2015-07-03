var gulp = require('gulp');
var babel = require('gulp-babel');
var shell = require('gulp-shell');

/**
 * controllersのbuild
 **/
gulp.task('babel', function(){
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./app/'));
});
