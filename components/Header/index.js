// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');
console.log(headerContainer);

function Header() {

// creating elements
const header = document.createElement('div');
const dateSpan = document.createElement('span');
const headingOne = document.createElement('h1');
const tempSpan = document.createElement('span');

// appending
headerContainer.appendChild(header);
header.appendChild(dateSpan);
header.appendChild(headingOne);
header.appendChild(tempSpan);

// add classes
header.classList.add('header');
dateSpan.classList.add('date');
tempSpan.classList.add('temp');

// adding objects properties(content) to elements
dateSpan.textContent = "SMARCH 28, 2019";
headingOne.textContent = "Lambda Times";
tempSpan.textContent = "98°";


return header;

}

Header();
