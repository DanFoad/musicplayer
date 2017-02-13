var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('style/main.scss')
        .pipe(sass({style: 'expanded'}))
        .pipe(gulp.dest('style'));
});
