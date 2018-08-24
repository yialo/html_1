'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('style', function() {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task('markup', function() {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
});
