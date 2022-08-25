const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");

const frontendImagesTask = () => {
    return gulp
      .src("src/img/**/*.{jpg,jpeg,png,gif}")
      .pipe(changed("public/img/"))
      .pipe(imagemin())
      .pipe(gulp.dest("public/img/"));
}

gulp.task('frontendImages', frontendImagesTask);
module.exports = frontendImagesTask;
