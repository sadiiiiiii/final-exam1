import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js';


var firebaseConfig = {
  apiKey: "AIzaSyCme5c5EadeiXYBmWDlnV-9vEFlMF7bua8",
  authDomain: "restaurant-order1-bd4b2.firebaseapp.com",
  databaseURL: "https://restaurant-order1-bd4b2-default-rtdb.firebaseio.com",
  projectId: "restaurant-order1-bd4b2",
  storageBucket: "restaurant-order1-bd4b2.appspot.com",
  messagingSenderId: "966508305294",
  appId: "1:966508305294:web:e39d5cf61d8cccd5c4a2df"
};
const firebaseApp = initializeApp(config);
const database = getDatabase(firebaseApp);

let menuData;

function animateButton(e) {
  e.preventDefault();
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(() => {
    e.target.classList.remove('animate');
  }, 700);
}

document.querySelectorAll('.bubbly-button').forEach(button => {
  button.addEventListener('click', animateButton, false);
});

document.addEventListener('click', function (event) {
  const target = event.target;

  // Check if the clicked element is a quantity button
  if (target.classList.contains('quantity-btn')) {
    const key = target.getAttribute('data-key');
    const delta = target.classList.contains('increase') ? 1 : -1;

    // Call the updateQuantity function with the key and delta
    updateQuantity(key, delta);
  }
});

function displayMenu(snapshot, containerId) {
  menuData = snapshot.val();
  const dataContainer = document.getElementById(containerId);
  const billContainer = document.getElementById('bill-items');
  const totalAmountElement = document.getElementById('total-amount');

  dataContainer.innerHTML = '';
  billContainer.innerHTML = '';

  for (const key in menuData) {
    if (Object.hasOwnProperty.call(menuData, key)) {
      const product = menuData[key];
      const card = createFoodCard(product, key);
      dataContainer.appendChild(card);

      updateBill(product, key);
    }
  }

  updateTotalAmount();
}

function createFoodCard(product, key) {
  const card = document.createElement('div');
  card.classList.add('food-card');
  card.innerHTML = `
  <div class="food-menu-item">
  <div class="food-img">
    <img src="${product.itemimage}" alt="${product.itemname}" class="food-item-img">
  </div>
  <div class="food-description">
    <h2 class="food-title">${product.itemname}</h2>
    <p class="food-price">Price: &#8377;${product.itemprice}</p>
    <div class="quantity-section">
      <button class="quantity-btn decrease" data-key="${key}">-</button>
      <span class="quantity-text" id="itemQuantity_${key}">${product.quantity || 1}</span>
      <button class="quantity-btn increase" data-key="${key}">+</button>
    </div>
  </div>
</div>
  `;
  return card;
}

function updateBill(product, key) {
  const billItem = document.createElement('div');
  billItem.innerHTML = `
    <p>${product.itemname} x<span id="bill-quantity_${key}">${product.quantity || 1}</span></p>
    <p>Price: ${product.itemprice}</p>
    <hr>
  `;
  const billContainer = document.getElementById('bill-items');
  billContainer.appendChild(billItem);

  // Reference to 'customerorder/' folder with the unique key
  const customerOrderRef = ref(database, 'customerorder/' + key);
  set(customerOrderRef, { // Overwrite existing data under 'customerorder/' with the item's key
    itemname: product.itemname,
    quantity: product.quantity || 1, // Initial quantity
    price: product.itemprice
  });
}

function updateTotalAmount() {
  const totalAmountElement = document.getElementById('total-amount');
  let totalAmount = 0;

  if (menuData) {
    const quantityElements = document.querySelectorAll('[id^="itemQuantity_"]');
    quantityElements.forEach(element => {
      const key = element.id.split('_')[1];
      const quantity = parseInt(element.innerText);
      const product = menuData[key];

      if (product) {
        totalAmount += quantity * product.itemprice;
      }
    });
  }

  totalAmountElement.innerText = `${totalAmount}`;
}

function updateQuantity(key, delta) {
  const quantityElement = document.getElementById(`itemQuantity_${key}`);
  let currentQuantity = parseInt(quantityElement.innerText);
  currentQuantity = isNaN(currentQuantity) ? 0 : currentQuantity; // Ensure currentQuantity is a valid number
  const newQuantity = Math.max(0, currentQuantity + delta); // Ensure the quantity is at least 0
  quantityElement.innerText = newQuantity;

  const billQuantityElement = document.getElementById(`bill-quantity_${key}`);
  if (billQuantityElement) {
    billQuantityElement.innerText = newQuantity;
  }

  updateTotalAmount(); // Update the total amount

  // Update the quantity in Firebase
  const customerOrderRef = ref(database, 'customerorder/' + key);
  // Set new data to overwrite existing data under 'customerorder/' with the item's key
  set(customerOrderRef, {
    itemname: menuData[key].itemname,
    quantity: newQuantity,
    price: menuData[key].itemprice
  });
}

function setupMenuListener(menuRef, containerId) {
  onValue(ref(database, menuRef), snapshot => {
    displayMenu(snapshot, containerId);
  });
}

setupMenuListener('order', 'firebase-data-order');

const sections = document.querySelectorAll('.food-menu-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  observer.observe(section);
});
