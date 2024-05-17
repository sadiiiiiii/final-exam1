// Your web app's Firebase configuration

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
    firebase.initializeApp(firebaseConfig);
    
    // Set database variable
    var database = firebase.database()

    function save() {
        var name = document.getElementById('cust_name').value;
        var phone = document.getElementById('cust_phoneno').value;
        var email = document.getElementById('cust_email').value;
        var address = document.getElementById('cust_address').value;
        var cookingInstructions = document.getElementById('inputcook').value || '';
    
        // Validate required fields
    
        // Save customer details
        const customerData = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            cookingInstructions: cookingInstructions,
        };
    
        // Save customer order data under 'customer_orders' with a fixed key
        database.ref('customer_order').set(customerData)
            .then(() => {
                console.log('Data saved successfully');
            })
            .catch(error => {
                console.error('Error saving data:', error);
                alert('An error occurred while saving data.');
            });
    }
        
    
    
      // Event listeners for input fields
      document.getElementById('cust_name').addEventListener('input', save);
      document.getElementById('cust_phoneno').addEventListener('input', save);
      document.getElementById('cust_email').addEventListener('input', save);
      document.getElementById('cust_address').addEventListener('input', save);
      document.getElementById('inputcook').addEventListener('input', save);