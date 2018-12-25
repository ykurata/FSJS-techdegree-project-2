// global variables
const mainUl = document.querySelector('ul');
const mainLi = document.querySelectorAll('li');
const pageHeaderDiv = document.querySelector('div.page-header.cf')
const numberOfStudents = mainLi.length;
const studentsName = document.querySelectorAll('h3');

const numberOfPage = Math.ceil(numberOfStudents / 10) + 1;

// Create search input and button
const searchDiv = createElement("div", "className", "student-search")
const input = createElement("input", "placeholder", "Search for students...");
const searchButton = createElement("button", "textContent", "Search");
appendElement(searchDiv, pageHeaderDiv);
appendElement(input, searchDiv);
appendElement(searchButton, searchDiv);


// function to create elements
function createElement(elementName, property, value) {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}


// function to append an element to parentNode
function appendElement(elementName, parentNode){
  parentNode.appendChild(elementName);
}


// Show every 10 studens
function showPage(list, page) {
  for (let i = 0; i < list.length; i += 1) {
    if (i < (page * 10) && i >= ((page - 1) * 10)) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

// Generate, append, and add functionality to the pagination buttons.
function appendPageLinks() {
  const pagination = createElement("div", "className", "pagination");
  const ul = createElement('ul', "className", "pagination-ul");
  appendElement(ul, pagination);
  appendElement(pagination, mainUl);

  for (let i = 1; i < numberOfPage; i += 1) {
    const li = createElement("li", "className", "page-li");
    appendElement(li, ul);
    const a = createElement("a", "textContent", i);
    appendElement(a, li);
    a.addEventListener('click', () => {
      showPage(mainLi, i);
    })
  }
}


// Find a student who's name is matched with search input
function searchStudent() {
  const searchInput = input.value.toLowerCase();
  for (let i = 0; i < numberOfStudents; i += 1) {
    const name = studentsName[i].textContent;
    if (name.indexOf(searchInput) > -1) {
      mainLi[i].style.display = "block";
      } else {
      mainLi[i].style.display = "none";
    }
  }
  input.value = "";
}

searchButton.addEventListener("click", () => {
  searchStudent();
});

showPage(mainLi, 1); //Show only first 10 students when the app starts.
appendPageLinks()
