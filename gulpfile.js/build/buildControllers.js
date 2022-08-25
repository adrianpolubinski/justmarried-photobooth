const gulp = require("gulp");
const uglify = require("gulp-uglify");

  const buildControllersTask = () => {
    return gulp
      .src(["src/controllers/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("dist/controllers/"));
  }

  gulp.task('buildControllers', buildControllersTask);
  module.exports = buildControllersTask;
