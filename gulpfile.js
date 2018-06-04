var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var image = require('gulp-image');

gulp.task('sass', function(){
	return gulp.src('src/styles/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/styles/_compiled'))
		.pipe(browserSync.reload({
			stream:true
		}))
});


gulp.task('jsConcat', function(){
	return gulp.src('src/scripts/babelCompiled/*.js')
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('src/scripts/concatenated'))
})

gulp.task('cssMinify', function(){
	return gulp.src('src/styles/_compiled/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('build/styles'))
});

gulp.task('babel', function(){
	return gulp.src('src/scripts/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('src/scripts/babelCompiled'))
});

gulp.task('uglify', function(){
	return gulp.src('src/scripts/concatenated/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/scripts'))
});

gulp.task('image', function() {
  return gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('build/images'));
});


gulp.task('watch', ['browserSync', 'sass', 'cssMinify'], function(){
	gulp.watch('src/styles/**/*.scss', function(){
		runSequence('sass', 'cssMinify', browserSync.reload);});

	gulp.watch('src/scripts/*.js', function(){
		runSequence('babel', 'jsConcat', 'uglify');});
	//reloads browser whenever HTML or JS files change
	gulp.watch('build/*.html', browserSync.reload);
	gulp.watch('build/scripts/*.js', browserSync.reload);
	
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'build'
		},
	})
});
