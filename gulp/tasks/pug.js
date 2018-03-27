module.exports = function () {
	// Pug
	$.gulp.task('pug', function() {
		return $.gulp.src('src/pug/pages/*.pug')
			.pipe($.gp.pug({
				pretty: true
			}))
			.pipe($.gulp.dest('build'))
			.on('end', $.br.reload);
	});
}
