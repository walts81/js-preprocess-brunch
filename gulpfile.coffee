gulp = require('gulp')
coffee = require('gulp-coffee')

gulp.task 'default', (done) ->
  gulp.src './src/index.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest('./lib')
  done()
  return
