const gulp = require("gulp");

const backendServerTask = () => {
    return gulp
        .src(["src/server.js"])
        .pipe(gulp.dest("dev/"));
}

gulp.task('backendServer', backendServerTask);
module.exports = backendServerTask;
