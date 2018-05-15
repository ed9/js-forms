let gulp = require('gulp'),
    closureCompiler = require('google-closure-compiler').gulp();

gulp.task('build', function () {
    return gulp.src('./src/*.js', {base: './'})
        .pipe(closureCompiler({
            compilation_level: 'ADVANCED_OPTIMIZATIONS',
            warning_level: 'QUIET',
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            output_wrapper: '(function(){\n%output%\n}).call(this)',
            js_output_file: 'jsUtil.js',
            js: [
                './src/numbers/*.js'
            ]
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/js/**/*.js', ['build']);
});

gulp.task('default', ['build']);