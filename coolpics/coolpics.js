
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
  if (window.innerWidth >= 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer" aria-model="true">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

function viewHandler(event) {
  // create a variable to hold the element that was clicked on from event.target
  const clickedElement = event.target;

  // get the src attribute from that element and 'split' it on the "-"
  const srcParts = clickedElement.src.split("-");

  // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const newImageSrc = `${srcParts[0]}-full.jpeg`;
  const viewerHTML = viewerTemplate(newImageSrc, clickedElement.alt);

  // insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  document.body.insertAdjacentHTML("afterbegin", viewerHTML);
  
  // add a listener to the close button (X) that calls a function called closeViewer when clicked
  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
}

const gallery = document.querySelector(".gallery");
if (gallery) {
  gallery.addEventListener("click", viewHandler);
}

function closeViewer() {
  const viewerElement = document.querySelector(".viewer");
  if (viewerElement) {
    viewerElement.remove();
  }
}

