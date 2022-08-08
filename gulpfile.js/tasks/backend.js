const gulp = require('gulp');

const backendTask = () => {
  const runTasks = gulp.series(
    'fontsLoad',
    'imgLoad',
    'viewsLoad',
    'sass',
    'webpack',
    'backendBrowserSync'
  );
  runTasks();
};

gulp.task('backend', backendTask);
module.exports = backendTask;
