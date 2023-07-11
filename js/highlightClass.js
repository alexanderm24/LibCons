/* 
highlightClass.js
This script highlights all the elements with the "q1" class when the mouse hovers over them. It also removes the highlighting when the mouse moves away from the element.

In the TEI: each quote needs to have a unique identifier that gets parsed into the HTML. Using an id does not work since id in the HTML must be unique. (In other words, we cannot use the same ID for the same quote in both the Latin and English versions.) Using a class name works since class names can be repeated. However, the class names must be unique for each quote for this highlighting functionality to work.

TO DO:
- Add event listener to tei-quote element without regards to the class name
*/

/* This code uses the window.onload event to ensure that the code runs only after all the content of the page has finished loading. 
*/
window.onload = function() {
  /* 
 Add an event listener to elements with the "q1" class
 The code first retrieves all the elements in the document with the class name "q1" using document.getElementsByClassName('q1') and assigns them to a variable named elements.
 */
 
 var elements = document.getElementsByClassName('q1');
 
 //remove in production. The console log is for debugging purposes
 console.log('There are ' + elements.length + ' elements with the "tei q1" class.');
 
 
 //Next, the code loops through each element in the elements array using a for loop and adds an event listener to each element for the mouseover event. The event listener calls the highlightElements() function, passing the current element as an argument.
 for(var i=0; i<elements.length; i++) {
   elements[i].addEventListener('mouseover', function() {
     highlightElements(this);
   });
 }
 
 //AddEventListener to remove color when mousover is removed
 // Similarly, the code loops through each element in the elements array again and adds an event listener to each element for the mouseout event. The event listener calls the removeColor() function, passing the current element as an argument.
 for(var i=0; i<elements.length; i++) {  
   elements[i].addEventListener('mouseout', function() {
     removeColor(this);
   });
 }
 
 
 
 // Highlight all instances of the "q1" class in the same document
 /*
 The highlightElements() function highlights all the elements with the "q1" class by setting their backgroundColor property to "FFF9A6". It first retrieves all the elements with the "q1" class again using document.getElementsByClassName('q1') and assigns them to a variable named q1Elements. Then it loops through each element in the q1Elements array and sets its backgroundColor property to "FFF9A6". Finally, it sets the backgroundColor property of the hovered element to "#ffff00" and logs a message to the console.
 */
 function highlightElements(element) {
  // var q1Elements = document.querySelectorAll('q1');
   var q1Elements = document.getElementsByClassName('q1');
   for(var i=0; i<q1Elements.length; i++) {
     q1Elements[i].style.backgroundColor = '#FFF9A6';  
     console.log('this is called'); //remove in production. The console log is for debugging purposes
   }
   element.style.backgroundColor = '#FFF9A6';  
   console.log('Element with class name ' + element.id + ' was hovered over.'); // Log a message to the console
 }
 
 
 /* 
 The removeColor() function removes the highlighting from all the elements with the "q1" class by setting their backgroundColor property to "#ffffff". It first retrieves all the elements with the "q1" class again using document.getElementsByClassName('q1') and assigns them to a variable named q1Elements. Then it loops through each element in the q1Elements array and sets its backgroundColor property to "#ffffff". Finally, it sets the backgroundColor property of the hovered element to "#ffffff" and logs a message to the console.
 */
 
 function removeColor(element) {
   var q1Elements = document.getElementsByClassName('q1');
   for(var i=0; i<q1Elements.length; i++) {
     q1Elements[i].style.backgroundColor = '#ffffff'; // Reset background color of all elements
     console.log('this is called');
   }
   element.style.backgroundColor = '#ffffff'; // Set background color of the hovered element
   console.log('Element with class name ' + element.id + ' was hovered over.'); // Log a message to the console
 
 }
 }
  
  