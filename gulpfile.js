const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('scss', () =>
  gulp
    .src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream()),
);

gulp.task('html', () =>
  gulp
    .src('./src/index.html')
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream()),
);
gulp.task('js', () =>
  gulp
    .src('./src/*.js')
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream()),
);

gulp.task('watch', () => {
  browserSync.init({
    server: './public',
  });

  gulp.watch('./src/*.scss', gulp.series('scss'));
  gulp.watch('./src/index.html', gulp.series('html'));
  gulp.watch('./src/*.js', gulp.series('js'));
});
