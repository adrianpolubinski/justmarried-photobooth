const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

 const cssBuildTask = () => {
    return gulp
      .src("public/main.css")
      .pipe(cleanCSS())
      .pipe(gulp.dest("dist/public"));
  }

  gulp.task('cssBuild', cssBuildTask);
module.exports = cssBuildTask;
