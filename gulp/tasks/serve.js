module.exports = function () {
	// Static server
	$.gulp.task('serve', function() {
	  $.br.init({
	    server: {
	      baseDir: "./build"
	    }
	  });
	});
}
