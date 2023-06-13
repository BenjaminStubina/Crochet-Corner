# Crochet Corner

Crochet Corner is a hub for any chrocheter of any skill level. In this app, users can browse through a variety of crochet stitches in both their US and UK names/notations. Users can favourite stitches to add them to their favourited page. Each stitch can be selected to navigate to a detailed page containing more information about the stitch and an embed guide.

## TechStack Used

React Front-tend with Axios calls to the Back-end
SASS for Front-end styling
React Router Dom used for dynamic Front-end navigation
Node with Express Back-end using self-made API
CORS resource sharing
DotEnv used for hiding port information

## Instalation Procedures

Git Clone the Front-end and Back-end Repos
Create a .env file for Back-end with port=8080
Install dependencies for Front-end
Install dependencies for Back-end

## Lessons Learned and Next Steps

Throughout this capstone project I learned a lot about the development process when starting a project from scratch. Throughout the semester, many of the projects assigned to me had plenty of resources allocated such as style guides, mockups, and other resources which helped shape the direction of the work. In the case of this capstone everything from the idea, to the functionality, and even the styling was entirely up to me. As a result, through trial and attempts, I learned that the features which I had maticulously planned out ahead of time were much easier to code and get working compared to the features that had to be added dynamically as other issues arose. There is a very clear and defined bridge between planning the back-end and the front-end and the more thoughfully they are kept in mind when planning, the more seemlessly they will merge together when the project is brought to life.

Some functionality im very happy with in this project was the dynamic and re-useability of components such as Button, Header, Footer, Lists, and Stitch in which they change based on the page on which they are rendered, and their respective functionality. Another feature that im proud of is a quick-fix to an issue I had with persisting state for a selected stitch. When navigated on a selected stitch's dynamic page, if the page was refreshed the useState that determines what stitch was selected would not persist but the URL would resulting in a 404 error. To fix this I had the useState update based on a dependency of the dynamic URL changing. As a result, even if the page is refreshed, the URL is automatically used to update the useState to have the page re-render with the proper information again.

Proud of / Challenge hybrid: A feature that I am both proud of and if I had another change at refactoring I would definitely do so is my JSON data. I am proud of myself for managing to keep my JSON data to a single array of objects (this includes the favourited stitches). Rather than have a seperate JSON object for the favourited stitches I came up with the idea to simply use patch requests to update the selected stitches with an attribute of "favourite" to either "true/false". This turned out to be an interesting experiment and although I believe for code quality and eligibilty it would be better to just use a seperate object for any favourite stitches, I managed to make it work just fine!

Some challenges that I faced throughout this project were managing state through children/grandchildren and performing axios calls in non-optimal places on the component hierarchy. I think this aspect of my project is where my code quality is not at its bessed and things could be refactored much more efficiently. As a result, there are many times where props and state are passed down multiple lines of components which can be hard to follow.

Next Steps for this project are to incorporate all of the data through a Database. Currently I am reading and writting the data to a JSON file because I was not able to get to the phase 2/3 goals which were DBs and User signup/login functionality. Realisitically I would like the app to have user signup/login functionality to access the favourites page but the app itself could still be accessed as a guest where all other functionality is still available. As well, I want to make the app responsive at tablet/desktop. Another small next step will be to include more navigation functionality such as backspace for reverse navigation across pages, etc. Finally I want to include a section containing some beginner patterns/projects that utilize the stitches on the website that users could add to a "My Projects" page.

## Screenshots

<img width="317" alt="Homepage" src="https://github.com/BenjaminStubina/Crochet-Corner/assets/123490049/7d034f41-823f-48c7-a0d2-fb0b4b0ae397">

<img width="318" alt="Stitch List (US)" src="https://github.com/BenjaminStubina/Crochet-Corner/assets/123490049/2d44b2b6-686f-4c20-be46-b935003a875c">

<img width="314" alt="Stitch Page" src="https://github.com/BenjaminStubina/Crochet-Corner/assets/123490049/8cc8e4f4-6b5a-42a0-bd8f-f09116af4972">

<img width="312" alt="Favourites Page" src="https://github.com/BenjaminStubina/Crochet-Corner/assets/123490049/acf22bc9-08a9-4a41-9ec0-5793efe6b421">
