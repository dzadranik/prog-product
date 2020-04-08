const gulp = require('gulp')

module.exports = function images() {
	return gulp.src('./src/assets/**/**/**.*').pipe(gulp.dest('./build/'))
}
