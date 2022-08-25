const gulp = require("gulp");

const backendRoutesTask = () => {
    return gulp
      .src(["src/routes/*.js"])
      .pipe(gulp.dest("dev/routes/"));
  }

gulp.task('backendRoutes', backendRoutesTask);
module.exports = backendRoutesTask;
