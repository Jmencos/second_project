const body = document.querySelector('body');

const container = document.createElement('div');
container.id = 'root';

const h2 = document.createElement('h2');
h2.innerHTML = 'JS working fine';

const textArea = document.createElement('textarea')





container.append(h2);
container.append(textArea);

body.append(container);

