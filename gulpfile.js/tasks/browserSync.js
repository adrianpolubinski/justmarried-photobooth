const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const browserSyncTask = () => {
    const files = [
        'src/views/**/*.njk',
        'src/scss/**/*.scss',
        'src/js/**/*.js',
        'src/img/**/*.{jpg,jpeg,png,gif}'
     ];

    gulp.watch(["src/views/**/*.njk"]).on("change", gulp.parallel("nunjucks"));
    gulp.watch(["src/scss/**/*.scss"]).on("change", gulp.parallel("sass"));
    gulp.watch(["src/js/**/*.js"]).on("change", gulp.parallel("webpack"));
    gulp.watch(["src/img/**/*.{jpg,jpeg,png,gif}"]).on("change", gulp.parallel("imgLoad"));

    browserSync.init(files, {
        server: "public/",
    });
}

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
