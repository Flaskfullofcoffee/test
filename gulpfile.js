var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// The basic syntax of a gulp task is:
// gulp.task('task-name', function() {
//   // stuff here
// })

gulp.task('test', function(){
  console.log('this is only a test');
});


// Here's what a real task may look like
// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })


gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
});


// Gulp watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
// EX: gulp.watch('scss/*.scss', ['sass']);

// we can group together multiple watch processes into a watch task

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
})




gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
