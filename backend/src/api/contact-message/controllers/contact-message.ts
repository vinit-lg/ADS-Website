import { factories } from "@strapi/strapi";

const { createCoreController } = factories;

export default createCoreController("api::contact-message.contact-message");
