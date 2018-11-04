$(document).ready(function() {
    // TRIVIA GAME LOGIC

    // questions OBJECT ARRAY
    var questions = [{
        question: "In the Harry Potter series, what is the name of Harry's pet owl?",
        answers: ["Owlbert Einstein", "Owlbus Dumbledore", "Hedwig", "Hoo-Dini"],
        trueAnswer: "Hedwig"},

    {   question: "What school does Harry Potter attend?",
        answers: ["Durmstrang", "Uagadou", "Beauxbatons", "Hogwarts"],
        trueAnswer: "Hogwarts"},

    {   question: "Who famously said, 'Harry-- yer a wizard'?",
        answers: ["Hagrid", "Hester", "Holten", "Hank Hill"],
        trueAnswer: "Hagrid"},

    {   question: "In the films, which character does Emma Watson play?",
        answers: ["Hermione", "Harriet", "Helen", "Crooked Hillary"],
        trueAnswer: "Hermione"},

    {   question: "Which of the four houses of Hogwarts values hard work, dedication, patience, loyalty, and fair play?",
        answers: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        trueAnswer: "Hufflepuff"}
    ];

//************* */ GLOBAL VARIABLES*******************
    // timeDown is how many seconds we start with
    var timeDown = 15;
    // questionCount is to be incremented after every question to move to next question
    var questionCount = 0;
    // until we begin each question, clockRunning is false
    var clockRunning = false;
    var intervalId;
    var rightScore = 0;
    var wrongScore = 0;
    var unanswered = 0;
    var userGuess = "";
    var userRight = true;
    var timeO;


// **************FUNCTIONS*********************************

// Timer Functions
    // function for running the timer. decrements by 1000ms
    function startTimer() {
        // we clear the interval first so old intervals don't stack
        clearInterval(intervalId);
        // set our desired interval
        intervalId = setInterval(function countDownTimer() {
            timeDown--;
            // as timeDown decrements we are updating where it is displayed
            $("#timeDisplay").html(`<h2>Time Left: ${timeDown}</h2>`);
            // when we get to 0 seconds we want to stop the timer, add 1 to unanswered questions, and display the correct answer.
            if (timeDown === 0) {
                stopTimer();
                unanswered++;
                result();
            }
        }, 1000);
    }
    // stopping the timer---will be caused by hitting 0 or by making a choice
    function stopTimer() {
        // by clearing the interval amount we stop the timer.
        clearInterval(intervalId);
    };

// Function to display the current question and reset timer display and start timer

    function displayQuestions() {
        // clear old question
        $(".questionArea").empty();
        timeDown = 15;
        $("#timeDisplay").html(`<h2>Time Left: ${timeDown}</h2>`);
        startTimer();
        $(".questionArea").html(`<h1>${questions[questionCount].question}<h1>`);
    };

// function to display the current corresponding questions.
// since we see multiple we want to think FOR loop to minimize code

    function displayAnswers() {
        for (i=0; i < questions[questionCount].answers.length; i++) {
            // we want to create a button for each iteration
            // each button will want a value = text
            // each button needs a class so we can reference them later in an on click
            // then put every button in the answersArea class
            var answersButton = $("<button>");
            answersButton.text(questions[questionCount].answers[i]);
            // answersButton.attr("value", questions[questionCount].answers[i]);
            answersButton.attr("class", "answerButton");
            $(".answersArea").append(answersButton);
        }
    };

// function for checking the user's choice against the true answer
    // set userGuess = to the value of button
    // stop the timer
    // if a correct answer
        // increment correct score
        // set userRight to true for result
    // else its a wrong answer
        // increment wrong score
        // set userRight to false for result
// result is run to have a celebration/defeat screen
//
    function onGuess() {
        // can use this because this is only run on a button click. so this refers to the button clicked
        userGuess = $(this).text();
        console.log($(this).text())
        console.log(userGuess);
        stopTimer();
        if (userGuess === questions[questionCount].trueAnswer) {
            userRight = true;
            rightScore++
            result();
        }
        else {
            userRight = false;
            wrongScore++;
            result();
        }
    }

// function to show you how your choice resulted
    // needs to clear questions and answersArea
    // if ran out of time
        // acknowledge time out and what correct answer is
        // timeoutgif?
        // have timeout to begin next question--MAKE THIS A FUNCTION
    // if userRight = true
        // acknowledge correct and congratulate
        // winninggif?
        // have timeout to begin next question--MAKE THIS A FUNCTION
    // else wrong
        // acknowledge userGuess and tell what correct answer is
        // wronggif?
        // have timeout to begin next question---MAKE THIS A FUNCTION
    
    function result() {
        $(".questionArea").empty();
        $(".answerArea").empty();
        if (timeDown === 0) {
            $(".questionArea").append(`<p><h2>You ran out of time!</h2></p><p><h3>The correct answer was ${questions[questionCount].trueAnswer}</h3></p>`);
            // TO DO---TIMEOUT GIF
            $(".answersArea").html("TIMEOUT GIF");
            // TO DO----CREATE A FUNCTION TO DELAY BEGINNING of NEXT QUESTION
            resultDelay();
        }
        else if (userRight === true) {
            $(".questionArea").append(`<p><h2>You answered ${userGuess}!</h2></p><p><h3>The correct answer was ${questions[questionCount].trueAnswer}</h3></p>
            <p><h3>Great job!</h3></p>`);
            // TO DO---RIGHT ANSWER GIF
            $(".answersArea").html("RIGHT ANSWER GIF");
            resultDelay();
        }
        else {
            $(".questionArea").append(`<p><h2>You answered ${userGuess}</h2></p><p><h3>The correct answer was ${questions[questionCount].trueAnswer}</h3></p>
            <p><h3>Better luck next question!</h3></p>`);
            // TO DO---WRONG ANSWER GIF
            $(".answersArea").html("WRONG ANSWER GIF");
            resultDelay();
        };
    };


    function resultDelay(){
        questionCount++;
        // if questionCount=last question
            // then run gameOver
        if (questionCount === questions.length) {
            clearTimeout(timeO);
           timeO = setTimeout(gameOver, 5000);
        }
        else {
            clearTimeout(timeO);
            timeO = setTimeout(nextQuestion, 5000);
        };
        // else run nextQuestion()
    };

    // nextQuestion function
    // empty screen
    // displayQuestion()
    // displayAnswers()

    function nextQuestion() {
        $(".questionArea").empty();
        $(".answersArea").empty();
        displayQuestions();
        displayAnswers();
    }

    function gameOver() {
        $(".questionArea").empty();
        $(".answersArea").empty();
        $(".questionArea").html(`<h2>Game over. Here's how you did</h2>`);
        $(".answersArea").html(`<p>Correct Answers: ${rightScore}</p><p>Wrong Answers: ${wrongScore}</p><p>Unanswered: ${unanswered}</p>`);
        $("#goAgaane").show();
    }

    function startGame() {
        $(".questionArea").empty();
        $(".answersArea").empty();
        rightScore = 0;
        wrongScore = 0;
        unanswered = 0;
        questionCount = 0;
        nextQuestion();
    }

// *************************ON CLICKS********************************
    // when we click start game. run startGame
    $("#startGame").on("click", function(){
        startGame();
        $("#startGame").hide();    
    });
    // when we click goAgaane, run start game
    $("#goAgaane").on("click", function() {
        startGame();
        $("#goAgaane").hide();
    });
    // when we click .answerButton run onGuess()
    $(".answerButton").on("click", function(){
        userGuess = $(this).text();
        console.log($(this).text())
        console.log(userGuess);
        onGuess();
    });

    
// **************PAGE LOAD******************
    $("#goAgaane").hide();


});