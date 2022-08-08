const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const backendBrowserSyncTask = () => {
  const files = [
    'src/fonts/**/*.{woff, woff2}',
    'src/img/**/*.{jpg,jpeg,png,gif}',
    'src/views/**/*.njk',
    'src/scss/**/*.scss',
    'src/js/**/*.js'
  ];

  gulp.watch(files[0]).on('change', gulp.parallel('fontsLoad'));
  gulp.watch(files[1]).on('change', gulp.parallel('imgLoad'));
  gulp.watch(files[2]).on('change', gulp.parallel('viewsLoad'));
  gulp.watch(files[3]).on('change', gulp.parallel('sass'));
  gulp.watch(files[4]).on('change', gulp.parallel('webpack'));

  browserSync.init(files, {
    server: 'public/'
  });
};

gulp.task('backendBrowserSync', backendBrowserSyncTask);
module.exports = backendBrowserSyncTask;
