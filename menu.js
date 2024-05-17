import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js';

var animateButton = function (e) {
    e.preventDefault();
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  
  var firebaseConfig = {
    apiKey: "AIzaSyCme5c5EadeiXYBmWDlnV-9vEFlMF7bua8",
    authDomain: "restaurant-order1-bd4b2.firebaseapp.com",
    databaseURL: "https://restaurant-order1-bd4b2-default-rtdb.firebaseio.com",
    projectId: "restaurant-order1-bd4b2",
    storageBucket: "restaurant-order1-bd4b2.appspot.com",
    messagingSenderId: "966508305294",
    appId: "1:966508305294:web:e39d5cf61d8cccd5c4a2df"
  };
// Initialize Firebase
const firebaseApp = initializeApp(config);
const database = getDatabase(firebaseApp);

function displayData(data, containerId) {
    const dataContainer = document.getElementById(containerId);
    dataContainer.innerHTML = "";

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const product = data[key];
            const card = document.createElement("div");
            card.classList.add("food-card");
            card.innerHTML = `
            <div class="food-menu-item">
            <div class="food-img">
                <img src="${product.itemimage}" alt="${product.itemname}" class="food-item-img">
                </div>
                <div class="food-description">
                <h2 class="food-titile">${product.itemname}</h2>
                <p>${product.itemdisc}</p>
                <p class="food-price">Price: &#8377;${product.itemprice}</p>
                </div>
                <button onclick="save(${product.uniqueid})" class="bubbly-button">Add To Cart</button>

            </div>
            `;
            dataContainer.appendChild(card);
        }
    }
}
function setupCuisineListener(cuisineRef, containerId) {
    onValue(ref(database, cuisineRef), function (snapshot) {
        var data = snapshot.val();
        displayData(data, containerId);
    });
}

setupCuisineListener("Indian", "firebase-data-indian");
setupCuisineListener("Italian", "firebase-data-italian");
setupCuisineListener("Japanese", "firebase-data-japanese");
setupCuisineListener("Chinese", "firebase-data-chinese");
setupCuisineListener("Mexican", "firebase-data-mexican");
setupCuisineListener("French", "firebase-data-french");
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
