'use strict';

// Variables

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var include = require('posthtml-include');
var minify = require('gulp-csso');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var posthtml = require('gulp-posthtml');
var rename = require('gulp-rename');
var run = require('run-sequence');
var sass = require('gulp-sass');

// Task functions

var clean = function () {
  return del('build/');
}

var html = function () {
  return gulp.src('source/*html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build/'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/'));
}

var serve = function () {
  browserSync.init({
    server: 'source/'
  });
  gulp.watch('source/sass/**/*.scss', style);
  gulp.watch('source/*.html').on('change', browserSync.reload);
}

var style = function() {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css/'))
    .pipe(browserSync.stream());
}

// Gulp tasks

gulp.task('default', serve);

// gulp.task('build', gulp.series(style, html));
gulp.task('clean', clean);
gulp.task('html', html);
gulp.task('serve', serve);
gulp.task('style', style);
