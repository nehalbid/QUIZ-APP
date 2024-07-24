"use strict";

const quizData = [
 {
  question: "Where is the correct place to insert a JavaScript?",
  a: "The <head> section",
  b: "The <body> section",
  c: "Both the <head> and the <body> section are correct",
  d: "none of the above",
  correct: "c"
 },

 {
  question: "Which language runs in a web browser?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d"
 },
 {
  question: "What does CSS help to manage in web development?",
  a: "Central Style Sheets",
  b: "Cascading Style Sheets",
  c: "Cascading Simple Sheets",
  d: "Cars SUVs Sailboats",
  correct: "b"
 },
 {
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a"
 },
 {
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b"
 },
 {
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<style>",
    b: "<css>",
    c: "<script>",
    d: "<link>",
    correct: "a"
   },
   {
    question: "Which CSS property controls the text size?",
    a: "text-size",
    b: "font-size",
    c: "text-style",
    d: "font-style",
    correct: "b"
   },
   {
    question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
    a: "Function",
    b: "String",
    c: "Declaration",
    d: "Variable",
    correct: "a"
   },
   {
    question: "How do you write 'Hello World' in an alert box using JavaScript?",
    a: "msgBox('Hello World');",
    b: "alertBox('Hello World');",
    c: "msg('Hello World');",
    d: "alert('Hello World');",
    correct: "d"
   },
   {
    question: "How do you create a function in JavaScript?",
    a: "function:myFunction()",
    b: "function myFunction()",
    c: "function = myFunction()",
    d: "function myFunction[]",
    correct: "b"
   },
   {
    question: "Where is the correct place to link an external CSS file in HTML?",
    a: "Inside the <body> section",
    b: "Inside the <head> section",
    c: "At the end of the <body> section",
    d: "Above the <html> tag",
    correct: "b"
   },
   {
    question: "Which HTML attribute is used to define inline styles?",
    a: "class",
    b: "style",
    c: "css",
    d: "styles",
    correct: "b"
   },
   {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onmouseclick",
    b: "onchange",
    c: "onclick",
    d: "onmouseover",
    correct: "c"
   },
   {
    question: "How do you declare a JavaScript variable?",
    a: "v carName;",
    b: "var carName;",
    c: "variable carName;",
    d: "declare carName;",
    correct: "b"
   },
   {
    question: "Which operator is used to assign a value to a variable?",
    a: "+",
    b: "*",
    c: "=",
    d: "==",
    correct: "c"
   },
   {
    question: "How do you add a comment in a CSS file?",
    a: "'This is a comment'",
    b: "// This is a comment",
    c: "/* This is a comment */",
    d: "// This is a comment //",
    correct: "c"
   },
   {
    question: "How can you make a numbered list in HTML?",
    a: "<ul>",
    b: "<dl>",
    c: "<ol>",
    d: "<list>",
    correct: "c"
   },
   {
    question: "What does the following CSS declaration do: 'margin: 10px 20px;'?",
    a: "Sets the top and bottom margins to 10px and left and right margins to 20px",
    b: "Sets all margins to 10px",
    c: "Sets the left and right margins to 10px and top and bottom margins to 20px",
    d: "Sets all margins to 20px",
    correct: "c"
   },
   {
    question: "Which HTML tag is used to define a table row?",
    a: "<td>",
    b: "<th>",
    c: "<tr>",
    d: "<table-row>",
    correct: "c"
   },
   {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    a: "<script src='script.js'>",
    b: "<script href='script.js'>",
    c: "<script name='script.js'>",
    d: "<script link='script.js'>",
    correct: "a"
   },
   {
    question: "How do you change the text color of an element in CSS?",
    a: "text-color: red;",
    b: "color: red;",
    c: "font-color: red;",
    d: "text: red;",
    correct: "b"
   },
   {
    question: "In JavaScript, how do you round the number 7.25 to the nearest integer?",
    a: "round(7.25)",
    b: "Math.round(7.25)",
    c: "Math.rnd(7.25)",
    d: "rnd(7.25)",
    correct: "b"
   },
   {
    question: "Which HTML tag is used to define a hyperlink?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<hyperlink>",
    correct: "b"
   },
   {
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = [ 'red', 'green', 'blue' ];",
    b: "var colors = 'red', 'green', 'blue';",
    c: "var colors = { 'red', 'green', 'blue' };",
    d: "var colors = ( 'red', 'green', 'blue' );",
    correct: "a"
   },
   {
    question: "Which CSS property controls the spacing between elements?",
    a: "spacing",
    b: "margin",
    c: "padding",
    d: "spacing-between",
    correct: "c"
   }
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");
const timerEl = document.getElementById("timer"); // Timer element

let currentQuiz = 0;
let score = 0;
let countdown; // Variable to hold the countdown timer

// Check if there are saved quiz progress in localStorage
window.onload = function () {
  let storedCurrentQuiz = localStorage.getItem("currentQuiz");
  let storedScore = localStorage.getItem("score");
  if (storedCurrentQuiz && storedScore) {
    currentQuiz = parseInt(storedCurrentQuiz);
    score = parseInt(storedScore);
    loadQuiz();
    resumeTimer();
  } else {
    loadQuiz();
    startTimer();
  }
};

function loadQuiz() {
  resetTimer(); // Reset timer for each new question
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;
  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

function resetTimer() {
  clearInterval(countdown); // Clear any existing timer
  timerEl.innerHTML = `Time remaining: <span id="countdown">15</span> seconds`; // Reset timer display to 15 seconds
}

function startTimer() {
  let timeLeft = 15;
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById('countdown').innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdown);
      nextQuestion();
    }
  }, 1000);
}

function resumeTimer() {
  let storedTimeLeft = localStorage.getItem("timeLeft");
  if (storedTimeLeft) {
    let timeLeft = parseInt(storedTimeLeft);
    countdown = setInterval(() => {
      timeLeft--;
      document.getElementById('countdown').innerText = timeLeft;
      localStorage.setItem("timeLeft", timeLeft.toString());
      if (timeLeft === 0) {
        clearInterval(countdown);
        nextQuestion();
      }
    }, 1000);
  } else {
    startTimer(); // Start the timer if no stored time left
  }
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

btnSubmit.addEventListener("click", function () {
  const answers = getSelected();

  if (answers) {
    if (answers === quizData[currentQuiz].correct) {
      score++;
    }
    clearInterval(countdown); // Clear timer when submitting answer
    localStorage.setItem("score", score.toString());
    nextQuestion();
  }
});

function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    localStorage.setItem("currentQuiz", currentQuiz.toString());
    localStorage.removeItem("timeLeft"); // Clear stored time left for new question
    loadQuiz();
    startTimer();
  } else {
    localStorage.removeItem("currentQuiz");
    localStorage.removeItem("score");
    localStorage.removeItem("timeLeft");
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button type="button" onclick="location.reload()">Reload</button>`;
    footerEl.style.display = "none";
  }
}

// Handling page refresh
window.onbeforeunload = function () {
  localStorage.setItem("timeLeft", document.getElementById('countdown').innerText);
};