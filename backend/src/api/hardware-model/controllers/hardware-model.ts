import { factories } from "@strapi/strapi";

const { createCoreController } = factories;

/**
 * Hardware-model controller
 * - ensures products.image is populated by default
 */
export default createCoreController("api::hardware-model.hardware-model", () => ({
  async find(ctx) {
    ctx.query = ctx.query ?? {};

    if (!ctx.query.populate) {
      ctx.query.populate = "products.image";
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    ctx.query = ctx.query ?? {};

    if (!ctx.query.populate) {
      ctx.query.populate = "products.image";
    }

    return await super.findOne(ctx);
  },
}));
