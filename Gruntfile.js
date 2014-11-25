module.exports = function (grunt) {
  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  // Default task(s).
  grunt.registerTask('default', ['nodewebkit']);

}