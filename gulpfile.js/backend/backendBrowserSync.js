const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const backendBrowserSyncTask = () => {
  const files = [
    'src/fonts/**/*.{woff, woff2}',
    'src/img/**/*.{jpg,jpeg,png,gif}',
    'src/views/**/*.njk',
    'src/scss/**/*.scss',
    'src/js/**/*.js',
    'src/controllers/**/*.js',
    'src/middleware/**/*.js',
    'src/models/**/*.js',
    'src/routes/**/*.js',
    'src/server.js'
  ];

  gulp.watch(files[0]).on('change', gulp.parallel('backendFonts'));
  gulp.watch(files[1]).on('change', gulp.parallel('backendImages'));
  gulp.watch(files[2]).on('change', gulp.parallel('backendViews'));
  gulp.watch(files[3]).on('change', gulp.parallel('backendScss'));
  gulp.watch(files[4]).on('change', gulp.parallel('backendJs'));
  gulp.watch(files[5]).on('change', gulp.parallel('backendControllers'));
  gulp.watch(files[6]).on('change', gulp.parallel('backendMiddleware'));
  gulp.watch(files[7]).on('change', gulp.parallel('backendModels'));
  gulp.watch(files[8]).on('change', gulp.parallel('backendRoutes'));
  gulp.watch(files[9]).on('change', gulp.parallel('backendServer'));

  browserSync.init(files, {
    server: 'dev/public/',
    port: 3001
  });
};

gulp.task('backendBrowserSync', backendBrowserSyncTask);
module.exports = backendBrowserSyncTask;
