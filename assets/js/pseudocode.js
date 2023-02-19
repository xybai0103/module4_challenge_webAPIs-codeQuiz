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