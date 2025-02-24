const greenP = document.querySelector(".green");
const parentSection = greenP.closest("section");

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement('img');
image.setAttribute('src', 'https:picsum.photos/200')
image.setAttribute('alt', 'randomimage');
document.body.appendChild(image);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
const newH2 = document.createElement('h2');
newH2.innerText = 'DOM Basics';
newSection.appendChild(newH2);

const newPara = document.createElement('p');
newPara.innerText = 'This was added through Javascript'
newSection.appendChild(newPara)

document.body.appendChild(newSection)