const gulp = require("gulp");
const uglify = require("gulp-uglify");

  const buildMiddlewareTask = () => {
    return gulp
      .src(["middleware/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("dist/middleware/"));
  }

gulp.task('buildMiddleware', buildMiddlewareTask);
module.exports = buildMiddlewareTask;
