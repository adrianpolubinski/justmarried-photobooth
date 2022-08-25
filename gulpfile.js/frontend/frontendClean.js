const gulp = require("gulp");
const del = require("del");

  const frontendCleanTask = () => {
    return del(["dev"]);
  }

  gulp.task('frontendClean', frontendCleanTask);
module.exports = frontendCleanTask;
