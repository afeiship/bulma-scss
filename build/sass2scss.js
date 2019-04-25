(function() {
  'use strict';

  var gulp = require('gulp');
  var converter = require('sass-convert');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('copy-sass', function() {
    gulp.src('.tmp/bulma/sass/**/*.sass').pipe(gulp.dest('.tmp/dist/scss'));
    gulp.src('.tmp/bulma/bulma.sass').pipe(gulp.dest('.tmp/dist'));
  });

  gulp.task('sass2scss', ['copy-sass'], function() {
    return gulp
      .src('.tmp/dist/**/*.sass')
      .pipe($.replace('sass', 'scss'))
      .pipe(converter({ from: 'sass', to: 'scss' }))
      .pipe($.rename({ extname: '.scss' }))
      .pipe(gulp.dest('dist'));
  });
})();
