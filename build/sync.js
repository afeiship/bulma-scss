// clean:
// exec('rm -rf .tmp')

// make dir & clone to empty dir:
// exec('mkdir .tmp');
// exec('git clone --depth=1 https://github.com/jgthms/bulma.git .tmp');

// vfs
//   .src(['./.tmp/bumla.sass', './.tmp/sass/**.sass'])
//   .pipe(
//     converter({
//       from: 'sass',
//       to: 'scss'
//     })
//   )
//   .pipe(vfs.dest('./dist'));

(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var converter = require('sass-convert');
  var sassdoc = require('sassdoc');

  gulp.task('sync', function() {
    gulp
      .src('./.tmp/bulma.sass')
      .pipe(converter({ from: 'sass', to: 'scss' }))
      .pipe(gulp.dest('dist'));
  });
})();
