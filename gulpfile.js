var gulp = require('gulp'),
    maintask = require('./index.js');

gulp.task('default', maintask.exec({
		src: "api/",
        dest: "docs/",
}));