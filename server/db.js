const env = require('dotenv');
const mongoose = require('mongoose');
env.config({path:'../.env'}) ;

mongoose.set('strictQuery', false);

const runDB = () => {
  mongoose
    .connect(process.env.DB_URI || '')
    .then( () =>{
      console.log('connected to DB baybee');
    })
    .catch (() => {
      console.log('failed to connect to db');
    });
};

module.exports = runDB;