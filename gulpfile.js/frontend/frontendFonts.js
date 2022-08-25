const gulp = require("gulp");

const frontendFontsTask = () => {
    return gulp.src('./src/fonts/**.*')
    .pipe(gulp.dest('./public/fonts'));

}

gulp.task('frontendFonts', frontendFontsTask);
module.exports = frontendFontsTask;
