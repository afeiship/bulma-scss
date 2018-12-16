(function() {
  'use strict';

  var gulp = require('gulp');
  var converter = require('sass-convert');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('sass2scss', function() {
    return gulp
      .src(['./.tmp/bulma/bulma.sass', './.tmp/bulma/sass/**/*.sass'])
      .pipe(converter({ from: 'sass', to: 'scss' }))
      .pipe($.rename({ extname: '.scss' }))
      .pipe(gulp.dest('dist'));
  });
})();
