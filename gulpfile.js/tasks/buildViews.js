const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');

const buildViewsTask = () => {
  return gulp
    .src('src/views/**/*.njk')
    .pipe(
      htmlMin({
        sortAttributes: true,
        sortClassName: true,
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest('dist/public/views/'));
};

gulp.task('buildViews', buildViewsTask);
module.exports = buildViewsTask;
