'use strict';

module.exports = function() {
	$.gulp.task('sass', function() {
		return $.gulp.src('./source/style/app.sass')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass({includePaths: $.bourbon.includePaths})).on('error', $.gp.notify.onError({ title: 'Style' }))
		.pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest($.config.root + '/assets/css'))
		.pipe($.browserSync.stream());
	})
};
