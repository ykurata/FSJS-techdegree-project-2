// global variables
const mainUl = document.querySelector('ul');
const mainLi = document.querySelectorAll('li');
const numberOfPage = Math.ceil(54 / 10) + 1;

//Create and append elements
const pagination = document.createElement('div');
pagination.className = "pagination";
mainUl.appendChild(pagination);
const ul = document.createElement('ul');
pagination.appendChild(ul);


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
  for (let i = 1; i < numberOfPage; i += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    a = document.createElement('a');
    a.textContent = i;
    page = a.textContent;
    li.appendChild(a);
    a.addEventListener('click', () => {
      showPage(mainLi, i);
    })
  }
}

showPage(mainLi, 1); //Show only first 10 students when the app starts.
appendPageLinks();
