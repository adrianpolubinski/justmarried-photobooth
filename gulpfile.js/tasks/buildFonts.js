const gulp = require("gulp");

const buildFontsTask = () => {
    return gulp.src('./src/fonts/**.*')
    .pipe(gulp.dest('./dist/fonts'));

}

gulp.task('buildFonts', buildFontsTask);
module.exports = buildFontsTask;
