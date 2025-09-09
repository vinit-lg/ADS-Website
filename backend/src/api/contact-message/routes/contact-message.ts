module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-messages',
      handler: 'contact-message.create',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/contact-messages',
      handler: 'contact-message.find',
      config: {
        auth: false
      }
    }
  ]
};
