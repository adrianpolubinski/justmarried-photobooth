const gulp = require('gulp');

const backendTask = () => {
  const runTasks = gulp.series(
    'backendClean',
    gulp.parallel(
      'backendControllers',
      'backendMiddleware',
      'backendModels',
      'backendRoutes',
      'backendServer'
    ),
    gulp.parallel('backendViews', 'backendScss', 'backendJs', 'backendImages', 'backendFonts'),
    'backendBrowserSync'
  );
  runTasks();
};

gulp.task('backend', backendTask);
module.exports = backendTask;
