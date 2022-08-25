const gulp = require('gulp');

const frontendTask = async () => {
  const runTasks = gulp.series(
    'frontendClean',
    'frontendFonts',
    'frontendImages',
    'frontendViews',
    'frontendScss',
    'frontendJs',
    'frontendBrowserSync'
  );
  runTasks();
};
gulp.task('frontend', frontendTask);
module.exports = frontendTask;
