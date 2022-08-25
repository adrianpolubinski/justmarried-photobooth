const gulp = require("gulp");
const uglify = require("gulp-uglify");

const buildRoutesTask = () => {
    return gulp
      .src(["routes/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("dist/routes/"));
  }

gulp.task('buildRoutes', buildRoutesTask);
module.exports = buildRoutesTask;
