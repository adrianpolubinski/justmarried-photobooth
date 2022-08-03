const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");

const webpackTask = () => {
    return gulp
      .src("src/js/**/*.js")
      .pipe(
        webpack({
          mode: "development",
        })
      )
      .pipe(gulp.dest("public/"))
      .pipe(browserSync.stream());
}

gulp.task('webpack', webpackTask);
module.exports = webpackTask;
