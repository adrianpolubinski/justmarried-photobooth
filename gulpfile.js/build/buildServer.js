const gulp = require("gulp");
const uglify = require("gulp-uglify");


const buildServerTask = () => {
    return gulp
        .src(["src/server.js"])
        .pipe(uglify())
        .pipe(gulp.dest("dist/"));
}

gulp.task('buildServer', buildServerTask);
module.exports = buildServerTask;
