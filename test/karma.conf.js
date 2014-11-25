module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'app/js/lib/angular.js',
            'app/js/lib/angular-mocks.js',
            'app/js/lib/jquery-2.1.1.min.js',
            'app/js/lib/*.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};