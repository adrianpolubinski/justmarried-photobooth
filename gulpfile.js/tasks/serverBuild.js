const gulp = require("gulp");

  const serverBuildTask = () => {
    "serverBuild",
    gulp.parallel(
      "controllersBuild",
      "middlewareBuild",
      "modelsBuild",
      "routesBuild",
      "appjsBuild"
    )
  }

  gulp.task('serverBuild', serverBuildTask);
module.exports = serverBuildTask;
