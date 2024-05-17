// Function to open the payment popup
function openPaymentPopup() {
    // Display the overlay and payment popup
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup-container').style.display = 'block';
}

// Function to close the payment popup
function closePaymentPopup() {
    // Display the overlay and congratulations popup
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('congrats-container').style.display = 'block';
    // Hide the payment popup
    document.getElementById('popup-container').style.display = 'none';
}

function redirectToHomeAndDeleteOrderItems() {

    // Redirect to the home page (you can replace 'index.html' with your home page URL)
    window.location.href = 'index.html';
}
