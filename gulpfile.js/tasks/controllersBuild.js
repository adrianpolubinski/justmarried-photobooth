const gulp = require("gulp");
const uglify = require("gulp-uglify");

  const controllersBuildTask = () => {
    return gulp
      .src(["controllers/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("dist/controllers/"));
  }

  gulp.task('controllersBuild', controllersBuildTask);
  module.exports = controllersBuildTask;
