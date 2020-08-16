var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', function () {

	return gulp.src([
		'app.ts',
		'routes/**/*.ts',
	], {base: './'})
		.pipe(sourcemaps.init())
		.pipe(typescript({target: "ES6", removeComments: true}))
		.js
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));

});

gulp.task('default', gulp.series('compile'), function () {

});