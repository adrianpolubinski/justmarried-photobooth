const gulp = require("gulp");

  const backendModelsTask = () => {
    return gulp
    .src(["src/models/*.js"])
    .pipe(gulp.dest("dev/models/"));
  }

  gulp.task('backendModels', backendModelsTask);
module.exports = backendModelsTask;
