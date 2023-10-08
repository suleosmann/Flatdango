// DOM elements
const filmsList = document.getElementById('films');
const moviePoster = document.getElementById('movie-poster');
const movieTitle = document.getElementById('movie-title');
const movieRuntime = document.getElementById('movie-runtime');
const movieShowtime = document.getElementById('movie-showtime');
const availableTickets = document.getElementById('available-tickets');
const buyTicketBtn = document.getElementById('buy-ticket');

// Fetch the first movie's details on page load
fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(data => displayMovieDetails(data));

// Fetch all movies for the menu on page load
fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => populateMovieMenu(data));

// Function to display movie details
function displayMovieDetails(movie) {
    moviePoster.src = movie.poster;
    movieTitle.textContent = movie.title;
    movieRuntime.textContent = movie.runtime;
    movieShowtime.textContent = movie.showtime;
    const ticketsAvailable = movie.capacity - movie.tickets_sold;
    availableTickets.textContent = ticketsAvailable;

    // Disable the "Buy Ticket" button if the movie is sold out
    if (ticketsAvailable <= 0) {
        buyTicketBtn.textContent = 'Sold Out';
        buyTicketBtn.disabled = true;
    } else {
        buyTicketBtn.textContent = 'Buy Ticket';
        buyTicketBtn.disabled = false;
    }

    // Event listener for the "Buy Ticket" button
    buyTicketBtn.addEventListener('click', () => {
        if (ticketsAvailable > 0) {
            availableTickets.textContent = ticketsAvailable - 1;
            // If you want to persist the ticket purchase, you can make a PATCH request here
        }
    });
}

// Function to populate the movie menu
function populateMovieMenu(movies) {
    // Clear the placeholder item
    filmsList.innerHTML = '';

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.classList.add('film', 'item');
        if (movie.capacity - movie.tickets_sold <= 0) {
            li.classList.add('sold-out');
        }

        // Event listener to display movie details on click
        li.addEventListener('click', () => {
            displayMovieDetails(movie);
        });

        filmsList.appendChild(li);
    });
}
