const startButton = document.getElementById("start-button");
const scoreButton = document.getElementById("score-button");
const questionBlock = document.getElementById("questionBlock");

const question = document.getElementById("question");
const highScoresEl = document.createElement("ul");
// let answer1 = document.getElementById("a1");
// let answer2 = document.getElementById("a2");
// let answer3 = document.getElementById("a3");

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
const questionList = 0;

//connection to html
const mainBlock = document.querySelector("#mainBlock");

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

function startQuiz() {
  isWin = false;
  timerCount = 10;
  startTimer();
}

function startTimer() {
  time = 60;
  setTimeout(function () {
    clocktick();
  }, 1000);
  function clocktick() {
    time--;
    if (time <= 0) {
      quizEnd();
    }
    timerElement.textContent = time;
  }
}

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
