'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('default',['nodemon']);

gulp.task('nodemon',['jshint','transpilate'], function () {
	return nodemon({
		script: './build/app.js',
		watch: ['./src'],
		env: {
			port: 3000
		},
		tasks: ['jshint','transpilate']
	});
});

gulp.task('transpilate', function () {
	gulp.src('./src/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(gulp.dest('./build'));
});

gulp.task('jshint', function () {
	gulp.src(['./src/**/*.js','./gulpfile.js'])
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});
