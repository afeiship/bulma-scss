(function() {
  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var shell = require('shelljs');
  var exec = shell.exec;

  //clean
  gulp.task('sync', function() {
    // clean:
    exec('rm -rf .tmp && mkdir -p .tmp/bulma');
    // clone:
    exec('git clone --depth=1 https://github.com/jgthms/bulma.git .tmp/bulma --verbose');
  });
})();
