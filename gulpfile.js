'use strict';

const gulp = require('gulp');

gulp.task('default', function() {
	return gulp.src('less/**/*.*')
	.on('data', function(file){
		console.log(file);
	})	

	.pipe(gulp.dest('css'));
})