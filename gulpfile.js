'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	br: require('browser-sync').create(),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

// Default
$.gulp.task('default', $.gulp.series( 
	$.gulp.parallel('pug', 'sass', 'scripts'),
	$.gulp.parallel('watch', 'serve')
));