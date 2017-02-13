var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('style/main.sass')
        .pipe(sass({style: 'expanded'}))
        .pipe(gulp.dest('style'));
});
