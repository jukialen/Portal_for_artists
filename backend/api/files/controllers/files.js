'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { user } = ctx.state;
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.file.create(data, { files });
    } else {
      entity = await strapi.services.file.create({
        ...ctx.request.body,
        user: user.id
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
};




