# Movie Theater Web Application
## Overview
This web application provides a simple interface for users to view a list of movies available in a theater, see details about a selected movie, and purchase tickets. The application is built using HTML, CSS, and JavaScript, and fetches movie data from a local server.

##Features
Movie Menu: Displays a list of all available movies. Movies that are sold out are highlighted in red.
Movie Details: Shows details of the selected movie, including:
#### Movie poster
#### Title
#### Runtime
#### Showtime
## Available tickets
Buy Ticket Button: Allows users to purchase a ticket for the selected movie. If the movie is sold out, the button is disabled.
## Setup
## Prerequisites
A web server to serve the application (e.g., Apache, Nginx).
A local server or API endpoint that provides movie data in the specified format.
## Installation
Clone or download the repository to your local machine.
Place the files in the appropriate directory of your web server.
Ensure that the local server or API endpoint providing movie data is running and accessible from the application.
Open a web browser and navigate to the location where the application is served.
## Usage
On page load, the application will display a list of movies on the left side.
Click on any movie title to view its details on the right side.
If tickets are available for the selected movie, you can click the "Buy Ticket" button to purchase a ticket. The number of available tickets will decrease by one.
If the movie is sold out, the "Buy Ticket" button will be disabled.
## Data Format
The application expects movie data in the following JSON format:

json
Copy code
{
    "films": [
        {
            "id": "1",
            "title": "Movie Title",
            "runtime": "108",
            "capacity": 30,
            "showtime": "04:00PM",
            "tickets_sold": 27,
            "description": "Movie description",
            "poster": "URL to movie poster"
        },
        ...
    ]
}
## Customization
Styling: You can customize the look and feel of the application by modifying the styles.css file.
Functionality: Additional features or modifications can be made in the script.js file.
## License
This project is open-source and free to use. Please provide appropriate attribution if you use or modify the code.

## Support
For any issues or feature requests, please open an issue on the repository or contact the developer directly.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
