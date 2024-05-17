
// Function to show the "Place Order" modal
function showPlaceOrderModal() {
    var placeOrderModal = document.getElementById('placeOrderModal');
    placeOrderModal.style.display = 'block';
  }
  
  // Function to close the "Place Order" modal
  function closePlaceOrderModal() {
    var placeOrderModal = document.getElementById('placeOrderModal');
    placeOrderModal.style.display = 'none';
  }
  
  // Function to show the "Congratulations" modal
  function showCongratulationsModal() {
    var placeOrderModal = document.getElementById('placeOrderModal');
    placeOrderModal.style.display = 'none';
  
    var congratulationsModal = document.getElementById('congratulationsModal');
    congratulationsModal.style.display = 'block';
  }
  
  // Function to close the "Congratulations" modal and return to the home page
  function returnToHomePage() {
    var congratulationsModal = document.getElementById('congratulationsModal');
    congratulationsModal.style.display = 'none';
  
    // You can redirect to the home page here or perform any other actions
  }
  