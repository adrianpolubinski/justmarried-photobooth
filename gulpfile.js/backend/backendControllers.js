const gulp = require("gulp");

  const backendControllersTask = () => {
    return gulp
      .src(["src/controllers/*.js"])
      .pipe(gulp.dest("dev/controllers/"));
  }

  gulp.task('backendControllers', backendControllersTask);
  module.exports = backendControllersTask;
