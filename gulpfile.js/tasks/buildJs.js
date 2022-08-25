const gulp = require("gulp");
const webpack = require("webpack-stream");

const buildJsTask = () => {
    return gulp
      .src("src/js/**/*.js")
      .pipe(
        webpack({
          mode: "production",
        })
      )
      .pipe(gulp.dest("dist/public"));
}

  gulp.task('buildJs', buildJsTask);
  module.exports = buildJsTask;
