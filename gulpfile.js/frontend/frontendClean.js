const gulp = require("gulp");
const del = require("del");

  const frontendCleanTask = () => {
    return del(["public"]);
  }

  gulp.task('frontendClean', frontendCleanTask);
module.exports = frontendCleanTask;
