' use strict';
var gulp = require('gulp');
var usemin = require('gulp-usemin');
var wrap = require('gulp-wrap');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var minifyCss = require('gulp-cssnano');
var minifyJs = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-htmlmin');
var sass = require('gulp-sass');
var merge = require('merge-stream');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cache = require('gulp-cache');
var del = require('del');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

//To minified all the less, scss, and css
gulp.task("custom-styles", function () {

    var lessStream = gulp.src('public_dev/less/**/*.*')
        .pipe(less())
        .pipe(concat('less-files.less'));

    var scssStream = gulp.src('public_dev/scss/**/*.*')
        .pipe(sass())
        .pipe(concat('scss-files.scss'));

    var cssStream = gulp.src('public_dev/css/**/*.*')
        .pipe(concat('css-files.css'));

    var mergedStream = merge(lessStream, scssStream, cssStream)
        .pipe(concat('style.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('public/stylesheets'));

    return mergedStream;

});

// To minified all the html files
gulp.task('custom-html', function () {
    return gulp.src('public_dev/index.html')
        .pipe(usemin({
            js: [minifyJs(), 'concat'],
            css: [minifyCss({ keepSpecialComments: 0 }), 'concat'],
        }))
        .pipe(gulp.dest('public/'));
});



//To Minified JS
gulp.task('custom-js', function () {
    return gulp.src('public_dev/js/**/*.*')
        .pipe(minifyJs())
        .pipe(concat('dashboard.min.js'))
        .pipe(gulp.dest('public/javascripts'));
});

//To Minified Images
gulp.task('custom-images', function () {
    return gulp.src('public_dev/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'));
});

//For ng-folder
gulp.task('custom-ng', function () {
    console.log("ng is updating");
    return gulp.src('public_dev/ng/**/*')
        // .pipe(minifyHTML({ collapseWhitespace: true }))
        .pipe(gulp.dest('public/ng'));
});

// Copy all bower js files
gulp.task('build-bowercomponents', function () {
    console.log("bower is updating");
    return gulp.src('public_dev/bower_components/**/*')
        .pipe(gulp.dest('public/bower_components/'));
});

// To watch live activities 
gulp.task('custom-watch', function () {
    gulp.watch(['public_dev/less/**/*.*'], ['custom-styles']);
    gulp.watch(['public_dev/scss/**/*.*'], ['custom-styles']);
    gulp.watch(['public_dev/css/**/*.*'], ['custom-styles']);
    gulp.watch(['public_dev/index.html'], ['custom-html']);
    gulp.watch(['public_dev/js/**/*.*'], ['custom-js']);
    gulp.watch(['public_dev/images/**/*.*'], ['custom-images']);
    gulp.watch(['public_dev/ng/**/*'], ['custom-ng']);
    gulp.watch(['public_dev/bower_components/**/*'], ['build-bowercomponents']);
    gulp.watch('public_dev/**/*.*', browserSync.reload);
  


});


// Live-Sync on browser
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'public'
        },
    });
});

//To build a gulp task
gulp.task('build', ['custom-styles', 'custom-html', 'custom-js', 'custom-images', 'custom-ng','build-bowercomponents']);
gulp.task('default', ['build', 'browserSync', 'custom-watch']);