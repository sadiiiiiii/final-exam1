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
      var name = document.getElementById('cust_name').value
      var mail = document.getElementById('cust_mail').value
      var msg = document.getElementById('cust_msg').value
     
    
      database.ref('suggestions/' + name).set({
        name : name,
        mail : mail,
        msg : msg,
      })
    
      alert('Saved')
    }
    
  
  