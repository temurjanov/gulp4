module.exports = function () {
	// Watch
	$.gulp.task('watch', function() {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass'));
	});
}
