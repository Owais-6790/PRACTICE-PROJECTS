// DECLARING DOM ELEMENTS 
const Questions = document.getElementById("Questions")
const currentQuestionNo = document.getElementById("currentQuestionNo")
const totalQuestionNo = document.getElementById("totalQuestionNo")
const Score = document.getElementById("Score")
const Qno1 = document.getElementById("Qno1")
const Qno2 = document.getElementById("Qno2")
const Qno3 = document.getElementById("Qno3")
const Qno4 = document.getElementById("Qno4")
const progressBar = document.getElementById("progress")
const correctAnswers = document.getElementById("correctAnswers")
const totalAnswers = document.getElementById("totalAnswers")
const Remarks = document.getElementById("remarks")
const startScreen = document.querySelector(".start")
const answerScreen = document.querySelector(".answers")
const resultScreen = document.querySelector(".result")
const answerButtons = document.querySelector(".answer-buttons")
const quizQuestions = [
// 1st question
{
    question: "What does the console.log() function do in JavaScript?",
    answers: [
      { text: "It creates a new element in the DOM.", correct: false },
      { text: "It outputs a message to the browser's console.", correct: true },
      { text: "It prompts the user for input.", correct: false },
      { text: "It reloads the current page.", correct: false },
    ],
  },
// 2nd question
  {
    question: "What is the purpose of the addEventListener() method?",
    answers: [
      { text: "To remove an event listener from an element.", correct: false },
      { text: "To trigger an event on an element.", correct: false },
      { text: "To add an event listener to an element.", correct: true },
      { text: "To prevent an event from bubbling up.", correct: false },
    ],
  },
// 3rd question
  {
    question: "What is the difference between let and var?",
    answers: [
      { text: "let is used for constants, while var is used for variables.", correct: false },
      { text: "let is used for global variables, while var is used for local variables.", correct: false },
      { text: "let is used for numbers, while var is used for strings.", correct: false },
      { text: "let has block scope, while var has function scope.", correct: true },
    ],
  },
// 4th question
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "HTML", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
// 5th question
  {
    question: "What is the purpose of the setTimeout() function?",
    answers: [
      { text: "To execute a function immediately.", correct: false },
      { text: "To execute a function after a specified delay.", correct: true },
      { text: "To cancel a timer.", correct: false },
      { text: "To repeat a function at a specified interval.", correct: false },
    ],
  },
];

// UPDATE VALUES VAR 
let currentQuestionIndex = 0
let ScoreAdd = 0
let answerdisabled = false

totalQuestionNo.innerText = quizQuestions.length
totalAnswers.innerText = quizQuestions.length

function startTheQuiz() {
    currentQuestionIndex = 0
    ScoreAdd = 0
    Score.innerText = ScoreAdd
    correctAnswers.innerText = ScoreAdd

    startScreen.classList.remove("active")
    answerScreen.classList.add("active")

    addQuestions()

}

function addQuestions() {
    answerdisabled = false
    const quizQuestionAdd = quizQuestions[currentQuestionIndex]
    currentQuestionNo.innerText = currentQuestionIndex + 1
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100
    progressBar.style.width = progressPercent + "%"
    Questions.innerText = quizQuestionAdd.question

    answerButtons.innerHTML = ""
    quizQuestionAdd.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("answer")

        button.dataset.correct = answer.correct
        button.addEventListener("click",answerCheck)
        answerButtons.appendChild(button)
    })
}

function answerCheck(event) {
    if (answerdisabled) return

    answerdisabled = true
    const clickedButton = event.target;
    const isCorrect = clickedButton.dataset.correct === "true"

    Array.from(answerButtons.children).forEach( button => {
        if ( button.dataset.correct ==="true") {
            button.classList.add("correct")
        } else{
            button.classList.add("incorrect")
        }
    })

    if(isCorrect){
        ScoreAdd++;
        Score.innerText = ScoreAdd
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length) {
            addQuestions()
        }else {
            showResults()
        }
    },1000)

}

function showResults() {
    answerScreen.classList.remove("active")
    resultScreen.classList.add("active")

    correctAnswers.innerText = ScoreAdd

    const percent = (ScoreAdd/quizQuestions.length)*100

    if(percent == 100) {
        Remarks.innerText = "Perfect! You're a Great JS Dev"
    } else if(percent == 80 || percent == 60) {
        Remarks.innerText = "Good Effort! Keep learning"
    }else if(percent == 40 || percent == 20) {
        Remarks.innerText = "Keep learning! you'll get better"
    }
}


function resetTheQuiz() {
    resultScreen.classList.remove("active")
    startTheQuiz()
}
