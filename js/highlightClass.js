/*This code uses the windo.onload event to ensure that the code runs only after all the content of the page has finished loading
*/
window.onload = function() {
    /*Add an event listener to elements with the "q1" class
    The code first retrieves all the elements in the doocument with the class name "q1" using document.getElementsByClassName('q1') and
    assigns them to a variable named elements
    */
  
    var elements = document.getElementsByClassName('q1');
    //remove in production. The console log is for dubugging purposes
    console.log('There are ' + elements.length + 'elements with the "tei q1" class.');
  
    //Next, the code loops through each element in the elements array using a for loop and adds an event listener to each element for the mouseover event. The event listener calls the highlightElements() function, passing the current element as an argument.
    for(var i=0; i<elements.length; i++) {
      elements[i].addEventListener('mouseover', function() {
        highlightElements(this);
      });
    }
    //AddEventListener to remove color when mouseover is removed
    //Similarly, the code loops through each element in the elements array again and adds an event listener to each element for the mouseout event. The event listener calls the removeColor() function, passing the current element as an argument.
    for(var i=0; i<elements.length; i++) {
      elements[i].addEventListener('mouseout', function() {
        removeColor(this);
      });
    }
  
  //Highlight all instances of the "q1" class in the same document
  /*
  The highlightElements() function highlights all the elements with the "q1" class by setting their backgroundColor property to "#fff9a6". 
  It first retrieves all the elements with the "q1" class again using document.getElementsByClassName('q1') and assigns them to a variable named q1Elements.
  Then it loops through each element in the q1Elements array and sets its backgroundColor property to "#fff9a6". Finally, it sets the backgroundColor property 
  of the hovered element to "#fff9a6" and logs a message to the console.
  */
  function highlightElements(element) {
    var q1Elements = document.getElementsByClassName('q1');
    for(var i=0; i<q1Elements.length; i++) {
      q1Elements[i].getElementsByClassName.backgroundColor = '#fff9a6';
      console.log('this is called'); //remove in production. The console log is for debugging purposes
    }
    element.style.backgroundColor = '#fff9a6';
    console.log('Element with class name' + element.id + 'was hovered over.'); //Log a message to the console
  }
  
  /*
  The removeColor() function removes the highlighting from all the elements with the "q1" class by setting their backgroundColor property
  to "#ffffff". It first retrieves all the elements with the "q1" class again using document.getElementsByClassName('q1') and assigns
  them to a variable named q1Elements. Then it loops through each element in the q1Elements array and sets its backgroundColor property to
  "#ffffff". Finally, it sets the backgroundColor property of the hovered element to "#ffffff" and logs a message to the console.
  */
  
  function removeColor(element) {
    var q1Elements = document.getElementsByClassName('q1');
    for(var i=0; i<q1Elements.length; i++) {
      q1Elements[i].style.backgroundColor = '#ffffff'; //Reset background color of all elements
      console.log('this is called');
    }
    element.style.backgroundColor = '#ffffff'; //Set background color of the hovered element
    console.log('Element with class name' + element.id + 'was hovered over.'); //Log a message to the console
    
  }
  }
  
  
  