module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    serve: {
      options: {
        port: 9000
      }
    },
    nodewebkit: {
      options: {
        platforms: ['win','osx'],
        buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
      },
      src: [
        './app/**/*',
        'package.json'
      ]
    }
  })

  grunt.loadNpmTasks('grunt-serve');

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

}