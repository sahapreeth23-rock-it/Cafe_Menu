function closeAllPopups() {
    document.getElementById("coffeePopup").style.display = "none";
    document.getElementById("dessertPopup").style.display = "none";
    document.getElementById("snackPopup").style.display = "none";
}

function showCoffeePopup() {
    closeAllPopups();
    document.getElementById("coffeePopup").style.display = "flex";
}

function showDessertPopup() {
    closeAllPopups();
    document.getElementById("dessertPopup").style.display = "flex";
}

function showSnackPopup() {
    closeAllPopups();
    document.getElementById("snackPopup").style.display = "flex";
}
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
function closeOutside(event, popupId) {
    if (event.target.id === popupId) {
        closePopup(popupId);
    }
}
const reservationForm = document.getElementById("reservationForm");

// Prevent selecting a past date as soon as the page loads
document.getElementById("date").min = new Date().toISOString().split("T")[0];

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //Name Validation
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {
        nameError.textContent="Please enter your name.";
        alert("Please enter your name.");
        return;
    }
    nameError.textContent ="";
    //Email Validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    if (emailInput.value.trim() === "") {
        emailError.textContent="Please enter your email.";
        return;
    }
    emailError.textContent ="";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent="Please enter a valid email address.";
        return;
    }
    emailError.textContent ="";
    //Guests Validation
    const guestsInput = document.getElementById("guests");
    const guestsError = document.getElementById("guestsError");
    const guests = Number(guestsInput.value);

    if (guestsInput.value.trim() === "") {
        guestsError.textContent="Please enter the number of guests between 1 and 10.";
         return;
    }
    if (guests < 1 || guests > 10) {
        guestsError.textContent="Please enter a number of guests between 1 and 10.";
        return;
    }
    guestsError.textContent="";
    //Date Validation
    const dateInput = document.getElementById("date");
    const dateError = document.getElementById("dateError");
    const today= new Date().toISOString().split("T")[0];
    dateInput.min = today;
    
    if (dateInput.value === "") {
        dateError.textContent = "Please select a reservation date.";
        return;
    }
    dateError.textContent="";
    // Time Validation
    const timeInput = document.getElementById("time");
    const timeError = document.getElementById("timeError");
    if (timeInput.value === "") {
        timeError.textContent = "Please select a reservation time.";
        return;
    }
    timeError.textContent = "";

    //Success message
    const successMessage = document.getElementById("successMessage");

    successMessage.textContent =
         "✓ Reservation confirmed! Thank you for choosing Aroma Cafe ☕";

    reservationForm.reset();
});