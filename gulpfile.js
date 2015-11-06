/**********************
 * Semantic-UI *
 *********************/

var 
  gulp = require('gulp'),
  watchSemantic = require('./semantic/tasks/watch'),
  buildSemantic = require('./semantic/tasks/build')
;

/**********************
  * Tasks *
 *********************/

gulp.task('watch-ui', watchSemantic);
gulp.task('build-ui', buildSemantic);

