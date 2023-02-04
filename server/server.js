const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const userController = require('./controllers/userController')
const connectToDB = require('./db')

app.use(express.json());
app.use(express.urlencoded({extended:false}));

connectToDB();

app.get('/', (req,res) =>{
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
})

app.use('/', express.static(path.join(__dirname, '../src')))



app.get('/login', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/pages/loginPage.html'))
})

app.get('/register',( req, res ) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/pages/register.html'))
}) 

app.get('/dashboard', (req, res )=> {
  res.status(200).sendFile(path.resolve(__dirname, '../src/pages/dashboard.html'))
})

app.post('/createuser', userController.createUser, (req, res) => {
  res.status(200).redirect('/dashboard');
})
app.post('/dashboard', userController.verifyUser, ( req, res ) => {
  console.log('redirecting to dash')
  res.status(200).redirect('/dashboard');
})
//create a catch all error handling route
app.use('/*', (req, res)=> {
  return res.status(404).sendFile(path.resolve(__dirname, '../src/pages/404.html'));
})

app.listen(port, () => {
  console.log('listening on port : ', port);
})