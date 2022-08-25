const gulp = require("gulp");

const backendViewsTask = () => {
    return gulp.src('./src/views/**/*.njk')
    .pipe(gulp.dest('./dev/public/views'));
}

gulp.task('backendViews', backendViewsTask);
module.exports = backendViewsTask;
