const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

const buildImagesTask = () => {
    return gulp
      .src("src/img/**/*.{jpg,jpeg,png,gif}")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/public/img/"));
}

gulp.task('buildImages', buildImagesTask);
module.exports = buildImagesTask;
