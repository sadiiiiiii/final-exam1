function decreaseQuantity(itemId) {
    const quantityElement = document.getElementById(`itemQuantity_${itemId}`);
    let currentQuantity = parseInt(quantityElement.innerText, 10);
    if (currentQuantity > 1) {
        currentQuantity--;
        quantityElement.innerText = currentQuantity;
    }
}

// Function to increase quantity
function increaseQuantity(itemId) {
    const quantityElement = document.getElementById(`itemQuantity_${itemId}`);
    let currentQuantity = parseInt(quantityElement.innerText, 10);
    if (currentQuantity < 5) { // Check if current quantity is less than 5
        currentQuantity++;
        quantityElement.innerText = currentQuantity;
    }
}
