'use strict';
module.exports = function (grunt) {

	grunt.initConfig({
		// Sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
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

		// BrowserSync
		browserSync: {
			dev: {
				bsFiles: {
					src: ['sass/*', '*.html']
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		},

		// Watch
		watch: {
			pages: {
        files: ['*.html'], // which files to watch
        options: {
          nospawn: true,
          livereload: true
        }
      },
			styles: {
        files: ['sass/**/*'],
        tasks: ['sass', 'postcss'],
        options: {
          nospawn: true,
          livereload: true
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
  ])

	// default
	grunt.registerTask('default', [
    'build',
    'server'
  ]);

};
