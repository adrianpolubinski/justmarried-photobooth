const gulp = require("gulp");
const uglify = require("gulp-uglify");

  const buildModelsTask = () => {
    return gulp
    .src(["src/models/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest("dist/models/"));
  }

  gulp.task('buildModels', buildModelsTask);
module.exports = buildModelsTask;
