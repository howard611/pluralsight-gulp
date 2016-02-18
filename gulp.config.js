module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';
  var server = './src/server/';

  var config = {
    /**
    * File paths
    */

    // all js to vet
    alljs: [
      './src/**/*.js',
      './*.js'
    ],

    build: './build/',
    client: client,
    fonts: './bower_components/font-awesome/fonts/**/*.*',
    index: client + 'index.html',
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    css: temp + 'styles.css',

    less: client + 'styles/styles.less',
    server: server,
    temp: temp,

    browserReloadDelay: 1000,


    /**
    * Bower and NPM locations
    **/

    bower: {
      json: require('./bower.json'),
      directory: './bower_components',
      ignorePath: '../..'
    },

    /**
    * Node settings
    */

    defaultPort: 7203,
    nodeServer: './src/server/app.js'
  };

  config.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };

    return options;
  };

  return config;
};
