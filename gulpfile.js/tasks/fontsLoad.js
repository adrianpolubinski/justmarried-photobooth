const gulp = require("gulp");

const fontsLoadTask = () => {
    return gulp.src('./src/fonts/**.*')
    .pipe(gulp.dest('./public/fonts'));

}

gulp.task('fontsLoad', fontsLoadTask);
module.exports = fontsLoadTask;
