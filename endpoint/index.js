'use strict';

// Register the Babel require hook
require('babel-core/register')({
  only: /generator-macend\/(?!node_modules)/
});

// Export the generator
exports = module.exports = require('./generator');
