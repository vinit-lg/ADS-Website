/**
 * sustainability routes
 */
export default {
  routes: [
    {
      method: "GET",
      path: "/sustainability",
      handler: "sustainability.find", // singleType -> find returns the single doc
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
