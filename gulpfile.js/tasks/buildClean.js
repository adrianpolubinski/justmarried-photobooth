const gulp = require("gulp");
const del = require("del");

const buildCleanTask = () => {
    return del(["dist"]);
}

gulp.task('buildClean', buildCleanTask);
module.exports = buildCleanTask;
