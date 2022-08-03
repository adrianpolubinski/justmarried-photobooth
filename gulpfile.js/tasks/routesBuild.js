const gulp = require("gulp");
const uglify = require("gulp-uglify");

const routesBuildTask = () => {
    return gulp
      .src(["routes/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("dist/routes/"));
  }

gulp.task('routesBuild', routesBuildTask);
module.exports = routesBuildTask;
