const gulp = require("gulp");

  const buildTask = () => {
    gulp.series(
        "cleanBuild",
        gulp.parallel("nunjucks", "sass"),
        gulp.parallel("htmlBuild", "cssBuild", "imgLoadBuild", "jsBuild"),
        "serverBuild",
        "clean"
      )
  }

  gulp.task('build', buildTask);
  module.exports = buildTask;
