const gulp = require('gulp');

const defaultTask = async () => {
  const runTasks = gulp.series(
    'clean',
    'fontsLoad',
    'imgLoad',
    'nunjucks',
    'sass',
    'webpack',
    'browserSync'
  );
  runTasks();
};
gulp.task('default', defaultTask);
module.exports = defaultTask;
