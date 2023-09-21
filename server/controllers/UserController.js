const db = require('../models/UserModel');

const UserController = {
  async createUser(req, res, next) {
    console.log('inside createuse')
    const { firstName, email, username, password } = req.body;

    try {
      const newUser = await db.create({
        firstName: firstName,
        email: email,
        username: username,
        password: password,
      });
      newUser.save();
      return next();
    } catch (error) {
      console.log(error);
    }
  },

  async getUser(req, res, next) {
    console.log('inside get user');
    const { username, password } = req.body;

    const user = await db.findOne({ username: username });

    try {
      if (password === user.password) {
        return next();
      }
    } catch (error) {
      console.log({ error: 'Username and password do not match' });
    }
  },
};

module.exports = UserController;
