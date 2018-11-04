# assignment5
Trivia Game

Holy hell!
This was a harder assignment.
My styling sucks. My apologies.
Getting the logic to fully function took a lot of collaborative effort.
Thanks goes out to:
Alaa, Eddie, Dave, and Nathaniel.
Without you this wouldn't have come together.


////////Problems I had////////////
The timer was a big headache.  I ended up reviewing the exercises and activities and working off that working code.

The answerButtons were not being registered in the on click event.
This came down to an issue with the class not existing during page load but were dynamically created.
By using $(document).on("click", ".answerButton", function(){
    javascript goes back to the created document and checks for clicks on the answerButton class.


In troubleshooting the above issue, I console.logged everywhere and also put userGuess = $(this).text(); in more than one function.  This effectively kept changing the userGuess to not existing right before the onGuess function was run leading to every answer being incorrect, regardless of if it was correct or not.

///////////////////////////////////

This also will not be going into my portfolio yet as I do not believe it to be ready for presentation do to its lacking of styling.  