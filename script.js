const startButton = document.getElementById("start-button");
const scoreButton = document.getElementById("score-button");
const questionBlock = document.getElementById("questionBlock");

const question = document.getElementById("question");

let answer1 = document.getElementById("a1");
let answer2 = document.getElementById("a2");
let answer3 = document.getElementById("a3");

const questions = [
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

//https://stackoverflow.com/questions/72588081/working-on-a-javascript-quiz-app-and-having-an-issue-dynamically-generating-ques
