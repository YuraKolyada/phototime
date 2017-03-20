var gulp = require('gulp'),
	browser = require('browser-sync').create(),
	less = require('gulp-less'),
	spritesmith = require('gulp.spritesmith'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});



gulp.task('server', function(){
	browser.init({
		server: {
			baseDir: './'
		}
	});
    gulp.watch('./less/*.less', ['less']);
    gulp.watch('./index.html').on('change', browser.reload);
});

gulp.task('less', function(){
	gulp.src('./less/*.less')
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(gulp.dest('dest/css'))
		.pipe(browser.stream());
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('src/images/icon/*.png')
		.pipe(spritesmith({
			imgName: 'icons.png',
			cssName: 'icons.css',
			padding: 15
		}));
	return spriteData.pipe(gulp.dest('dest/images/'));
});

gulp.task('default', ['server']);
