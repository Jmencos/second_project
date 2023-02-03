// // console.log('js being read');
// const body = document.querySelector('body')
// let d = new Date();
// const h2 = document.createElement('h2')
// h2.innerHTML = "You've landed on this page on " + d 
// body.appendChild(h2)



// const p = document.createElement('p');
// p.innerHTML = 'hello there';
// const button = document.createElement('button');
// button.innerHTML = 'press me';


// // form.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   console.log(input.value);
// // })

// const createForm = (arr) => {
//   let newInput;
//   let newLabel;
  
//   const form = document.createElement('form');
//   for (let i = 0; i < arr.length; i++ ) {
//     newInput = document.createElement('input')
//     newLabel = document.createElement('label');
//     newInput.name = arr[i];
//     newInput.id = arr[i];
//     newLabel.for = arr[i];
//     newLabel.innerHTML = arr[i];
//     form.append(document.createElement('br'));
    
//     form.append(newLabel)
//     form.append(newInput); 
    
//   }
//   let button = document.createElement('button');
//       button.innerHTML = 'Sign up'
//   form.append(button)
//   // form.addEventListener('submit', () => {
    
    
//   // })
//   form.action = '/authform'
//   form.id = 'app_form'
//   return form;
// }




// const createUser = createForm(['email','username','password']);

// const container = document.createElement('div');
// container.id = 'create_user'
// container.appendChild(createUser)

// // body.appendChild(p);
// // body.append(form);
// body.append(container);

