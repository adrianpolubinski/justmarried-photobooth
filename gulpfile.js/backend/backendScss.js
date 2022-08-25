const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const sass = gulpSass(dartSass);
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");

const backendScssTask = () => {
    return gulp
      .src("src/scss/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("dev/public/"))
      .pipe(browserSync.stream());
}

gulp.task('backendScss', backendScssTask);
module.exports = backendScssTask;
