/*goal: create an onclick function that will display appropriate note above note*/

    //quote options: class="q1" xml:id="q001"
    //note options: xml:id="n001" n="001"

/*The quote is like a button; the note is the popover*/

//onClick 
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });

//offClick