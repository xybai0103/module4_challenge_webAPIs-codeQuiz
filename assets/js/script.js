var title = document.querySelector('.title');
var message = document.querySelector('.message');
var singleButton = document.querySelector('.single-button');
var timer = document.querySelector('#timer');
// timer starts from 75 seconds
var secondsLeft = 75;
// add a container to hold four choices of the single-choice question
var choices = document.createElement('div');
choices.classList.add('choices');
// add 4 label elements wrapping 4 input elements repesenting four choices
var label = document.createElement('label');
var input = document.createElement('input');
input.type = 'radio';
input.name = 'choice';
input.setAttribute('hidden', '');
// set an array of five question objects
var questions = [question1, question2, question3, question4, question5];
// set object question1
var question1 = {
  title: 'Which of the following is an inline HTML element?',
  choice1: '1. div',
  choice2: '2. p',
  choice3: '3. h1',
  choice4: '4. img'
}
question1.choice4.dataset.state = 'right';
// set object question2
var question2 = {
  title: 'Which CSS property is used to set the direction of flex items in a flex container?',
  choice1: '1. justify-content',
  choice2: '2. flex-direction',
  choice3: '3. align-items',
  choice4: '4. flex-wrap'
}
question2.choice2.dataset.state = 'right';
// set object question3
var question3 = {
  title: 'Which of the following is not a way to create a new object in JavaScript?',
  choice1: '1. Object constructor',
  choice2: '2. Object literal notation',
  choice3: '3. Object.create method',
  choice4: '4. Object.assign method'
}
question3.choice2.dataset.state = 'right';
// set object question4
var question4 = {
  title: 'Which of the following is not a way to create a new object in JavaScript?',
  choice1: '1. removeListener',
  choice2: '2. off',
  choice3: '3. removeEventListener',
  choice4: '4. stopListening'
}
question4.choice3.dataset.state = 'right';
// set object question5
var question5 = {
  title: 'Which method is used to retrieve data from local storage in JavaScript?',
  choice1: '1. localStorage.getItem()',
  choice2: '2. localStorage.setValue()',
  choice3: '3. localStorage.setItem()',
  choice4: '4. localStorage.getData()'
}
question5.choice1.dataset.state = 'right';



// application first-loading page has a "Coding Quiz Challenge" title, a start button, and a timer set to 0
// The init() function fires when the page is loaded 
function init() {
    title.textContent = 'Coding Quiz Challenge';
    message.textContent = 'Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!';
    singleButton.textContent = 'Start Quiz';
    timer.textContent = 'Time: 0'
  }
  init();
// countDown function
function countDown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        } 
      }, 1000);
} 
// renderQuestion function
function renderQuestion() {
  for(i=0; i<4; i++){
    label.append(input);
    choices.append(label);
  }

}
// when click start button:
singleButton.addEventListener('click', function(){
    // timer (countDown function) starts from 75 seconds
    countDown();
    // present 1st single-choice question with 4 answer buttons (selection div?)
    renderQuestion();
}
)

// when user clicks one of the 4 answer buttons of 1st question:
  // present 2nd single-choice question with 4 answer buttons
  // if for 1st question user clicked the correct answer button, display "correct!" for a second
  // else:
      // display "wrong!" for a second
      // 10 seconds substracted from timer
// when user clicks one of the 4 answer buttons of 2nd question:
  // present 3rd single-choice question with 4 answer buttons
  // if for 2nd question user clicked the correct answer button, display "correct!" for a second
  // else:
      // display "wrong!" for a second
      // 10 seconds substracted from timer
// .. same process as above..
// when user clicks one of the 4 answer buttons of 5th question:
  // timer stops
  // display "All done!" + final score
  // display an input area for user to input initials
  // display a submit button
  // if for 5th question user clicked the correct answer button, display "correct!" for a second
  // else:
      // display "wrong!" for a second
      // 10 seconds substracted from timer
  
// when timer reaches 0:
  // timer stops
  // display "All done!" + final score
  // display an input area for user to input initials
  // display a submit button
  
// when user clicks submit button:
  // display "Highscores"
  // display user's "initials - final score" as a list item
  // display previous "initials - final score"s as list items
  // display a "Go Back" button
    // when user clicks the button, restart from the first-loading page
  // display a "Clear Highcores" button
    // when user clicks the button, all "initial -final score"s list items cleared
  // clear timer

// how to calculate user's score:
  // number of correct answers (0=< x <=5) plus number of seconds left when timer stops

//TASKS
  // use timers-Intervals to countdown
  // store "initial -final score" in localStorage: convert object to JSON string
    // pull it out to use: turn JSON string back to object
  // each question is an object with topic and answer properties, put objects in a question array, and loop through each object in the array