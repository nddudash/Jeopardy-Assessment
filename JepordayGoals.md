## Normal Mode
Let's start building our game

1) Update the navigation and router of your application to display the new component

2) Display the question, category, and point value returned from the API

3) Create a way to keep track of the user's score

4) Provide a way for the user to submit an answer to the question

5) If the answer is correct then add the point value of the question to the to the user's score.

6) If the answer is wrong, subtract the point value from the user's score.

7) After the user answers a question display another random question from the API.

## Medium Mode
1) Create a stateless display component for the Jeopardy game that handles the display of the game

2) Update the Jeopardy component to only render the new display component

3) Pass the needed props from the Jeopardy component to the display component so it has all the data it needs to display the game data and submit the user's answer

4) The other should all the display of the data through passed in props.

## Hard Mode
1) Instead of displaying a single random question, display 3 categories.

2) Once a user selects a category, display the question for the category selected

3) The rest of the application should work the same