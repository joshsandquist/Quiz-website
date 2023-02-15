const questions = {
    question1: {
        ask: "What JavaScript method can be used on an array to add an item to the last index?",
        answer1: ".unshift",
        answer2: ".push",
        answer3: ".pop",
        answer4: "shift",
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
        ask: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct: function() {
            return
        },
        }

}

console.log(questions.question1.correct())
console.log(questions.question2.correct())