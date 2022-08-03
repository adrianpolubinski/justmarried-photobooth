const gulp = require("gulp");
const del = require("del");

  const cleanTask = () => {
    return del(["public"]);
  }

  gulp.task('clean', cleanTask);
module.exports = cleanTask;
