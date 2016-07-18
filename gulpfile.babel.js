'use strict';

import gulp 	  from 'gulp';
import babel    from 'gulp-babel';
import jshint   from 'gulp-jshint';
import nodemon  from 'gulp-nodemon';

let paths = {
	build: {
		dir: './build',
		output: './build/app.js'
	},
	watch: {
		dir: './src',
		js: './src/**/*.js'
	},
	gulp: './gulpfile.js'
};

gulp.task('default',['nodemon']);

gulp.task('nodemon',['jshint','transpilate'], () => {
	return nodemon({
		script: paths.build.output,
		watch: [paths.watch.dir],
		env: {
			port: process.env.PORT || 3000
		},
		tasks: ['jshint','transpilate']
	});
});

gulp.task('transpilate', () => {
	gulp.src(paths.watch.js)
	.pipe(babel())
	.pipe(gulp.dest(paths.build.dir));
});

gulp.task('jshint', () => {
	gulp.src([paths.watch.js,paths.gulp])
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});
