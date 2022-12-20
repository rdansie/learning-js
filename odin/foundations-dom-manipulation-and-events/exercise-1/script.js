const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = "red";
para.textContent = "Hey I'm red!"
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!"
container.appendChild(h3);

const blackDiv = document.createElement('div');
blackDiv.style.border = "thick solid black";
blackDiv.style.backgroundColor = "pink";

const anotherH1 = document.createElement('h1');
anotherH1.textContent = "I'm in a div";

const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO!";

blackDiv.appendChild(anotherH1);
blackDiv.appendChild(anotherP);

container.appendChild(blackDiv);