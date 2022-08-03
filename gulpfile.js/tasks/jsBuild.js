const gulp = require("gulp");
const webpack = require("webpack-stream");

const jsBuildTask = () => {
    return gulp
      .src("src/js/**/*.js")
      .pipe(
        webpack({
          mode: "production",
        })
      )
      .pipe(gulp.dest("dist/public"));
}

  gulp.task('jsBuild', jsBuildTask);
  module.exports = jsBuildTask;
