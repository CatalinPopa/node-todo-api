var env = process.env.NODE_ENV || 'developement';

if (env === 'developement' || end === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
