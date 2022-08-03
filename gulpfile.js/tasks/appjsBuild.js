const gulp = require("gulp");
const uglify = require("gulp-uglify");


const appjsBuildTask = () => {
    return gulp.src(["app.js"]).pipe(uglify()).pipe(gulp.dest("dist/"));
}

gulp.task('appjsBuild', appjsBuildTask);
module.exports = appjsBuildTask;
