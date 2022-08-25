const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");

const backendJsTask = () => {
    return gulp
      .src("src/js/**/*.js")
      .pipe(
        webpack({
          mode: "development",
        })
      )
      .pipe(gulp.dest("dev/public/"))
      .pipe(browserSync.stream());
}

gulp.task('backendJs', backendJsTask);
module.exports = backendJsTask;
