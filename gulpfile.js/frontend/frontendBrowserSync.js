const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const frontendBrowserSyncTask = () => {
  const files = [
    'src/fonts/**/*.{woff, woff2}',
    'src/img/**/*.{jpg,jpeg,png,gif}',
    'src/views/**/*.njk',
    'src/scss/**/*.scss',
    'src/js/**/*.js'
  ];

  gulp.watch(['src/fonts/**/*.{woff, woff2}']).on('change', gulp.parallel('frontendFonts'));
  gulp.watch(['src/img/**/*.{jpg,jpeg,png,gif}']).on('change', gulp.parallel('frontendImages'));
  gulp.watch(['src/views/**/*.njk']).on('change', gulp.parallel('frontendViews'));
  gulp.watch(['src/scss/**/*.scss']).on('change', gulp.parallel('frontendScss'));
  gulp.watch(['src/js/**/*.js']).on('change', gulp.parallel('frontendJs'));

  browserSync.init(files, {
    server: 'public/'
  });
};

gulp.task('frontendBrowserSync', frontendBrowserSyncTask);
module.exports = frontendBrowserSyncTask;
