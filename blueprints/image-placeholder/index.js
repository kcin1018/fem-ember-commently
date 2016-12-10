'use strict';
/*jshint node:true*/
var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a placeholder image.',
  normalizeEntityName: function(entityName) {
    return normalizeEntityName(entityName);
  },

  availableOptions: [
    {
      name: 'base',
      key: 'baseUrl',
      description: 'The domain to use for placeholder',
      type: String,
      default: 'placekitten.com',
      required: true
    }
  ],
  locals: function(options) {
    return {
      baseUrl: options.base
    };
  }
};