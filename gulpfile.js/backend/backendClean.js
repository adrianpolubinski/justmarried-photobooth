const gulp = require("gulp");
const del = require("del");

  const backendCleanTask = () => {
    return del(["dev/"]);
  }

  gulp.task('backendClean', backendCleanTask);
module.exports = backendCleanTask;
