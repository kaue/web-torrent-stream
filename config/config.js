var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'web-torrent-stream'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/web-torrent-stream-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'web-torrent-stream'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/web-torrent-stream-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'web-torrent-stream'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/web-torrent-stream-production'
  }
};

module.exports = config[env];
