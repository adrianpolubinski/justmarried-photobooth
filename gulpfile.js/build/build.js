const gulp = require('gulp');

const buildTask = () => {
  const runTasks = gulp.series(
    'buildClean',
    gulp.parallel('buildViews', 'buildScss', 'buildJs', 'buildImages', 'buildFonts'),
    gulp.parallel(
      'buildControllers',
      'buildMiddleware',
      'buildModels',
      'buildRoutes',
      'buildServer'
    )
  );
  runTasks();
};

gulp.task('build', buildTask);
module.exports = buildTask;
