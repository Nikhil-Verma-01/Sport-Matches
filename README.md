Sports Matches Viewer
This is a simple React application designed to display a list of upcoming sports matches for a chosen sport (Soccer or Basketball). The application fetches match data and presents it in a clean, user-friendly interface.

Features
Dynamic Sport Selection: Easily switch between viewing Soccer and Basketball matches using a dropdown selector.

Match Details: For each match, the application displays the two competing teams and the scheduled date and time.

Responsive Design: The layout is designed to be viewable on various screen sizes.

Mock Data Integration: Uses a local mock API (matches.json) for reliable data display, bypassing common issues with external free sports APIs.

Technologies Used
React: A JavaScript library for building user interfaces.

HTML: For structuring the web content.

CSS: For styling the application.

JavaScript (ES6+): For application logic and interactivity.

Setup Instructions
To get this project up and running on your local machine, follow these steps:

Clone the Repository (or create the project structure):
If you have the project as a repository, clone it:

git clone <your-repository-url>
cd sports-matches-app


If you're starting from scratch, first create a React app:

npx create-react-app sports-matches-app
cd sports-matches-app


Create public/matches.json:
In the public folder of your project (next to index.html), create a file named matches.json and add the following content:



Install Dependencies:
If you created a new React app, the dependencies should already be installed. If not, run:

npm install


Start the Development Server:

npm start


This will open the application in your default web browser, usually at http://localhost:3000.

Usage
Once the application is running:

You will see a dropdown labeled "Select Sport:" at the top of the page.

By default, "Soccer" matches will be displayed.

Click on the dropdown and select "Basketball" to view upcoming basketball matches.

The list of matches will update dynamically based on your selection.

Screenshots
Here are some screenshots of the application in action:

Soccer Matches View:


Basketball Matches View:

Note on Data Source:
For demonstration purposes and to ensure reliable functionality, this application uses a local matches.json file as a mock API. In a real-world scenario, you would integrate with a live external sports API (e.g., TheSportsDB, Sportmonks, etc.) which often requires API keys and careful handling of rate limits.