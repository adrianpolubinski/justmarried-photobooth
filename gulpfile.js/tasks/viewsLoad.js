const gulp = require("gulp");

const viewsLoadTask = () => {
    return gulp.src('./src/views/**/*.njk')
    .pipe(gulp.dest('./public/views'));
}

gulp.task('viewsLoad', viewsLoadTask);
module.exports = viewsLoadTask;
