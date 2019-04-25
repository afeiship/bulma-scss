(function() {
  'use strict';

  var gulp = require('gulp');
  var fs = require('fs');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  /**
   * @thanks to:
   * http://www.jianshu.com/p/d616d3bf391f
   */

  gulp.task('version', function() {
    var srcPkg = require('../package.json');
    var targetPkg = require('../.tmp/bulma/package.json');
    srcPkg.version = targetPkg.version;
    fs.writeFileSync('./package.json', JSON.stringify(srcPkg, null, 2));
  });
})();
