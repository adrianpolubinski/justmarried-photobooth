const gulp = require("gulp");

  const backendMiddlewareTask = () => {
    return gulp
      .src(["src/middleware/*.js"])
      .pipe(gulp.dest("dev/middleware/"));
  }

gulp.task('backendMiddleware', backendMiddlewareTask);
module.exports = backendMiddlewareTask;
