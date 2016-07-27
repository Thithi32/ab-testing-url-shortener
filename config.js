var config = {};

config.webhost = process.env.WEBHOST || 'http://localhost:3000/';
config.db = process.env.MONGODB_URI || 'mongodb://localhost/url_shortener';
config.port = process.env.PORT || 3000;

module.exports = config;
