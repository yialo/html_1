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
  .pipe(server.stream());
});

gulp.task('html', function() {
  return gulp.src('*.html')
  .pipe(posthtml([include()]))
  .pipe(gulp.dest('build'));
});

gulp.task('serve', ['style'], function() {
  return server.init({
    server: 'source/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', ['style']);
  gulp.watch('source/*.html').on('change', server.reload);
});
