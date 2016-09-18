'use strict';

var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/**
 * Builds out all app assets into the build folder. Cleans old build data before building everything back up.
 */
gulp.task('build', ['bundle-app', 'build-html', 'build-images', 'build-styles', 'build-vendor', 'build-api'], function() {
  console.log('Build Completed!');
  console.log('build can be found @ ' + config.build);
});

/**
 * Bundles the app in a single js file to be deployed in the build folder.
 */
gulp.task('bundle-app', function() {
  // TODO: Add version number to build and incrementations
  // this will force browser to get the most recent copy of the build
  
  // #TODO: cant seem to get barrels working with bundle, so for now move over all js files
  return $.jspmBuild({
    buildOptions: {
      minify: true,
      mangle: true
    },
    bundles: [
      { src: 'main', dst: 'build.js'},
    ],
    baseUrl: config.client,
    bundleSfx: true,
    defaultJSExtensions: true
  })
  .pipe($.uglify()) // uglify not working, possibly issue with jspmBuild having issues, it will work for now though
  .pipe(gulp.dest(config.build));
});

gulp.task('build-api', function() {
  return gulp.src('./api/**/*.php')
    .pipe(gulp.dest(config.build + 'api'));
});

/**
 * Copies over the html files to the build folder.
 */
gulp.task('build-html', function() {
  return gulp.src(config.client + 'index.html')
    .pipe($.useref())
    .pipe(gulp.dest(config.build));
});

/**
 * Copies over the images folder to the build folder.
 */
gulp.task('build-images', function() {
  return gulp.src(config.client + 'resources/**/*')
    .pipe(gulp.dest(config.build + 'resources/'));
});

/**
 * Builds the styles and places them in the build folder.
 */
gulp.task('build-styles', function() {
  // TODO: add building sass
  return gulp.src(config.client + 'styles/**/*.css')
    .pipe(gulp.dest(config.build + 'styles'));
});

gulp.task('build-vendor', function() {
  return gulp.src(config.client + 'vendor/**/*')
    .pipe(gulp.dest(config.build + 'vendor/'));
});

/**
 * Cleans the build folder.
 */
gulp.task('clean-build', function(done) {
  del(config.build + '**/*', done);
});

gulp.task('sass', function() {
  return gulp.src(config.sass + '**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.concat('styles.css'))
    .pipe(gulp.dest(config.styles));
});
