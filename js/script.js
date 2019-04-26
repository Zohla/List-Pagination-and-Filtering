/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
   Global variables 
***/

const studentList = document.getElementsByClassName('student-item');
const showPerPage = 10;
let searchMatches = [];


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
  const totalPages = Math.ceil(list.length/showPerPage);
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

/*** 
   Search function
***/

/*add the necessary elements to the DOM to make a search field and button
  gets parent element, adds div,input, p and button.*/

const searchFunction = () => {
  const getHeaderDiv = document.getElementsByClassName('page-header')[0]; //gets parent element, the creates 4 new nodes
  const searchDiv = document.createElement('DIV');
  const inputField = document.createElement('INPUT'); 
  const button = document.createElement('BUTTON');
  const names = document.getElementsByTagName('h3');
  // const name = names.textContent;
  const studentAllDetails = document.getElementsByClassName('student-details');
  const errorDiv = document.createElement('DIV');
  const error = document.createElement('p');  
  console.log(names[0].textContent); // 

  // const searchInput = inputField.textContent; //canged from textContent to value. //removed for now
  
  button.innerHTML = 'Search';          //adds text to the button
  searchDiv.appendChild(button);        //adds button to searchDiv
  searchDiv.className = 'student-search';//adds className to the div element
  getHeaderDiv.appendChild(searchDiv);  //adds searchdiv to parent html element
  inputField.placeholder = 'Search for students...'; // adds a placeholder to the niput field
  inputField.type = 'text';
  searchDiv.appendChild(inputField);    // adds inputfield to searchdiv next to button
  getHeaderDiv.appendChild(error);      //adds error p to page
  error.textContent = 'Sorry, no match...';  
  error.style.display ='none';            //hides error message
  error.style.textAlign='center';        //still not pretty..move this?
  error.style.color = 'red';



  inputField.addEventListener('keyup', ()=> {
    // error.style.display='none';
    searchMatches = [];
    searchName();
    });

  button.addEventListener('click', (e) =>{
    // error.style.display='none';
    searchMatches = [];
    searchName();
  });


  
  function searchName () {
    // let oldPagiantion;
    // oldPagiantion.className ='pagination';
    // if (oldPagination.length >0) {
    //   pageDiv.removeChild(newDiv);
    // }
    for (let i = 0; i < studentList.length; i++) {
      studentList[i].style.display = 'none';
    }

    for (let i = 0; i < names.length; i++) {
      if (names[i].textContent.includes(inputField.value)) { //noteToSelf: apparetnly only nodes have textcontent, input elements have value
        searchMatches.push(studentList[i]); 
      }  
    }
      
      
    if (searchMatches.length>0) { 
      //need to turn searchMatches into studentList items?
      showPage(searchMatches,1);
      appendPageLinks(searchMatches);
      console.log(searchMatches);  
      error.style.display='none';
    } else {
        error.style.display='block';
      }
    }

  }
 

showPage(studentList, 1); //shows the first 'page' when the page loads
appendPageLinks(studentList);

searchFunction();



