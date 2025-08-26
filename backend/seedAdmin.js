
const mongoose = require('mongoose');
const AdminUser = require('./models/AdminUser');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const email = 'admin@example.com';
    const password = 'admin123';

    const existingUser = await AdminUser.findOne({ email });
    if (existingUser) {
      console.log('Admin user already exists');
      process.exit();
    }

    const user = new AdminUser({ email, password });
    await user.save();
    console.log('Admin user created');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
