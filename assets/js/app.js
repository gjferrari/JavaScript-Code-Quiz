//NOTE FOR GRADER: JAVASCRIPT IS NOT CURRENTLY FUNCTIONAL, WILL BE WORKING WITH TUTOR FOR MY NEXT DRAFT

// //Hooks into the DOM
var startButton = document.querySelector(".start-button");
// var startTimer = document.queryCommandValue(".countdown-text");
var timerElement = document.querySelector(".countdown-text");
var time;
var timerCount;

// add event listeners for buttons
const element = document.getElementsByClassName("start-button");
element.addEventListener("click", startQuiz);

//whent start-button is clicked, timer starts and first question appears (how?)
startQuiz();

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

function quizEnd() {}

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

// var current question index ++
// if statement
_____________________________________________________________________;

// // function myFunction() {
// //   document.getElementById("demo").innerHTML = "Hello World";
// // }

// // /*
// //  1. Design UI
// //     - Draw a picture
// //     - Determine where you will display feedback.
// //     - Determine what is clickable, what will recieve key input, change input
// //       timers, scroll events, etc
// //     - rough in the elements in HTML, style is less important

// // */

// /*
//   2. Declare variables: DOM hooks
//     - In the Javascript, create variables for each of the DOM elements that will display feedback
//     - create variables for the elements that will receive input
//     - set each variable to its DOM element like:

//     var theElement = document.querySelector([CSS Selector for your element]);
//  */

// /*
//  3. Declare variables: state
//     - What are the datq that need to be kept track of?
//     - Global state variables sometimes emerge while working on event handlers (i.e., it
//       becomes clearer what needs to be tracked across the application)
//     - state variables:
//       "State describes the status of the entire program or an individual
//        object. It could be text, a number, a boolean, or another data type.

//        It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
//        https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
//     - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
//       to the event handler?
// */

// /*
//  4. Declare variables: constants
//     - What are the data the application needs that won't change?
//     - e.g. Math constants, pre-created content (maybe the questions and answers?)
// */

// /*
//  5. Identify events
//     - Based on the variables created in Step 2, create event handlers

//       theElement.addeventListener([EVENT TYPE], function(event){
//         // do stuff here...
//       })

//     ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

//     - Identify the things that should happen in the click handlers
//     - Rememember: there is always a page load event. Usually have a function for anything
//       that needs setting up at the beginning, before people interact with the
//       page. Start the execution of this setup function at the bottom of page
// */

// /*
//  6. Refactor
//     - identify tasks that can be broken into their own functions, outside the event handlers
//     - Are there tasks that more than one event handler share?
// */

// var questions = [
//   {
//     title: 'Commonly used data types DO NOT include:',
//     choices: ['strings', 'booleans', 'alerts', 'numbers'],
//     answer: 'alerts',
//   },
//   {
//     title: 'The condition in an if / else statement is enclosed within ____.',
//     choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
//     answer: 'parentheses',
//   },
