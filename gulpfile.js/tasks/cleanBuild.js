const gulp = require("gulp");
const del = require("del");
  const cleanBuildTask = () => {
    return del(["dist/", "public"]);
  }

gulp.task('cleanBuild', cleanBuildTask);
module.exports = cleanBuildTask;
