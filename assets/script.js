// All of my HTML selectors for changing questions/answers and game states
var startButton = document.getElementById('start-button');
var gameQuestion = document.getElementById('gameQuestion');
var gameBoard = document.getElementById('gameBoard');
var scoreBoardEl = document.getElementById('scoreBoard');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var timeLeftEl = document.getElementById('timeLeft');
var setTimer;
var time = 60;
var scoreEl = document.getElementById('score');
var gameScoreEl = document.getElementById('gameScore');
var gameOverEl = document.getElementById('gameOver');
var score = 0;
var submitButtonEl = document.getElementById('submitButton')

 gameOverEl.style.display = 'none';
 scoreBoardEl.style.display = 'none';

// created an object "questions" to hold individual question objects with answers
// The "correct" value is an exact match to right answer for use in scoring
var questions = [{
        ask: "What JavaScript method can be used on an array to add an item to the last index?",
        answer1: ".unshift",
        answer2: ".push",
        answer3: ".pop",
        answer4: ".shift",
        correct: ".push"
    },{
        ask: "Which of the following is a truthy value?",
        answer1: '""',
        answer2: "null",
        answer3: "'false'",
        answer4: "false",
        correct: "'false'"
    },{
        ask: "Where should the <script> tag be placed within an HTML document?",
        answer1: "After the opening <body> tag.",
        answer2: "Within the <head> element",
        answer3: "After the closing </body> tag.",
        answer4: "In the CSS file",
        correct: "After the closing </body> tag."
    },{
        ask: "Which JavaScript data type can return either true of false?",
        answer1: "boolean",
        answer2: "string",
        answer3: "undefined",
        answer4: "number",
        correct: "boolean"
        ,
    },{
        ask: "What JavaScript method can be used on an array to add an item to the zero index?",
        answer1: ".unshift",
        answer2: ".push",
        answer3: ".pop",
        answer4: ".shift",
        correct: ".unshift"
    },{
        ask: "In web development, what does DOM stand for?",
        answer1: "Direct Over Mouse",
        answer2: "Divide On Middle",
        answer3: "Developer Open Map",
        answer4: "Document Object Model",
        correct: "Document Object Model"
    },{
        ask: "Which of the following is the correct syntax for an if statement?",
        answer1: "if i < 0 then",
        answer2: "if (i < 0) then",
        answer3: "if i < 0 {}",
        answer4: "if (i < 0) {}",
        correct: "if (i < 0) {}"
    },{
        ask: "Which of the following is the proper syntax for an array?",
        answer1: "var pets = cat, dog, fish",
        answer2: "var pets = 'cat', 'dog', 'fish'",
        answer3: "var pets = ['cat', 'dog', 'fish']",
        answer4: "var pets = {'cat', 'dog', 'fish'}",
        correct: "var pets = ['cat', 'dog', 'fish']"
    },{
        ask: "How do we display messages to the console in JavaScript?",
        answer1: "display()",
        answer2: "console.log()",
        answer3: "print()",
        answer4: "view()",
        correct: "console.log()"
    },{
        ask: "What JavaScript method is used to add data to local storage?",
        answer1: "localStorage.getItem()",
        answer2: "localStorage.setItem()",
        answer3: "localStorage.pullItem()",
        answer4: "localStorage.pushItem()",
        correct: "localStorage.setItem()"
    },
]
// sets index of questions array to 0
var currentIndex = 0

//function to display game questions and answers
//creates variable currentQuestion to iterate through the questions array
var gameRun = function() {
    gameBoard.style.display = 'block'
    startButton.style.display = 'none'
    var currentQuestion = questions[currentIndex];
    gameQuestion.textContent = currentQuestion.ask
    q1.textContent = currentQuestion.answer1
    q2.textContent = currentQuestion.answer2
    q3.textContent = currentQuestion.answer3
    q4.textContent = currentQuestion.answer4
}
// Function to move on to the next question in the array
// Will end the game once all questions are answered
var nextQuestion = function() {
    currentIndex++
    if (currentIndex < questions.length) {
        gameRun()
    } else {
        clearInterval(setTimer)
        gameBoard.style.display = 'none'
        scoreBoardEl.style.display = 'none'
        gameOverEl.style.display = 'block'
        gameScoreEl.textContent = score
    }
}
// Function that sets a timer that decrements one second.
var timer = function() {
    setTimer = setInterval(function(){
        time--
        timeLeftEl.textContent = time
        if(time <= 0) {
            clearInterval(setTimer)
            gameBoard.style.display = 'none';
            scoreBoardEl.style.display = 'none';
            gameOverEl.style.display = 'block';
            gameScoreEl.textContent = score;
        }
    }, 1000)
}
// Checks the button text for the correct answer and decrements time for wrong answer. Could have been done as dynamic buttons as well.

q1.addEventListener('click', function() {
    var text = q1.textContent
    if (text === questions[currentIndex].correct) {
        score++
        scoreEl.textContent = score
        nextQuestion()
    } else {
        time -= 5;
        nextQuestion()
    }
})

q2.addEventListener('click', function() {
    var text = q2.textContent
    if (text === questions[currentIndex].correct) {
        score++
        scoreEl.textContent = score
        nextQuestion()
    } else {
        time -= 5;
        nextQuestion()
    }
})

q3.addEventListener('click', function() {
    var text = q3.textContent
    if (text === questions[currentIndex].correct) {
        score++
        scoreEl.textContent = score
        nextQuestion()
    } else {
        time -= 5;
        nextQuestion()
    }
})

q4.addEventListener('click', function() {
    var text = q4.textContent
    if (text === questions[currentIndex].correct) {
        score++
        scoreEl.textContent = score
        nextQuestion()
    } else {
        time -= 5;
        nextQuestion()
    }
})
// Used to retireve scores saves to local storage must be parsed back into an object for retrieval
var highScores = JSON.parse(localStorage.getItem('highScores')) || []


// Adds an event listener to the initials form that retrieves the user's score and initials
// Scores and initials are saved as an object, so the must be converted to a JSON string to store
submitButtonEl.addEventListener('click', function(event) {
event.preventDefault()
var initials = document.getElementById('initials').value;
 var scoreObject = {
    initials: initials,
    score: score}
    highScores.push(scoreObject)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    showHighScores();
    document.querySelector('form').style.display = 'none'
 })

// This function will append the users submitted initials and score to the highscores div as a list item
 var showHighScores = function() {
    var scoreList = document.getElementById('highScores').querySelector('ul')
    scoreList.textContent = '';
    highScores.forEach(function(scoreObject) {
        var listItem = document.createElement('li');
        listItem.textContent = scoreObject.initials.toUpperCase() + ': ' + scoreObject.score
        scoreList.appendChild(listItem)
 });
}


// Created a separate function that only calls timer() once, rather than within the gameRun() function.
var start = function() {
    gameRun();
    timer();
    scoreBoardEl.style.display = 'block'
}


showHighScores()

// Function used to start the game
startButton.addEventListener('click', function() {
    start()
})