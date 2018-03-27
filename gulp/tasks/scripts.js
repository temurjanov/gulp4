module.exports = function () {
	// JS
	$.gulp.task('scripts', function() {
		return $.gulp.src([
				'node_modules/jquery/dist/jquery/jquery.min.js',
				'node_modules/slick-carousel/slick/slick.min.js'
			])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('build/js'));
			.pipe($.bs.reload({
				stream: true
			}));
	});
}
