const gulp = require("gulp");

const defaultTask = async () => {
    const runTasks = gulp.series("imgLoad", "nunjucks", "sass", "webpack", "browserSync");

    runTasks();
}

  gulp.task('default', defaultTask);
  module.exports = defaultTask;
