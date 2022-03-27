const gulp = require("gulp");
const replace = require("gulp-replace");
const concat = require("gulp-concat");
const gap = require("gulp-append-prepend");
const css2js = require("gulp-css2js");

gulp.task("unite-css", () => {
  return gulp
    .src("./build/static/css/*.css")
    .pipe(concat("styles.css"))
    .pipe(css2js({ splitOnNewline: false }))
    .pipe(gulp.dest("./build/static/js"));
});

gulp.task("bundle", () => {
  return gulp
    .src("./build/static/js/*.js")
    .pipe(concat("bundle.js"))
    .pipe(replace("ReactDom", "ReactDOM"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("add-react", () => {
  return gulp
    .src("./dist/bundle.js")
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", gulp.series("unite-css", "bundle", "add-react"));
