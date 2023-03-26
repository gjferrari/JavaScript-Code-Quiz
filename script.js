const scoreButton = document.getElementById("score-button");
const questionBlock = document.getElementById("questionBlock");

const question = document.getElementById("question");
const highScoresEl = document.createElement("ul");

var questions = [
  {
    title: "What does an array store in JavaScript?",
    choices: [
      "a fixed-size collection of elements of the same data type",
      "your hopes and dreams",
      "only equality operators",
    ],
    answer: "a fixed-size collection of elements of the same data type",
  },
  {
    title: "What function can be used to set a timer in Javascript?",
    choices: [
      "the setTimeout() method",
      "the setInterval()method",
      "both methods",
    ],
    answer: "both methods",
  },
  {
    title: "The querySelector() method allows you to:",
    choices: [
      "select the first element that matches one or more CSS selectors",
      "run a function in the Dom",
      "find your one true love",
    ],
    answer: "both methods",
  },
  {
    title: '"keyup", "keydown", and "keypress" are all examples of:',
    choices: [
      "Javasript elements",
      "Javascript keyboard events",
      "types of arrays",
    ],
    answer: "Javascript keyboard events",
  },
];

const score = 0;
const qIndex = 0;

//connection to html
const timer = document.getElementById("#timer");
const mainBlock = document.getElementById("#mainBlock");
const quizContent = document.getElementById("#quizContent");
const startButton = document.getElementById("start-button");
const createUl = document.createElement("ul");
//60 second quiz

// function startTimer() {
//   time = 60;
//   setTimeout(function () {
//     clocktick();
//   }, 1000);
//   function clocktick() {
//     time--;
//     if (time <= 0) {
//       quizEnd();
//     }
//     timerElement.textContent = time;
//   }
// }

const createQuiz = (qIndex) => {
  quizContent.innerHTML = "";
  createUl = document.createElement("ul");
  for (let index = 0; index < questions.length; index++) {
    const userQuestion = questions[qIndex].title;
    // const userChoice = questions[qIndex].choices;
    quizContent.textContent = userQuestion;
  }
  const userChoice = questions[qIndex].choices;
  userChoice.forEach(function (newChoice) {
    const listEl = document.createElement("li");
    listEl.textContent = newChoice;
    quizContent.appendChild(createUl);
    createUl.appendChild(listEl);
    listEl.addEventListener("click", getRightAnswer);
  });
};

//new function for finding correct answer
//https://www.w3schools.com/jsref/prop_node_textcontent.asp
const getRightAnswer = (event) => {
  var el = event.target;
  if (el.matches("li")) {
    var createDivEl = document.createElement("div");
    createDivEl.setAttribute("id", "createDivID");
    if (el.textContent == questions[qIndex].answer) {
      createDivEl.textContent = "Correct! Wow - you are amazing!";
    } else {
      createDivEl.textContent = "Wrong";
    }
  }
  qIndex++;

  if (qIndex >= questions.length) {
    quizEnd();
    createDivEl.textContent = "Quiz Over!";
  } else {
    createQuiz(qIndex);
  }
  quizContent.appendChild(createDivEl);
};

//code to generate html/classes
function quizEnd() {
  quizContent.innerHTML = "";

  const createH1El = document.createElement("h1");
  createH1El.setAttribute("id", "createH1El");
  createH1El.textContent = "Quiz Over!";

  quizContent.appendChild(createH1El);

  var createPEl = document.createElement("p");
  createPEl.setAttribute("id", "createPEl");

  quizContent.appendChild(createPEl);

  //will need to add timer function
}

// const questions = [
//   {
//     question: "What does an array store in JavaScript?",
//     answer: [
//       {
//         message: "a fixed-size collection of elements of the same data type",
//         right: true,
//       },
//       { message: "your hopes and dreams", right: false },
//       { message: "only equality operators", right: false },
//     ],
//   },
//   {
//     question: "What function can be used to set a timer in Javascript?",
//     answer: [
//       { message: "the setTimeout() method", right: false },
//       { message: "the setInterval()method", right: false },
//       { message: "both methods", right: true },
//     ],
//   },
//   {
//     question: "The querySelector() method allows you to:",
//     answer: [
//       {
//         message:
//           "select the first element that matches one or more CSS selectors",
//         right: true,
//       },
//       { message: "run a function in the Dom", right: false },
//       { message: "find your one true love", right: false },
//     ],
//   },
//   {
//     question: '"keyup", "keydown", and "keypress" are all examples of:',
//     answer: [
//       { message: "Javasript elements", right: false },
//       { message: "Javascript keyboard events", right: true },
//       { message: "types of arrays", right: false },
//     ],
//   },
// ];

// questions.forEach(
//   if answer.right ===
// )
// const getRightAnswer = () => {
//   questions.forEach(answer => {

//   });
// }

startButton.addEventListener("click", startQuiz);
//whent start-button is clicked, timer starts and first question appears (how?)
// startQuiz();

// function startQuiz() {
//   isWin = false;
//   timerCount = 10;
//   startTimer();
// }

//https://stackoverflow.com/questions/72588081/working-on-a-javascript-quiz-app-and-having-an-issue-dynamically-generating-ques

// const questions = [
//   {
//     title: "What does an array store in JavaScript?",
//     choices: [
//       "a fixed-size collection of elements of the same data type",
//       "your hopes and dreams",
//       "only equality operators",
//     ],
//     answer: "a fixed-size collection of elements of the same data type",
//   },
//   {
//     title: "What function can be used to set a timer in Javascript?",
//     choices: [
//       "the setTimeout() method",
//       "the setInterval()method",
//       "both methods",
//     ],
//     answer: "both methods",
//   },
//   {
//     title: "The querySelector() method allows you to:",
//     choices: [
//       "select the first element that matches one or more CSS selectors",
//       "run a function in the Dom",
//       "find your one true love",
//     ],
//     answer: "both methods",
//   },
//   {
//     title: '"keyup", "keydown", and "keypress" are all examples of:',
//     choices: [
//       "Javasript elements",
//       "Javascript keyboard events",
//       "types of arrays",
//     ],
//     answer: "Javascript keyboard events",
//   },
// ];
