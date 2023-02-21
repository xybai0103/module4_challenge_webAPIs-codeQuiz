var main = document.querySelector('main');
var title = document.querySelector('.title');
var message = document.querySelector('.message');
var singleButton = document.querySelector('.single-button');
var timer = document.querySelector('#timer');
// application first-loading page has a "Coding Quiz Challenge" title, a start button, and a timer set to 0
// The init() function fires when the page is loaded 
function init() {
  title.textContent = 'Coding Quiz Challenge';
  message.textContent = 'Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!';
  singleButton.textContent = 'Start Quiz';
  timer.textContent = 'Time: 0'
}
init();


// title and answer properties of object question1
var question1 = {
  title: 'Which of the following is an inline HTML element?',
  choices: ['1. div', '2. p', '3. h1', '4. img']
};
var question2 = {
  title: 'Which CSS property is used to set the direction of flex items in a flex container?',
  choices: ['1. justify-conten', '2. flex-direction', '3. align-items', '4. flex-wrap']
};
var question3 = {
  title: 'Which of the following is not a way to create a new object in JavaScript?',
  choices: ['1. Object constructor', '2. Object literal notation', '3. Object.create method', '4. Object.assign method']
};
var question4 = {
  title: 'Which of the following is not a way to create a new object in JavaScript?',
  choices: ['1. removeListener', '2. off', '3. removeEventListener', '4. stopListening']
};
var question5 = {
  title: 'Which method is used to retrieve data from local storage in JavaScript?',
  choices: ['1. localStorage.getItem()', '2. localStorage.setValue()', '3. localStorage.setItem()', '4. localStorage.getData()']
};
// set an array of five question objects  **must initialize after setting all the objects
var questions = [question1, question2, question3, question4, question5];
// set an array of correct answers
var correctAnswers = [question1.choices[3], question2.choices[1], question3.choices[2], question4.choices[2], question5.choices[0]];


// timer starts from 75 seconds
var secondsLeft = 75;
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


// create a container to hold four choices of the single-choice question
var answerChoices = document.createElement('div');
answerChoices.classList.add('answerChoices');


// renderQuestion function
function addAnswerButtons() {
  main.append(answerChoices);
  for(i=0; i<4; i++){
    // creat label elements wrapping 4 input elements repesenting four choices  **can not creat one tag and append multiple times
    var label = document.createElement('label');
    var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.setAttribute('hidden', '');
    label.append(input);
    answerChoices.append(label);
  };
}

function renderQuestion() {
  for(j=0; j<4; j++){
    answerChoices.children[j].textContent = questions[0].choices[j];
  };
  title.textContent = questions[0].title;
}
  



// when click start button:
singleButton.addEventListener('click', function(){
    // timer (countDown function) starts from 75 seconds
    countDown();
    // clear message and single button
    message.style.display = 'none';
    singleButton.style.display = 'none';
    // present 1st single-choice question with 4 answer buttons
    addAnswerButtons();
    renderQuestion();
});

// when user clicks one of the 4 answer buttons of 1st question:
answerChoices.addEventListener('click', function(event){
    var userChoice = event.target;
    // create a container for an alert message and a horizontal line
    var messageContainer = document.createElement('div');
    var alertMessage = document.createElement('span');
    messageContainer.classList.add('messageContainer');
    var hr = document.createElement('hr');
    messageContainer.append(hr, alertMessage);
    main.append(messageContainer);
    // if for 1st question user clicked the correct answer button, display "Correct!" for a second
    if (correctAnswers.includes(userChoice.textContent)){
       alertMessage.textContent = 'Correct!';
    }
    // else:
    else {
       // display "Wrong!" for a second
       alertMessage.textContent = 'Wrong!';
       // 10 seconds substracted from timer
       secondsLeft -= 10;
    }
    // Hide the message after one second
    setTimeout(() => {
    messageContainer.style.display = "none";
    }, 1000);
});


  // present 2nd single-choice question with 4 answer buttons


// when user clicks one of the 4 answer buttons of 2nd question:
  // present 3rd single-choice question with 4 answer buttons
  // if for 2nd question user clicked the correct answer button, display "Correct!" for a second
  // else:
      // display "Wrong!" for a second
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