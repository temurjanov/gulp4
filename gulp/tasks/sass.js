module.exports = function () {
	// Sass
	$.gulp.task('sass', function() {
		return $.gulp.src('src/static/sass/**/*.sass')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer({
				browsers: ['last 10 versions']
			}))
			.on("error", $.gp.notify.onError({
	      title: "SaSS Error"
	    }))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/css'))
			.pipe($.br.reload({
				stream: true
			}));
	});
}
