var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');

gulp.task('compress', function() {
  return gulp.src('index.js')
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress']);
