/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentList = document.getElementsByClassName('student-item');
const showPerPage = 10;
let currentPage = 1;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page)=> {
  //gets item 0-9 in the studentlist on the the first page, and so on
  const firstItem = page * showPerPage - showPerPage;
  const lastItem = firstItem + showPerPage -1;//page * showPerPage - 1;// had to add -1 to not get 11 students on first page.
  for (let i = 0; i < list.length; i++) {
    if (i >= firstItem && i<= lastItem) {
      list[i].style.display = 'visible' ;
    } else {
      list[i].style.display = 'none';
    }
  }
}



showPage(studentList, currentPage);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = list => {
  const totalPages = Math.ceil(studentList/showPerPage);
  // get parent element
  const pageDiv = document.getElementsByClassName('page')[0];
  //creates new div
  const newDiv = document.createElement('DIV');
  //gives newDiv a class name
  newDiv.className = 'pagination';
  //appends newDiv to pageDiv
  pageDiv.appendChild(newDiv);
  //creates an ul
  let ul = document.createElement('UL');
  //appends ul to newDiv
  newDiv.appendChild(ul);

//creates the necessary amount of pagination buttons.
  if (totalPages > 0) { //do I need .length here?
    for (let i = 1; i < totalPages; i++) {
      //creates a list item and a link for each page
      let li = document.createElement('LI');
      let link = document.createElement('A');

      //makes the text content of the link numbers(of pages) and append them.
      link.textContent = i;
      ul.appendChild(li);
      li.appendChild(link);

    }
    //sets an eventlistener to each link
    const pagLinks = document.querySelectorAll('.pagination a');
    //adds a className to the current link
    PagLinks[0].className = 'current';

    for (let i = 0; i < links.length; i++)  {
      links[i].addEventListener('click', (e) => {
        const 
      })
    }


  }
  
  // for ()



}

console.log(studentList);

appendPageLinks();



// Remember to delete the comments that came with this file, and replace them with your own code comments.