export default {
  routes: [
    {
      method: "GET",
      path: "/hardware-models",
      handler: "hardware-model.find",
      config: {
        auth: false,
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/hardware-models/:id",
      handler: "hardware-model.findOne",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
