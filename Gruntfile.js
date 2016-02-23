'use strict';
module.exports = function (grunt) {

	grunt.initConfig({
		// Sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded'
			},
			build: {
				files: {
					'css/style.css': 'sass/style.scss'
				}
			}
		},

		// PostCSS
		postcss: {
			options: {
				map: true,

				processors: [
          require('autoprefixer')({
						browsers: 'last 8 versions' // add vendor prefixes
					}),
        ]
			},
			build: {
				src: 'css/*.css'
			}
		},

		// Watch
		watch: {
			options: {
      	spawn: false,
				livereload: true
      },
			pages: {
        files: ['*.html']
      },
			styles: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss']
      }
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'*.html',
						'css/*.css'
					]
				},
				options: {
					watchTask: true,
					server: {
            baseDir: "./"
        	}
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	// build
	grunt.registerTask('build', [
    'sass',
    'postcss'
  ]);

	// server
	grunt.registerTask('server', [
		'browserSync',
		'watch'
	]);

	// default
	grunt.registerTask('default', [
    'build',
    'server'
  ]);

};
