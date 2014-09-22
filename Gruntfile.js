/*jshint sub:true*/

module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed',
					debugInfo: true,
					noCache: true
				},
				files: {
					'app/stylesheets/all.css': 'app/stylesheets/all.scss' 
				}
			}
		},

		emberTemplates: {
			compile: {
				options: {
					templateBasePath: /app\/templates\//,
					preprocess: function(source){
						return source.replace(/\s+g/, '');
					}
				},
				files: {
					"app/templates/compiledTemplates.js": "app/templates/**/*.hbs"
				}	
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'app/**/*.js'],
			options: {
					"sub": true,
					globals: {
						"jQuery": true,
						"console": true,
						"module": true,
						"document": true
					}
			}
		},

		uglify: {
		  options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		  },
		  dist: {
			files: {
			  'app/all.min.js': ['app/app.js']
			}
		  }
		},

		watch: {
			options: {
		      livereload: true,
		    },
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile'],
			},
			scripts: {
				files: ['app/ember/**/*.js', 'app/stylesheets/**/*.scss', 'app/templates/**/*.hbs'],
				tasks: ['development', 'jshint', 'sass', 'emberTemplates']
			}
		}
	});

	grunt.registerTask('development', ['sass', 'emberTemplates', 'jshint', 'watch']);
	grunt.registerTask('production', ['sass', 'emberTemplates', 'jshint', 'uglify']);
	grunt.registerTask('test', ['jshint']);
};