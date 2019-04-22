/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Global variables 
***/

const studentList = document.getElementsByClassName('student-item');
const showPerPage = 10;


/*** 
   Search function
***/

//add the necessary elements to the DOM to make a search field and button
//gets parent element, adds div,input and button.

//use the h3? It contains the name of the students.
const getHeaderDiv = document.getElementsByClassName('page-header')[0];
const searchDiv = document.createElement('DIV');
const inputField = document.createElement('INPUT'); //need to add input.textcontent somewhere to use as an argumnet in my searchName function
const button = document.createElement('BUTTON');
const names = document.getElementsByTagName('h3');
const searchInput = inputField.textContent;
button.innerHTML = 'Search';
searchDiv.appendChild(button);
searchDiv.className = 'student-search';
getHeaderDiv.appendChild(searchDiv);
inputField.placeholder = 'Search for students...';
searchDiv.appendChild(inputField);

function searchName () {
  // const searchResult = [];
  for (let i = 0; i < names.length; i++) {
    // names[i].className = '';
    if(searchInput.length !== 0) {
      alert('Sorry, you have to type at least one letter')  
    } else if(names[i].textContent.toLowerCase().includes(searchInput.toLowerCase())) {
        studentList[i].display = 'block';
    } else {
        studentList[i].display = 'none';
    }
  
   showPage(studentList,1);
   appendPageLinks(studentList)   
  }
}
  
searchName();

button.addEventListener('click',searchName);
  
inputField.addEventListener('keyup', searchName);

/*** 
   Function to hide all of the items in the 
   list except for the number you want to show.
***/

const showPage = (list, page)=> {
  //gets item 0-9 in the studentlist on the the first page, and so on
  const startIndex = page * showPerPage - showPerPage;
  const endIndex = page * showPerPage -1;//page * showPerPage - 1;// had to add -1 to not get 11 students on first page.
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i<= endIndex) {
      list[i].style.display = 'block' ;
    } else {
      list[i].style.display = 'none';
    }
  }
}


/*** 
   Function to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = list => {
  //calculates amount of pages needed
  const totalPages = Math.ceil(studentList.length/showPerPage);
  // get parent element from the .html
  const pageDiv = document.getElementsByClassName('page')[0];
  //create new div
  const newDiv = document.createElement('DIV');
  //gives newDiv a class name
  newDiv.className = 'pagination';
  //append newDiv to pageDiv
  pageDiv.appendChild(newDiv);
  //create an ul
  let ul = document.createElement('UL');
  //append ul to newDiv
  newDiv.appendChild(ul);

//create the necessary amount of pagination buttons.
  // if (totalPages > 0) { }//don't need if statement? Use it to check if the list is shorter or equal to showPerPage?
    for (let i = 1; i <= totalPages; i++) {
      //creates a list item and a link for each 'page'
      let li = document.createElement('LI');
      let link = document.createElement('A');
      link.href = '#'; 

      //sets the text content of the link to numbers and append the links.
      link.textContent = i;
      ul.appendChild(li);
      li.appendChild(link);        
    }
    //**sets an eventlistener to each link**//
    //select the link
    const pagLinks = document.querySelectorAll('.pagination a');
    //adds a className to the first(and active) link
    pagLinks[0].className = 'active';
    //give active link class 'active' and the others no class.
    for (let i = 0; i < pagLinks.length; i++)  {
      pagLinks[i].addEventListener('click', (event) => {
        const clickedLink = event.target.textContent;
        for (let j = 0; j < pagLinks.length; j++) {
          pagLinks[j].className = '';
        }
        event.target.className = 'active';
        showPage(list, clickedLink); 
      })
    }
}


showPage(studentList, 1); //shows the first 'page' when the page loads

appendPageLinks(studentList);



