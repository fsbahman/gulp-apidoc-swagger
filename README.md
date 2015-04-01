# [gulp](https://github.com/gulpjs/gulp)-apidoc-swagger


> Swagger json schema generator via apidoc.


  apidoc documentation at [apidocjs.com](http://apidocjs.com/)
  
  swagger documentation at [swagger.io](http://swagger.io/)


Uses the [apidoc-swagger](https://github.com/fsbahman/apidoc-swagger).


## Install

Install with [npm](https://npmjs.org/package/gulp-apidoc-swagger)

```
npm install --save-dev gulp-apidoc-swagger
```


## Usage

```js
var gulp = require('gulp'),
    swaggerGenerator = require('gulp-apidoc-swagger');

gulp.task('swaggerGenerator', function(){
          swaggerGenerator.exec({
            src: "api/",
            dest: "doc/"
          });
});
```