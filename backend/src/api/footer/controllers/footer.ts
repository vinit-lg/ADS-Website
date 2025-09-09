import { factories } from "@strapi/strapi";

const { createCoreController } = factories;

export default createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::footer.footer", {
      populate: "*",
    });

    return entity?.[0] || entity;
  },
}));
