#Movie Theater Project
A dynamic web application that allows users to view movie details, see available tickets, and purchase tickets for movies.

Features
View Movie Details: On page load, the details of the first movie are displayed, including its poster, title, runtime, showtime, and available tickets.

Movie Menu: A menu of all movies is displayed on the left side of the page. Users can click on any movie to view its details.

Purchase Tickets: Users can buy tickets for a movie. The number of available tickets decreases upon purchase. If a movie is sold out, the "Buy Ticket" button is disabled and displays "Sold Out".

Setup and Installation
Clone the Repository:

bash
Copy code
git clone [your-repository-link]
cd [your-repository-name]
Install JSON Server (if not already installed):

bash
Copy code
npm install -g json-server
Start the JSON Server:

bash
Copy code
json-server --watch db.json
Open index.html in a Browser: Navigate to the project directory and open the index.html file in your preferred browser.

Technologies Used
HTML
CSS
JavaScript
JSON Server
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT
