"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const cleancss = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

const dist = "./dist/";

gulp.task("minify-html", () => {
    return gulp.src("./src/index.html")
                .pipe(htmlmin({ collapseWhitespace: true }))
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("images", () => {
  return gulp.src('./src/assets/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest(dist + 'assets/img/'))
  .on("end", browsersync.reload);
});

gulp.task("css", () => {
  return gulp.src("./src/assets/css/index.css")
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 5 versions'],
    grid: true
  }))
  .pipe(cleancss(( { level: { 1: { specialComments: 0 } } } )))
  .pipe(gulp.dest(dist + '/assets/css/'))
  .on("end", browsersync.reload);
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/index.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'index.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist + 'js/')) 
                .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
    return gulp.src(["./src/assets/**/*.*", "!./src/assets/less/*.less", "!./src/assets/img/**/*", "!./src/assets/css/index.css"])
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: dist, 
		port: 4000,
    notify: false,
    browser: 'chrome'
    });

    gulp.watch("./src/assets/img/**/*", gulp.parallel("images"));
    gulp.watch("./src/assets/css/index.css", gulp.parallel("css"));
    gulp.watch("./src/index.html", gulp.parallel("minify-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/index.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'index.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist + 'js/'));
});


gulp.task("build", gulp.parallel("minify-html", "images", "css", "copy-assets", "build-prod-js"));

gulp.task("default", gulp.parallel("watch", "build"));