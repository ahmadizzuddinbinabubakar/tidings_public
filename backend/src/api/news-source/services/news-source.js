'use strict';

/**
 * news-source service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-source.news-source');
