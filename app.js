
/* ==========================================
   REUSABLE TOAST NOTIFICATION FUNCTION
========================================== */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    // Clear any previous toast timer
    clearTimeout(toastTimer);

    // Hide toast after 3 seconds
    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

let toastTimer;


/* ==========================================
   BOOK BUTTONS - SMOOTH SCROLLING
========================================== */

// Get all Book buttons in the match schedule
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get the selected match name
        const matchName = this.dataset.match;

        // Select the match automatically in the booking form
        const matchDropdown = document.getElementById("match");

        matchDropdown.value = matchName;

        // Smoothly scroll to the booking form
        document.getElementById("book").scrollIntoView({
            behavior: "smooth"
        });

        // Display notification
        showToast("Booking selected: " + matchName);

    });

});


/* ==========================================
   BOOKING FORM SUBMISSION
========================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    // Prevent the page from reloading
    event.preventDefault();

    const customerName = document.getElementById("name").value;

    const selectedMatch = document.getElementById("match").value;

    // Display success notification
    showToast("Thank you, " + customerName +
        "! Your booking request for " + selectedMatch +
        " has been submitted.");

});


/* ==========================================
   MY BOOKING BUTTON
========================================== */

document.getElementById("checkBookingBtn").addEventListener("click", function () {

    const bookingId = document.getElementById("bookingid").value.trim();

    if (bookingId === "") {
        showToast("Please enter your Booking ID.");
    } else {
        showToast("Booking ID entered: " + bookingId);
    }

});
