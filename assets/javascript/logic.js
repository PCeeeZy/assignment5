document.ready(function() {
    // TRIVIA GAME LOGIC

    // questions ARRAY
    var questions = ["In the Harry Potter series, what is the name of Harry's pet owl?", "What school does Harry Potter attend?", "Who famously said, 'Harry-- yer a wizard'?", "In the films, which character does Emma Watson play?", "Which of the four houses of Hogwarts values hard work, dedication, patience, loyalty, and fair play?"];

    // trueAnswers array ---this is where the correct answers will be saved
    var trueAnswers = ["Hedwig", "Hogwarts", "Hagrid", "Hermione", "Hufflepuff"];

    // answers# array for the answers options to be displayed for each question.
    var answers0 = ["Owlbert Einstein", "Owlbus Dumbledore", "Hedwig", "Hoo-Dini"];
        // answers0 will correlate to questions[0].
        // answers4 will correlate to questions[4].
    var answers1 = ["Durmstrang", "Uagadou", "Beauxbatons", "Hogwarts"];
    var answers2 = ["Hagrid", "Hester", "Holten", "Hank Hill"];
    var answers3 = ["Hermione", "Harriet", "Helen", "Crooked Hillary"];
    var answers4 = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

    // GLOBAL VARIABLES
        // timer -- starts at 15 seconds
        // questionCount -- starts at 0

    // timer function
        // display a countown of time
        // if time = 0 then run nextQuestion function
    
    // nextQuestion function
        // push chosen answer or no answer to userAnswers array
        // hide current question
        // clear chosen answer displayed
        // increment questionCount
        // reset timer
        // show question = questionCount

    // onclickevent
        // when finalize answer button is clicked
            // run nextQuestion

    

})