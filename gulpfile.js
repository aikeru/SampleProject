"use strict";
const gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    mocha = require('gulp-mocha'),
    importsRenamer = require('gulp-es6-imports-renamer');

const applicationFiles = ['evaluator/**/*.jsx', 'generator/**/*.jsx', 'shared/**/*.jsx'];
const testFiles = ['tests/**/*.jsx'];

function onMochaError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', ['babel']);

gulp.task('watch', () => {
    watch(applicationFiles, () => {
        gulp.start('babel');
    });
});

gulp.task('watch-test', () => {
    watch(applicationFiles.concat(testFiles), () => {
        gulp.start('mocha');
    });
});

gulp.task('mocha', () => {
    gulp.src('./tests/bootstrap.tests.jsx', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
        .on("error", onMochaError);
});

gulp.task('babel', () => {
    return gulp.src('**/*.jsx')
        .pipe(importsRenamer({
            renameFn: (sourceImportedFile, sourceFileName, renameFn) => {
                renameFn(null, sourceImportedFile.replace('.jsx', '.js'));
            }
        }))
        .pipe(babel({
            presets: ['es2015', 'stage-0'],
            plugins: ['transform-regenerator']
        }))
        .pipe(gulp.dest(''));
});