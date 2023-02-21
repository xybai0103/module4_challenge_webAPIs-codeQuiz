var main = document.querySelector('main');
var title = document.querySelector('.title');
var message = document.querySelector('.message');
var startButton = document.querySelector('.start-button');
var timer = document.querySelector('#timer');
var currentQuestion = 0;
// number of questions that user selects the correct answer
var numberOfCorrect = 0;
// create a container for an alert message and a horizontal line
var messageContainer = document.createElement('div');
var alertMessage = document.createElement('span');
messageContainer.classList.add('messageContainer');
var hr = document.createElement('hr');


// application first-loading page has a "Coding Quiz Challenge" title, a start button, and a timer set to 0
// The init() function fires when the page is loaded 
function init() {
  title.textContent = 'Coding Quiz Challenge';
  message.textContent = 'Try to answer the following code-related questions with the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!';
  startButton.textContent = 'Start Quiz';
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
  choices: ['1. justify-content', '2. flex-direction', '3. align-items', '4. flex-wrap']
};
var question3 = {
  title: 'Which of the following is the way to create a new object in JavaScript?',
  choices: ['1. Object constructor', '2. Object literal notation', '3. Object.create method', '4. Object.assign method']
};
var question4 = {
  title: 'Which of the following is the way to remove an event listener in JavaScript?',
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
// timerInterval
var timerInterval;
// countDown function
function countDown() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // render the page for user to enter initials
      enterInitials();
    } 
  }, 1000);
} 


// create a container to hold four choices of the single-choice question
var answerChoices = document.createElement('div');
answerChoices.classList.add('answerChoices');


// addAnswerButtons function
function addAnswerButtons() {
  main.append(answerChoices);
  for(i=0; i<4; i++){
    // creat label elements wrapping 4 input elements repesenting four choices  **can not creat one tag and append multiple times
    var answerLabel = document.createElement('label');
    answerLabel.classList.add('answer-label');
    var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.setAttribute('hidden', '');
    answerLabel.append(input);
    answerChoices.append(answerLabel);
  };
}

// function to render a question
function renderQuestion() {
  for(j=0; j<4; j++){
    answerChoices.children[j].textContent = questions[currentQuestion].choices[j];
  };
  title.textContent = questions[currentQuestion].title;
}


// when click start button:
startButton.addEventListener('click', function(){
    // timer (countDown function) starts from 75 seconds
    countDown();
    // clear message and single button
    message.style.display = 'none';
    startButton.style.display = 'none';
    // present 1st single-choice question
    addAnswerButtons();
    renderQuestion();
});


// when user clicks one of the 4 answer buttons of a question:
answerChoices.addEventListener('click', function(event){
    var userChoice = event.target;
    // add the alert message and the horizontal line
    messageContainer.append(hr, alertMessage);
    main.append(messageContainer);
    // if for user clicked the correct answer button, display "Correct!" for a second
    if (correctAnswers.includes(userChoice.textContent)){
       alertMessage.textContent = 'Correct!';
       numberOfCorrect++;
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
    
    // present next question
    function renderNextQuestion() {
      currentQuestion++;
      if (currentQuestion < 5) {
        renderQuestion();
      // when user answers the 5th question:
      } else {
        // stop timer
        clearInterval(timerInterval);
        // set timer to 0
        timer.textContent = "Time: 0";
        // render the page for user to enter initials
        enterInitials();
      }
    }
    renderNextQuestion();
});

// funtion to render the page for user to enter initials
var enterInitials = function(){
  // display "All done!"
  title.textContent = 'All done!';
  // clear answer buttons
  answerChoices.style.display = 'none';
  // calculate user's score: number of correct answers plus number of seconds left when timer stops
  var score = numberOfCorrect + secondsLeft;
  // display final score
  message.style.display = '';
  message.textContent = 'Your final score: ' + score;
  // display an input area for user to input initials
  var initialLabel = document.createElement('label');
  initialLabel.textContent = 'Enter Initials: ';
  var initialInput = document.createElement('input');
  initialInput.type = 'text';
  // display a submit button
  var submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.classList.add('submit-button');
  // put the input area and submit button before alert message
  main.insertBefore(initialLabel, messageContainer);
  main.insertBefore(initialInput, messageContainer);
  main.insertBefore(submitButton, messageContainer);
}


  
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



//TASKS
  // store "initial -final score" in localStorage: convert object to JSON string
    // pull it out to use: turn JSON string back to object