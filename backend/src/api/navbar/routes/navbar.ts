export default {
  routes: [
    {
      method: "GET",
      path: "/navbar",
      handler: "navbar.find",
      config: {
        auth: false,
      },
    },
  ],
};
