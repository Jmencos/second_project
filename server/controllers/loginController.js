const User = require('../models/UserModel')

//create login controller object. add methods within as middleware
const loginController = {
  //createUser middleware
  createUser : async (req, res, next) => {
    try {
      // console.log('inside create user')
      // console.log('req.query', req.query)
      // console.log('req.body', req.body)
      const {email, password } = req.query;
      
      if (!email || !password ) { console.log('empty')}
      //use async call to wait for result from invoking create method
     const newUser = await User.create({email, password})
     console.log('this is newUser', newUser)
     if (!newUser) {
      throw new Error('error while creating new user');
     }
    }
    catch (e) {
      return next({
        log: 'Middleware error caught in loginController-create user failed',
        status: 400,
        message: {err: e.message}
      })
    }
    next()
  }
}

module.exports = loginController;