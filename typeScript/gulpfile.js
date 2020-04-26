const { series  } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoJS() {
    return tsProject.src()
        .pipe(tsProject.src())
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoJS)