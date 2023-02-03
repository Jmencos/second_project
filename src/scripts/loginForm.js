
const body = document.querySelector('body');
// const form = createForm(['username','password', 'email']);
// body.appendChild(form);
const createForm = (fields) => {
  const loginContainer = document.createElement('section')
  loginContainer.id = 'login_form';
  const form = document.createElement('form');
   fields.forEach((el) => {
    let newInput = document.createElement('input');
    let newLabel = document.createElement('label')
    newInput.name = el;
    newInput.id = el;
    newLabel.for = el;
    newLabel.innerHTML = el;
    form.append(newLabel);
    form.append(newInput);
    // form.append(document.createElement('br'));
  })
  
  const createUser = document.createElement('a');
  createUser.innerHTML = 'Dont have an account? Click here'
  createUser.href = '/register'
  let button = document.createElement('button')
  button.innerHTML = 'Submit'
  form.append(button);
  form.append(document.createElement('br'));
  form.append(createUser);
  form.action = '/dashboard'
  loginContainer.appendChild(form)
  return loginContainer ;
}

const loginForm = createForm(['Username', 'Password']);

body.append(loginForm);