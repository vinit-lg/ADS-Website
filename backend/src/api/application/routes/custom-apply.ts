export default {
  routes: [
    {
      method: 'POST',
      path: '/careers/apply',
      handler: 'application.apply',
      config: { policies: [], middlewares: [] }
    }
  ]
};
