'use strict';

var gutil = require('gulp-util');
var converter = require('apidoc-swagger');

module.exports = {
	exec : function(opt) {
		var options = opt || {};

		options.src = opt.src || opt.i ;
		options.dest = options.dest || options.o || "doc/";

		if(options.src){
			var result = converter.createApidocSwagger(options);			
			if(typeof result === "object"){
				gutil.log('gulp-apidoc:', gutil.colors.green('swagger.json created...'));				
			}
			else{
				throw new gutil.PluginError('gulp-apidoc-swagger', 'Execution terminated (set \" debug: true \" in gulpfile.js for details. ')
			}		
		}
		else{
			 throw new gutil.PluginError('gulp-apidoc-swagger', 'Source folder is not specified');
		}
	}
};