
/* TOAST NOTIFICATION */

let toastTimer;

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* MOBILE HAMBURGER MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

/* Close mobile menu after clicking a navigation link */

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


/* TEAM FILTER */

const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", () => {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(card => {

        const teams = card.dataset.teams.split(" ");

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

    showToast("Match filter updated!");
});


/* GRID AND LIST VIEW */

const matchContainer = document.getElementById("matchContainer");
const gridViewBtn = document.getElementById("gridViewBtn");
const listViewBtn = document.getElementById("listViewBtn");

gridViewBtn.addEventListener("click", () => {

    matchContainer.classList.remove("list-view");

    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");

    showToast("Grid view enabled!");
});

listViewBtn.addEventListener("click", () => {

    matchContainer.classList.add("list-view");

    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");

    showToast("List view enabled!");
});


/* BOOK TICKETS BUTTONS */

const matchDropdown = document.getElementById("match");

document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", () => {

        const matchName = button.dataset.match;

        matchDropdown.value = matchName;

        updateBookingSummary(false);

        document.getElementById("book").scrollIntoView({
            behavior: "smooth"
        });

        showToast(matchName + " selected!");

    });

});


/* LIVE BOOKING SUMMARY */

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const ticketInput = document.getElementById("tickets");

const ticketPrices = {
    General: 1000,
    Premium: 2000,
    VIP: 5000
};

function updateBookingSummary(showNotification = true) {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;

    let quantity = Number(ticketInput.value);

    if (!quantity || quantity < 1) {
        quantity = 1;
    }

    if (quantity > 10) {
        quantity = 10;
    }

    const pricePerTicket = ticketPrices[selectedStand] || 0;
    const totalPrice = pricePerTicket * quantity;

    document.getElementById("summaryMatch").textContent =
        selectedMatch || "Not selected";

    document.getElementById("summaryStand").textContent =
        selectedStand || "Not selected";

    document.getElementById("summaryTickets").textContent =
        quantity;

    document.getElementById("summaryPrice").textContent =
        "₹" + pricePerTicket;

    document.getElementById("summaryTotal").textContent =
        "₹" + totalPrice;

    if (showNotification) {
        showToast("Booking summary updated!");
    }
}


/* UPDATE SUMMARY WHEN VALUES CHANGE */

matchSelect.addEventListener("change", () => {
    updateBookingSummary();
});

standSelect.addEventListener("change", () => {
    updateBookingSummary();
});

ticketInput.addEventListener("input", () => {
    updateBookingSummary(false);
});


/* BOOKING FORM SUBMISSION */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName = document.getElementById("name").value;
    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;
    const quantity = Number(ticketInput.value);

    const totalPrice = (ticketPrices[selectedStand] || 0) * quantity;

    const bookingID = "IPL" + Math.floor(Math.random() * 90000 + 10000);

    document.getElementById("bookingId").value = bookingID;

    showToast(
        "Booking successful! ID: " +
        bookingID +
        " | " +
        customerName +
        " | Total: ₹" +
        totalPrice
    );

});


/* RESET FORM */

bookingForm.addEventListener("reset", () => {

    setTimeout(() => {
        updateBookingSummary(false);
        showToast("Booking form reset!");
    }, 0);

});


/* CHECK BOOKING */

const checkBookingBtn = document.getElementById("checkBookingBtn");

checkBookingBtn.addEventListener("click", () => {

    const bookingID = document.getElementById("bookingId").value.trim();

    if (bookingID === "") {
        showToast("Please enter a Booking ID!");
    } else {
        showToast("Booking ID entered: " + bookingID);
    }

});


/* INITIAL SUMMARY */

updateBookingSummary(false);
