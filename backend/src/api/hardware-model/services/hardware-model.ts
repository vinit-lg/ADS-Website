import { factories } from "@strapi/strapi";

const { createCoreService } = factories;

export default createCoreService("api::hardware-model.hardware-model");
