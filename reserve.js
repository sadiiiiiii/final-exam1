document.addEventListener("DOMContentLoaded", function() {
    const firebaseConfig = {
        apiKey: "AIzaSyCme5c5EadeiXYBmWDlnV-9vEFlMF7bua8",
        authDomain: "restaurant-order1-bd4b2.firebaseapp.com",
        databaseURL: "https://restaurant-order1-bd4b2-default-rtdb.firebaseio.com",
        projectId: "restaurant-order1-bd4b2",
        storageBucket: "restaurant-order1-bd4b2.appspot.com",
        messagingSenderId: "966508305294",
        appId: "1:966508305294:web:e39d5cf61d8cccd5c4a2df"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const time = document.getElementById("time").value;
            const date = document.getElementById("date").value;

            // Store the data in Firebase
            const userData = {
                name: name,
                phone: phone,
                email: email,
                time: time,
                date: date
            };

            // Push the data to Firebase
            const usersRef = database.ref(('reservation/') + (name));
            usersRef.push(userData)
                .then(function() {
                    console.log('User registration successful');
                    alert('User registration successful');
                })
                .catch(function(error) {
                    console.error('Error registering user: ', error);
                    alert('An error occurred while registering user');
                });

            // Reset form fields after submission (optional)
            registrationForm.reset();
        });
    } else {
        console.error("Registration form element not found.");
    }
});
