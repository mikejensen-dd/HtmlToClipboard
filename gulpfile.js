//gulp
const gulp = require('gulp');

//load all plugins in "devDependencies" into the variable $
const $ = require('gulp-load-plugins')({
	pattern: ['*'],
	scope: ['devDependencies'],
});

//change the linting engine to use ES6 with gulp-uglify
const composer = require('gulp-uglify/composer');
const minify = composer($.uglifyEs, console);

const config = {
	uglify: {
		mangle: false,
		output: {
			beautify: true,
			indent_level: 2,
		},
	},
};

gulp.task('default', ['build']);

//build and lint ./dist/DealDash_CS.user.js
gulp.task('build', function(cb) {
	$.pump([
		gulp.src('./html-to-clipboard.js'),
		minify(config.uglify),
		gulp.dest('./dist/'),
	],
	cb
	);
});