const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const browserSyncTask = () => {
  const files = [
    'src/fonts/**/*.{woff, woff2}',
    'src/img/**/*.{jpg,jpeg,png,gif}',
    'src/views/**/*.njk',
    'src/scss/**/*.scss',
    'src/js/**/*.js'
  ];

  gulp.watch(['src/fonts/**/*.{woff, woff2}']).on('change', gulp.parallel('fontsLoad'));
  gulp.watch(['src/img/**/*.{jpg,jpeg,png,gif}']).on('change', gulp.parallel('imgLoad'));
  gulp.watch(['src/views/**/*.njk']).on('change', gulp.parallel('nunjucks'));
  gulp.watch(['src/scss/**/*.scss']).on('change', gulp.parallel('sass'));
  gulp.watch(['src/js/**/*.js']).on('change', gulp.parallel('webpack'));

  browserSync.init(files, {
    server: 'public/'
  });
};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
