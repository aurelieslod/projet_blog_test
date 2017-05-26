var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'blog'
    },
    port: 3000,
    db: 'mysql://root@localhost/blog_development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'blog'
    },
    port: 3000,
    db: 'mysql://root@localhost/blog_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'blog'
    },
    port: 3000,
    db: 'mysql://root@localhost/blog_production'
  }
};

module.exports = config[env];
