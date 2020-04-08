const gulp = require('gulp')
const rename = require('gulp-rename')

module.exports = function scripts(cb) {
	gulp.src('./src/**/**.js')
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(['./build']))
	return cb()
}
