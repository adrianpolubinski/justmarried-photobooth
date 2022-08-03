const gulp = require("gulp");;
const htmlMin = require("gulp-htmlmin");

  const htmlBuildTask = () => {
    return gulp
      .src("public/*.html")
      .pipe(
        htmlMin({
          sortAttributes: true,
          sortClassName: true,
          collapseWhitespace: true,
        })
      )
      .pipe(gulp.dest("dist/public"));
  }

  gulp.task('htmlBuild', htmlBuildTask);
module.exports = htmlBuildTask;
