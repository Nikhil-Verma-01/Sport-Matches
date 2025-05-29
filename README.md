# Sports Matches Viewer

This is a simple React application designed to display a list of upcoming sports matches for a chosen sport (Soccer or Basketball). The application fetches match data and presents it in a clean, user-friendly interface.

## Features

* **Dynamic Sport Selection:** Easily switch between viewing Soccer and Basketball matches using a dropdown selector.

* **Match Details:** For each match, the application displays the two competing teams and the scheduled date and time.

* **Responsive Design:** The layout is designed to be viewable on various screen sizes.

* **Mock Data Integration:** Uses a local mock API (`matches.json`) for reliable data display, bypassing common issues with external free sports APIs.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.

* **HTML:** For structuring the web content.

* **CSS:** For styling the application.

* **JavaScript (ES6+):** For application logic and interactivity.

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository (or create the project structure):**
    If you have the project as a repository, clone it:

    ```bash
    git clone <your-repository-url>
    cd sports-matches-app
    ```

    If you're starting from scratch, first create a React app:

    ```bash
    npx create-react-app sports-matches-app
    cd sports-matches-app
    ```


2.  **Install Dependencies:**
    If you created a new React app, the dependencies should already be installed. If not, run:

    ```bash
    npm install
    ```

3.  **Start the Development Server:**

    ```bash
    npm start
    ```

    This will open the application in your default web browser, usually at `http://localhost:3000`.

## Usage

Once the application is running:

1.  You will see a dropdown labeled "Select Sport:" at the top of the page.

2.  By default, "Soccer" matches will be displayed.

3.  Click on the dropdown and select "Basketball" to view upcoming basketball matches.

4.  The list of matches will update dynamically based on your selection.

## Screenshots

Here are some screenshots of the application in action:

**Basketball Matches View:**

![Baketball Matches View](https://drive.google.com/uc?export=view&id=1CzhS8MX2rndU7-qmFujjf5l3f_nTz4ZO)

**Soccer Matches View:**

![Soccer Matches View](https://drive.google.com/uc?export=view&id=1_PJZtqhq-ruaee9GArs3ZntKagzl8TfE)
---

**Note on Data Source:**
For demonstration purposes and to ensure reliable functionality, this application uses a local `matches.json` file as a mock API. In a real-world scenario, you would integrate with a live external sports API (e.g., TheSportsDB, Sportmonks, etc.) which often requires API keys and careful handling of rate limits.