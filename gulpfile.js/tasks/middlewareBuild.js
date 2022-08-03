const gulp = require("gulp");
const uglify = require("gulp-uglify");

  const middlewareBuildTask = () => {
    return gulp
      .src(["middleware/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("dist/middleware/"));
  }

gulp.task('middlewareBuild', middlewareBuildTask);
module.exports = middlewareBuildTask;
