var startButton = document.getElementById('start-button')
var gameQuestion = document.getElementById('gameQuestion')
var gameBoard = document.getElementById('gameBoard')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')
var score = 0


// created an object "questions" to hold individual question objects with answers
var questions = {
    question1: {
        ask: "What JavaScript method can be used on an array to add an item to the last index?",
        answer1: ".unshift",
        answer2: ".push",
        answer3: ".pop",
        answer4: ".shift",
        correct: function() {
            return this.answer2}
    },
    question2: {
        ask: "Which of the following is a truthy value?",
        answer1: "''",
        answer2: "null",
        answer3: "'false'",
        answer4: "false",
        correct: function() {
            return this.answer3
        }
    },
    question3: {
        ask: "Where should the <script> tag be placed within an HTML document?",
        answer1: "After the openining <body> tag.",
        answer2: "Before the closing <body/> tag.",
        answer3: "After the closing <body/ tag.",
        answer4: "Within the <header> tag.",
        correct: function() {
            return this.answer2
        }   
    },
    question4: {
        ask: "Which JavaScript data type can return either true of false?",
        answer1: "boolean",
        answer2: "string",
        answer3: "undefined",
        answer4: "number",
        correct: function() {
            return this.answer1
        },
    },
    question5: {
        ask: "What JavaScript method can be used on an array to add an item to the zero index?",
        answer1: ".unshift",
        answer2: ".push",
        answer3: ".pop",
        answer4: ".shift",
        correct: function() {
            return this.answer1
        }
    },
    question6: {
        ask: "In web development, what does DOM stand for?",
        answer1: "Direct Over Mouse",
        answer2: "Divide On Middle",
        answer3: "Developer Open Map",
        answer4: "Document Object Model",
        correct: function() {
            return this.answer4
        }
    },
    question7: {
        ask: "Which of the following is the correct syntax for an if statement?",
        answer1: "if i < 0 then",
        answer2: "if (i < 0) then",
        answer3: "if i < 0 {}",
        answer4: "if (i < 0) {)",
        correct: function() {
            return this.answer4
        }
    },
    question8: {
        ask: "Which of the following is the proper syntax for an array?",
        answer1: "var pets = cat, dog, fish",
        answer2: "var pets = 'cat', 'dog', 'fish'",
        answer3: "var pets = ['cat', 'dog', 'fish']",
        answer4: "var pets = {'cat', 'dog', 'fish'}",
        correct: function() {
            return this.answer3
        }
    },
    question9: {
        ask: "How do we display messages to the console in JavaScript?",
        answer1: "display()",
        answer2: "console.log()",
        answer3: "print()",
        answer4: "view()",
        correct: function() {
            return this.answer2
        }
    },
    question10: {
        ask: "What JavaScript method is used to add data to local storage?",
        answer1: "localStorage.getItem()",
        answer2: "localStorage.setItem()",
        answer3: "localStorage.pullItem()",
        answer4: "localStorage.pushItem()",
        correct: function() {
            return this.answer2
        }
    },
}
// put question objects into an array
var questionArr = [questions.question1, questions.question2, questions.question3, questions.question4, questions.question5, questions.question6, questions.question7, questions.question8, questions.question9, questions.question10]

// for loop to iterate through the questions array
   for(var i = 0; i< questionArr.length; i++ )

//function to display game questions and answers
var gameRun = function() {
    gameBoard.style.display = 'block'
    gameQuestion.textContent = questions.question1.ask
    q1.textContent = questions.question1.answer1
    q2.textContent = questions.question1.answer2
    q3.textContent = questions.question1.answer3
    q4.textContent = questions.question1.answer4
}







// Function used to start the game
startButton.addEventListener('click', function() {
    gameRun()
})