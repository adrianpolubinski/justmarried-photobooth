const gulp = require("gulp");
const uglify = require("gulp-uglify");

  const modelsBuildTask = () => {
    return gulp
    .src(["models/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest("dist/models/"));
  }

  gulp.task('modelsBuild', modelsBuildTask);
module.exports = modelsBuildTask;
