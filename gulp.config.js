module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';

  var config = {
    temp: temp,

    /**
    * File paths
    */

    // all js to vet
    alljs: [
      './src/**/*.js',
      './*.js'
    ],

    client: client,
    index: client + 'index.html',
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    css: temp + 'styles.css',

    less: client + 'styles/styles.less',

    /**
    * Bower and NPM locations
    **/

    bower: {
      json: require('./bower.json'),
      directory: './bower_components',
      ignorePath: '../..'
    }
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
