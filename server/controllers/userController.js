const User = require('../models/UserModel');

const userController = {
  createUser: async (req, res, next) => {
    try{
      
      const { email, username, password } = req.body
      if (!email || !username || !password) {
        console.log('blank field submitted');
        res.redirect('/register');
      }

      const newUser = await User.create({email, username, password })
      
      if (!newUser) {
        throw new Error('error while creating new user');
      }
      console.log(`adding ${newUser} to res.locals`);
      res.locals.user = newUser;
      next()
    }
    catch (e) {
      return next({
        log: 'Middleware error caught in userController-createUser failed',
        status:400,
        message: { err: e.message }
      })
    }
    
  },
  verifyUser : async ( req, res, next ) => {
    const { username, password } = req.body ;
    console.log('inside verify user');
    console.log(req.body);
    try {
      const user = await User.findOne({username});
      
      if (user && user.password === password ) {
        res.locals.user = user;
        console.log('verify user complete');
        return next();
      }
      console.log('username or password failed. back to login');
      res.redirect('/login');
    }
    catch (err) {
      console.log('error: ', err);
      res.redirect('/login');
    }
  }



}

module.exports = userController;