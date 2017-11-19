'use strict';

module.exports = function(grunt) {
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
	dist: {
		files: {			
				'assets/css/styles.css' : 'assets/sass/styles.scss'	
				}
		}
	},
	watch: {
		css: {
			files: 'assets/sass/*.scss',
			tasks: ['sass']
		},
		scripts: {
			files: '<%=  jshint.files.src %>',
			tasks: ['jshint']

		}
	},
	jshint: {
		options: {
		curly: true,
		eqeqeq: true,
		globals: {
			jQuery: true
		},
	},
		files: {
			src: ['assets/js/*.js']
			}
	}
});

// Load plugins
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');

// Register tasks
grunt.registerTask('default', ['watch']);

};

