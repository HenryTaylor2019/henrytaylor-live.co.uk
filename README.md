## pingpong-team-generator

Final tech challenge set by DevelopMe_. Build a pingpong player matchmaker .

## The Brief: 
The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user. We had the option to build the project with JavaScript, React, or PHP, as a web page, or as an app.

## Build Approach:
I decided to build a simple app using React. I made a wireframe of how I wanted it to look and noted all functionality I wanted to include. I then made a second wireframe including the stretch goals to add if I had time. I used Trello to set out the actions I would need to take over the next week.

After launching a new react-app project, I started by setting up a player context component that would hold all of event listener functions. From my wireframe, I decided what values I would need to hold in state and included these in the context component. I used React Context Provider to allow other components to access and update the value of state. The two main challenges I had were to find a way to randomise player selection and to ensure certain input fields couldn’t be altered once the matching process started. I overcame the first without too much difficulty, but it took some time to find a solution to the second. I settled with using ternary statements to set the visibility of the inputs based on the value of state. Given more time, I would like to consider a different way of solving this issue as wrapping lots of code in. After meeting the initial requirements of the brief, I decided to work on some of my stretch goals. I added three functions that reset the game, created a sudden death round and shuffled players. I then worked on the styling and did my best ensure that the app was compatible with mobile devices in the little time I had left. 


## Further Aims:
Increase User Options: Given more time, I would like to add the option to allow for extra rounds. Currently the app only allows for initial player matching and a sudden death round. 

### Score Counter: 
I would like to add a score counter by each game that would also automatically indicate the winner when a player reaches a score of 21.

### API: 
The app could benefit from a backend that stores data including score and a previous winner list. I would like to add a login page so users can access this data from previous games and save player name lists for future tournaments.

### Player Level: 
With a backend in place and a login, I would like add functionality that allows players to accrue points based on the number of wins. This would calculate a skill level and assign it to the player. This could also be used in the pairing process to assign players of similar skill level to each other.

### React Router: 
I would like to change how the visibility of components are controlled by using link and react router instead of relying on ternaries to alter the CSS display property on multiple divs. 

### React-Redux: 
Despite having no real issues with using React’s built in Context Provider, I would like to restructure the app and use React-Redux instead. I believe this would make for easier and more maintainable code when it comes to working on my further aims.

### Mobile Device Compatibility: 
Although the app does work on a mobile device, the styling doesn’t translate as well as it would. I would like to take time to amend this.

You can view the final version of the app on:
https://henrytaylor2019.github.io/pingpong-team-generator/


## Get Started:

In the project directory, you can run:
If you dont have npm installed, run ### `npm install`
To view in your browser ### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



