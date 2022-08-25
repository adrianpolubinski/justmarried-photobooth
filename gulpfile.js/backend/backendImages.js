const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");

const backendImagesTask = () => {
    return gulp
      .src("src/img/**/*.{jpg,jpeg,png,gif}")
      .pipe(changed("dev/public/img/"))
      .pipe(imagemin())
      .pipe(gulp.dest("dev/public/img/"));
}

gulp.task('backendImages', backendImagesTask);
module.exports = backendImagesTask;
