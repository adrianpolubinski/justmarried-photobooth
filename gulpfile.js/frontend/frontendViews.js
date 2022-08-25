const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const nunjucksRender = require("gulp-nunjucks-render");
const beautify = require("gulp-beautify");

const frontendViewsTask = () => {
    return gulp
      .src("src/views/pages/*.njk")
      .pipe(
        nunjucksRender({
          path: ["src/views"],
        })
      )
      .pipe(beautify.html({ indent_size: 4, preserve_newlines: false }))
      .pipe(gulp.dest("public/"))
      .pipe(browserSync.stream());
}

gulp.task('frontendViews', frontendViewsTask);
module.exports = frontendViewsTask;
