
/* ==========================================
   ACTIVITY 5 - REUSABLE TOAST FUNCTION
========================================== */

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


/* ==========================================
   ACTIVITY 5 - SMOOTH SCROLL & BOOK BUTTONS
========================================== */

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const matchName = this.dataset.match;

        const matchDropdown = document.getElementById("match");

        matchDropdown.value = matchName;

        // Update the booking summary
        updateBookingSummary(false);

        // Scroll to the booking form
        document.getElementById("book").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Booking selected: " + matchName);

    });

});


/* ==========================================
   ACTIVITY 7 - DOM SELECTORS
========================================== */

const matchSelect = document.querySelector("#match");

const standSelect = document.getElementById("stand");

const ticketInput = document.getElementById("tickets");


/* ==========================================
   ACTIVITY 7 - TICKET PRICE DATA
========================================== */

const ticketPrices = {
    General: 1000,
    Premium: 2000,
    VIP: 5000
};


/* ==========================================
   ACTIVITY 7 - LIVE BOOKING SUMMARY
========================================== */

function updateBookingSummary(showNotification = true) {

    const selectedMatch = matchSelect.value;

    const selectedStand = standSelect.value;

    const quantity = Number(ticketInput.value);

    const pricePerTicket = ticketPrices[selectedStand] || 0;

    const totalPrice = pricePerTicket * quantity;


    // Update selected match
    document.getElementById("summaryMatch").textContent =
        selectedMatch || "Not selected";


    // Update selected stand
    document.getElementById("summaryStand").textContent =
        selectedStand || "Not selected";


    // Update quantity
    document.getElementById("summaryTickets").textContent =
        quantity || 0;


    // Update price per ticket
    document.getElementById("summaryPrice").textContent =
        "₹" + pricePerTicket.toLocaleString("en-IN");


    // Update total price
    document.getElementById("summaryTotal").textContent =
        "₹" + totalPrice.toLocaleString("en-IN");


    // Toast notification
    if (showNotification) {
        showToast("Booking summary updated!");
    }

}


/* ==========================================
   ACTIVITY 7 - CHANGE EVENT LISTENERS
========================================== */

// Match selection
matchSelect.addEventListener("change", function () {
    updateBookingSummary();
});

// Stand selection
standSelect.addEventListener("change", function () {
    updateBookingSummary();
});

// Ticket quantity
ticketInput.addEventListener("input", function () {
    updateBookingSummary();
});


/* ==========================================
   BOOKING FORM SUBMISSION
========================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName = document.getElementById("name").value;

    const selectedMatch = matchSelect.value;

    const selectedStand = standSelect.value;

    const quantity = ticketInput.value;

    const totalPrice = ticketPrices[selectedStand] * quantity;


    showToast(
        "Thank you, " + customerName +
        "! " + quantity + " tickets for " +
        selectedMatch + " - Total ₹" +
        totalPrice.toLocaleString("en-IN")
    );

});


/* ==========================================
   RESET FORM
========================================== */

bookingForm.addEventListener("reset", function () {

    setTimeout(function () {

        updateBookingSummary(false);

        showToast("Booking form reset!");

    }, 0);

});


/* ==========================================
   MY BOOKING BUTTON
========================================== */

document.getElementById("checkBookingBtn")
.addEventListener("click", function () {

    const bookingId = document.getElementById("bookingid").value.trim();

    if (bookingId === "") {

        showToast("Please enter your Booking ID.");

    } else {

        showToast("Booking ID entered: " + bookingId);

    }

});


/* ==========================================
   INITIAL BOOKING SUMMARY
========================================== */

updateBookingSummary(false);
