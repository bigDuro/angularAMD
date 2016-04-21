module.exports = function(grunt){

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		requirejs : {
			compile : {
				options : {
					baseUrl : '../',
					mainConfigFile : 'angularAMD/app/js/main.js',
					wrapShim : true,
					optimize : 'none',
					optimizeCss : 'none',
					include : ['app'],
					out : 'app/dist/<%= pkg.name %>.min.js'
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/js/*.js', 'app/js/**/*.js'],
				tasks: ['requirejs:compile', 'http-server'],
				options: {
					spawn: false,
				},
			},
		},
		'http-server': {
		    'dev': {
		        // the server root directory 
		        root: '', 
		        port: 8080,
		        cache: false,
		        showDir : true,
		        autoIndex: true,
		        ext: "html",
		        runInBackground: true,
		        openBrowser : false,
		        customPages: {}
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('default', ['http-server', 'watch']);
}