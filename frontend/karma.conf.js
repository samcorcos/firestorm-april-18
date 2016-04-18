// Karma configuration
// Generated on Sun Apr 17 2016 18:57:27 GMT-0400 (EDT)

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'app/tests/specs.webpack.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/tests/specs.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      captureConsole: true
    },

    // Webpack configuration
    webpack: {
      devtool: 'inline-source-map',
      plugins: [
        new ExtractTextPlugin('style.css', {
          allChunks: true
        })
      ],
      module: {
        loaders: [
          { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/, include: path.join(__dirname, 'app') },
          { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')}
        ]
      },
      postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
      resolve: {
        extensions: [ '', '.js', '.scss' ],
        modulesDirectories: [ 'app', 'node_modules' ]
      }
    }

  })
}
