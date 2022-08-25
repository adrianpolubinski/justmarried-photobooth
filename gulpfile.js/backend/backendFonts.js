const gulp = require("gulp");

const backendFontsTask = () => {
    return gulp.src('./src/fonts/**.*')
    .pipe(gulp.dest('./dev/public/fonts'));

}

gulp.task('backendFonts', backendFontsTask);
module.exports = backendFontsTask;
