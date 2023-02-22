var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
      proxy: 'localhost/tailwind-php/app/site',
      port: 8080
    });
    // gulp.watch("./app/site/style.css");
    gulp.watch("./app/site/*.php").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));