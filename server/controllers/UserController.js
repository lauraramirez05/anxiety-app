const db = require('../models/UserModel');

const UserController = {
  async createUser(req, res, next) {
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

  // async 
};

module.exports = UserController;
