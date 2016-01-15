'use strict';

var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src(['app/styles/style.scss'])
    .pipe(sass())
    .pipe(gulp.dest('app/styles'));
});

//browser-reload
gulp.task('browser-reload', browserSync.reload);

gulp.task('watch', function() {
  browserSync({
    server: {
      baseDir: 'app/'
    }
  });

gulp.watch('app/*/*.html', ['browser-reload']);
gulp.watch('app/styles/*.scss', ['sass', 'browser-reload']);
gulp.watch('app/*/*.js', ['browser-reload']);

});