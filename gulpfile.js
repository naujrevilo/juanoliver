var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('pug', function() {
    gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        })) // pip to jade plugin
        .pipe(gulp.dest('./')); // tell gulp our output folder
});

gulp.task('sass', function() {
    gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'nested'
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'pug'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(['./scss/**/*.scss'], ['sass']);
    gulp.watch("./pug/**/*.pug",['pug']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});