const User = require('../models/UserModel');

const userController = {
  createUser: async (req, res, next) => {
    try{
      
      const { email, username, password } = req.body

      const newUser = await User.create({email, username, password })
      console.log('New user is: ', newUser)
      if (!newUser) {
        throw new Error('error while creating new user');
      }
    }
    catch (e) {
      return next({
        log: 'Middleware error caught in userController-createUser failed',
        status:400,
        message: { err: e.message }
      })
    }
    next()
  }
}

module.exports = userController;