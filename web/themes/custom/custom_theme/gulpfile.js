const gulp        = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify    = require('gulp-minify')
const cleanCSS    = require('gulp-clean-css');
const rename      = require('gulp-rename');
const prefixer    = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['src/scss/style.scss'])
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest("src/css"));
});


gulp.task('default', gulp.series('sass'));

