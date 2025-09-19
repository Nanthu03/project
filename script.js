// Initial available seats
let availableSeats = 120;

// Get form and elements
const form = document.getElementById("bookingForm");
const seatsLabel = document.getElementById("seats");
const nameInput = document.getElementById("name");
const ticketsInput = document.getElementById("tickets");

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  let userName = nameInput.value.trim();
  let ticketsRequested = parseInt(ticketsInput.value);

  if (userName === "") {
    alert("Please enter your name.");
    return;
  }

  if (isNaN(ticketsRequested) || ticketsRequested <= 0) {
    alert("Please enter a valid number of tickets.");
    return;
  }

  if (ticketsRequested > availableSeats) {
    alert("Not enough seats available!");
    return;
  }

  // Deduct booked seats
  availableSeats -= ticketsRequested;
  seatsLabel.textContent = "Seats Available: " + availableSeats;

  alert("Booking Confirmed!\nName: " + userName + "\nTickets: " + ticketsRequested);

  // Reset form
  form.reset();
});
