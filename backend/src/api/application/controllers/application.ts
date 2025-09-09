import { factories } from '@strapi/strapi';

async function parseBody(ctx: any) {
  if (ctx.is('multipart')) {
    const { data, files } = await strapi
      .plugin('upload')
      .service('upload')
      .parseMultipartData(ctx);
    return { data, files };
  }
  return { data: ctx.request.body, files: {} };
}

export default factories.createCoreController('api::application.application', ({ strapi }) => ({
  // POST /api/careers/apply
  async apply(ctx) {
    const { data, files } = await parseBody(ctx);

    // create entry; attach file if present (expects files.cv)
    const entry = await strapi.entityService.create('api::application.application', {
      data,
      files: files?.cv ? { cv: files.cv } : undefined,
    });

    const sanitized = await this.sanitizeOutput(entry, ctx);
    return this.transformResponse(sanitized);
  },
}));
