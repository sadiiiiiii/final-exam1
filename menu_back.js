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
var database = firebase.database();

// Create an array to store products

var productsArray = [
    {
        itemname: "Aloo Gobi",
        itemdisc: "A vegetarian dish made with potatoes, cauliflower, and Indian spices",
        itemprice: 169.99,
        itemimage: "indian/Aloo Gobi.png",
        uniqueid: 1,
    },
    {
        itemname: "Palak paneer",
        itemdisc: "A vegetarian dish made with spinach and paneer (a type of Indian cheese) in a creamy tomato-based sauce",
        itemprice: 189.99,
        itemimage: "indian/Palak Paneer.png",
        uniqueid: 2,
    },
    {
        itemname: "Chicken tikka masala",
        itemdisc: "A popular chicken dish that is marinated in yogurt and spices, then grilled and served in a creamy tomato-based sauce",
        itemprice: 229.99,
        itemimage: "indian/Ckn tikka masala.png",
        uniqueid: 3,
    },
    {
        itemname: "Biryani",
        itemdisc: "A mixed rice dish made with Indian spices, meat, and vegetables",
        itemprice: 289.99,
        itemimage: "indian/ckn biriyani.png",
        uniqueid: 4,
    },
    {
        itemname: "Butter chicken",
        itemdisc: "A creamy and mildly spiced chicken dish that is marinated in yogurt and spices",
        itemprice: 249.99,
        itemimage: "indian/butter ckn.png",
        uniqueid: 5,
    },
    {
        itemname: "Samosa",
        itemdisc: "A deep-fried or baked pastry stuffed with spiced potatoes, peas, and sometimes meat",
        itemprice: 49.99,
        itemimage: "indian/samosa.png",
        uniqueid: 6,
    },
    {
        itemname: "Dal makhani",
        itemdisc: "A vegetarian dish made with black lentils, kidney beans, and Indian spices in a creamy tomato-based sauce",
        itemprice: 129.99,
        itemimage: "indian/Dalmakhni.png",
        uniqueid: 7,
    },
    {
        itemname: "Malai kofta",
        itemdisc: " A vegetarian dish made with vegetable balls in a creamy tomato-based sauce",
        itemprice: 199.99,
        itemimage: "indian/malai kofta.png",
        uniqueid: 8,
    },
    {
        itemname: "Gulab jamun",
        itemdisc: "A dessert made with fried dough balls soaked in a sweet syrup",
        itemprice: 29.99,
        itemimage: "indian/gulab jamun.png",
        uniqueid: 9,
    },
    {
        itemname: "Tandoori chicken",
        itemdisc: "A chicken dish that is marinated in yogurt and spices, then grilled in a tandoor oven",
        itemprice: 159.99,
        itemimage: "indian/Tandoori Ckn.png",
        uniqueid: 10,
    },
    
];

var productsArray1 = [
    {
        itemname: "Coq au Vin",
        itemdisc: "Classic French dish with chicken braised in red wine, bacon, mushrooms, and garlic.",
        itemprice: 1400,
        itemimage: "french/Coq au Vin.png",
        uniqueid: 11,
    },
    {
        itemname: "Croissants",
        itemdisc: "Flaky, buttery pastry often enjoyed for breakfast or as a snack.",
        itemprice: 250,
        itemimage: "french/Croissants.png",
        uniqueid: 12,
    },
    {
        itemname: "Quiche",
        itemdisc: "Savory pie made with eggs, cream, cheese, and various fillings like bacon, spinach, or mushrooms.",
        itemprice: 1100,
        itemimage: "french/Quiche.png",
        uniqueid: 13,
    },
    {
        itemname: "Ratatouille",
        itemdisc: "Vegetable stew made with eggplant, zucchini, bell peppers, onions, and tomatoes.",
        itemprice: 950,
        itemimage: "french/Ratatouille.png",
        uniqueid: 14,
    },
    {
        itemname: "Salade Niçoise",
        itemdisc: "Salad with tuna, hard-boiled eggs, tomatoes, olives, and green beans.",
        itemprice: 1200,
        itemimage: "french/Salade Niçoise.png",
        uniqueid: 15,
    },
    {
        itemname: "Cassoulet",
        itemdisc: "Hearty stew with white beans, sausage, and various meats like pork, duck, or lamb.",
        itemprice: 1350,
        itemimage: "french/Cassoulet.png",
        uniqueid: 16,
    },
    {
        itemname: "Crème Brûlée",
        itemdisc: "Rich custard dessert with a layer of caramelized sugar.",
        itemprice: 550,
        itemimage: "french/Crème Brûlée.png",
        uniqueid: 17,
    },
    {
        itemname: "Moules Frites",
        itemdisc: "Dish with mussels cooked in white wine, served with French fries.",
        itemprice: 1200,
        itemimage: "french/Moules Frites.png",
        uniqueid: 18,
    },
    {
        itemname: "Soupe à lOignon",
        itemdisc: "French onion soup with beef broth, caramelized onions, and croutons topped with melted cheese.",
        itemprice: 650,
        itemimage: "french/Soupe à lOignon.png",
        uniqueid: 19,
    },
    {
        itemname: "Crêpes",
        itemdisc: "Thin pancakes that can be filled with sweet or savory fillings.",
        itemprice: 500,
        itemimage: "french/Crêpes.png",
        uniqueid: 20,
    }
];

var productsArray2 =[
    {
        itemname: "Peking Duck",
        itemdisc: "Famous Beijing dish made with roasted duck, served with thin pancakes, scallions, and hoisin sauce.",
        itemprice: 1650,
        itemimage: "china/Peking Duck.png",
        uniqueid: 21,
    },
    {
        itemname: "Kung Pao Chicken",
        itemdisc: "Spicy Sichuan dish made with chicken, peanuts, vegetables, and chili peppers.",
        itemprice: 1220,
        itemimage: "china/Kung Pao Chicken.png",
        uniqueid: 22,
    },
    {
        itemname: "Hot Pot",
        itemdisc: "Communal dish with a simmering pot of soup stock at the center, and diners add ingredients such as thinly sliced meat, seafood, and vegetables to the pot to cook.",
        itemprice: 2500,
        itemimage: "china/Hot Pot.png",
        uniqueid: 23,
    },
    {
        itemname: "Dumplings",
        itemdisc: "Small pieces of dough filled with meat, vegetables, or other ingredients.",
        itemprice: 890,
        itemimage: "china/Dumplings.png",
        uniqueid: 24,
    },
    {
        itemname: "Ma Po Tofu",
        itemdisc: "Spicy Sichuan dish made with tofu, ground pork, and chili bean paste.",
        itemprice: 1350,
        itemimage: "china/Ma Po Tofu.png",
        uniqueid: 25,
    },
    {
        itemname: "Spring Rolls",
        itemdisc: "Chinese appetizer consisting of vegetables, meat, or seafood wrapped in thin pastry and deep-fried.",
        itemprice: 650,
        itemimage: "china/Spring Rolls.png",
        uniqueid: 26,
    },
    {
        itemname: "Chow Mein",
        itemdisc: "Chinese noodle dish stir-fried with vegetables, meat, and sometimes seafood.",
        itemprice: 950,
        itemimage: "china/Chow Mein.png",
        uniqueid: 27,
    },
    {
        itemname: "Fried Rice",
        itemdisc: "Dish made with cooked rice stir-fried with vegetables, meat, and sometimes egg.",
        itemprice: 850,
        itemimage: "china/Fried Rice.png",
        uniqueid: 28,
    },
    {
        itemname: "Wonton Soup",
        itemdisc: "Soup made with wontons (small dumplings filled with meat or vegetables) and broth.",
        itemprice: 700,
        itemimage: "china/Wonton Soup.png",
        uniqueid: 29,
    },
    {
        itemname: "Egg Drop Soup",
        itemdisc: "Soup made with chicken broth and beaten eggs.",
        itemprice: 550,
        itemimage: "china/Egg Drop Soup.png",
        uniqueid: 30,
    },
];

var productsArray3 = [
    {
        itemname: "Risotto",
        itemdisc: "A creamy and rich rice dish that is cooked slowly in broth and can be prepared in an infinite number of ways.",
        itemprice: 500,
        itemimage: "italian/risotto.png",
        uniqueid: 31,
    },
    {
        itemname: "Pizza",
        itemdisc: "A national symbol of Italy, pizza is a food that represents Italy in the world and has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity.",
        itemprice: 400,
        itemimage: "italian/pizza.png",
        uniqueid: 32,
    },
    {
        itemname: "Pasta",
        itemdisc: "A national icon, loved all over the world, pasta was born in Sicily and expanded its production to other regions by the sea.",
        itemprice: 400,
        itemimage: "italian/pasta.png",
        uniqueid: 33,
    },
    {
        itemname: "Lasagna",
        itemdisc: "A classic Italian dish made with layers of pasta, meat, cheese, and tomato sauce.",
        itemprice: 650,
        itemimage: "italian/lasagna.png",
        uniqueid: 34,
    },
    {
        itemname: "Gelato",
        itemdisc: "A frozen dessert that is similar to ice cream, but denser and creamier. It is made with milk, sugar, and flavorings such as fresh fruit and nuts.",
        itemprice: 80,
        itemimage: "italian/Gelato.png",
        uniqueid: 35,
    },
    {
        itemname: "Tiramisu",
        itemdisc: "A popular coffee-flavored dessert made with ladyfingers, mascarpone cheese, and cocoa powder.",
        itemprice: 300,
        itemimage: "italian/Tiramisu.png",
        uniqueid: 36,
    },
    {
        itemname: "Bruschetta",
        itemdisc: "A toasted bread topped with chopped tomatoes, garlic, basil, and olive oil.",
        itemprice: 150,
        itemimage: "italian/Bruschetta.png",
        uniqueid: 37,
    },
    {
        itemname: "Caprese Salad",
        itemdisc: "A simple salad made with fresh mozzarella cheese, tomatoes, and basil leaves, drizzled with olive oil and balsamic vinegar.",
        itemprice: 200,
        itemimage: "italian/Caprese Salad.png",
        uniqueid: 38,
    },
    {
        itemname: "Minestrone",
        itemdisc: "A hearty vegetable soup that is made with a variety of vegetables, beans, and pasta.",
        itemprice: 180,
        itemimage: "italian/Minestrone.png",
        uniqueid: 39,
    },
    {
        itemname: "Spaghetti Carbonara",
        itemdisc: "A classic Roman pasta dish made with spaghetti, eggs, pancetta, and Pecorino Romano cheese.",
        itemprice: 350,
        itemimage: "italian/Spaghetti Carbonara.png",
        uniqueid: 40,
    },
];

var productsArray4 = [
    {
        itemname: "Chicken and Veggie Quesadillas",
        itemdisc: "Cheese-filled tortillas with chicken, corn, black beans, and salsa, grilled or fried until golden and crispy.",
        itemprice: 250,
        itemimage: "mexican/Chicken and Veggie Quesadillas.png",
        uniqueid: 41,
    },
    {
        itemname: "Chicken Kabobs Mexicana",
        itemdisc: "Skewers of chicken, pineapple, onion, and peppers, brushed with a spicy and sweet sauce made with honey, lime juice, and chipotle peppers. Grilled or broiled until charred and juicy.",
        itemprice: 350,
        itemimage: "mexican/Chicken Kabobs Mexicana.png",
        uniqueid: 42,
    },
    {
        itemname: "Chicken Tacos",
        itemdisc: "Soft or hard corn tortillas stuffed with shredded chicken, lettuce, cheese, salsa, and avocado. Sprinkled with cilantro and lime juice for a fresh finish.",
        itemprice: 150,
        itemimage: "mexican/Chicken Tacos.png",
        uniqueid: 43,
    },
    {
        itemname: "Veggie Burritos",
        itemdisc: "Flour tortillas wrapped around rice, beans, cheese, and salsa. You can also add some roasted veggies, guacamole, and sour cream for more flavor. You can also use vegan cheese and sour cream if you want to make it dairy-free³.",
        itemprice: 200,
        itemimage: "mexican/Veggie Burritos.png",
        uniqueid: 44,
    },
    {
        itemname: "Veggie Enchiladas",
        itemdisc: "Corn tortillas filled with black beans, cheese, and spinach, covered with a green sauce made with tomatillos, cilantro, and jalapeños. Baked until hot and melty.",
        itemprice: 250,
        itemimage: "mexican/Veggie Enchiladas.png",
        uniqueid: 45,
    },
    {
        itemname: "Veggie Tacos",
        itemdisc: "Soft or hard corn tortillas stuffed with various fillings, such as roasted cauliflower, mushrooms, corn, zucchini, or sweet potatoes. Topped with salsa, cheese, lettuce, or cabbage. You can also add some crumbled tofu or tempeh for extra protein.",
        itemprice: 130,
        itemimage: "mexican/veggie tacos.png",
        uniqueid: 46,
    },
    {
        itemname: "Veggie Nachos",
        itemdisc: "Tortilla chips loaded with cheese, beans, corn, olives, jalapeños, and salsa. Baked until the cheese is melted and bubbly. Served with sour cream and guacamole.",
        itemprice: 280,
        itemimage: "mexican/Veggie Nachos.png",
        uniqueid: 47,
    },
    {
        itemname: "Veggie Queso Dip",
        itemdisc: "A creamy and cheesy dip made with cream cheese, cheddar cheese, salsa, and veggies such as spinach, corn, and peppers. Served with tortilla chips or fresh veggies for dipping.",
        itemprice: 180,
        itemimage: "mexican/Veggie Queso Dip.png",
        uniqueid: 48,
    },
    {
        itemname: "Churros",
        itemdisc: "Fried dough sticks coated in cinnamon sugar and served with chocolate or caramel sauce for dipping.",
        itemprice: 60,
        itemimage: "mexican/Churros.png",
        uniqueid: 49,
    },
    {
        itemname: "Flan",
        itemdisc: "A creamy caramel custard dessert that is smooth and silky.",
        itemprice: 100,
        itemimage: "mexican/Flan.png",
        uniqueid: 50,
    }

];
var productsArray5 = [
        {
            itemname: "Sushi",
            itemdisc: "A dish made of vinegared rice and fresh fish, presented in a number of ways and shapes ",
            itemprice: 330,
            itemimage: "japanese/sushi.png",
            uniqueid: 51,
        },
        {
            itemname: "Tempura",
            itemdisc: ": A dish of battered and fried fish, seafood, or vegetables. Every piece is a bite of crisply fried perfection ",
            itemprice: 250,
            itemimage: "japanese/tempura.png",
            uniqueid: 52,
        },
        {
            itemname: "Yakitori",
            itemdisc: "A dish of bite-sized cuts of chicken grilled on a skewer. It makes use of every part of the chicken, including heart, liver, and even chicken comb ",
            itemprice: 150,
            itemimage: "japanese/yakitori.png",
            uniqueid: 53,
        },
    
        {
            itemname: "Tsukemono",
            itemdisc: "Traditional pickles that have been eaten in Japan since prehistoric times. Made with a wide variety of ingredients, including vegetables like daikon radish and eggplant, as well as fruits like ume plum ",
            itemprice: 430,
            itemimage: "japanese/tsukimono.png",
            uniqueid: 54,
        },
    
        {
            itemname: "Kaiseki",
            itemdisc: "Kaiseki: A tasting course comprised of small, seasonally themed dishes crafted with the utmost precision and attention to detail",
            itemprice: 450,
            itemimage: "japanese/kaiseki.png",
            uniqueid: 55,
        },
    
        {
            itemname: "Unagi",
            itemdisc: "A freshwater eel that is grilled and served with a sweet and savory sauce ",
            itemprice: 450,
            itemimage: "japanese/unagi.png",
            uniqueid: 56,
        },
    
        {
            itemname: "Soba",
            itemdisc: "Thin noodles made from buckwheat flour, often served cold with a dipping sauce",
            itemprice: 325,
            itemimage: "japanese/soba.png",
            uniqueid: 57,
        },
    
        {
            itemname: "Udon",
            itemdisc: "Udon: Thick, chewy noodles made from wheat flour, often served in a hot soup",
            itemprice: 300,
            itemimage: "japanese/udon.png",
            uniqueid: 58,
        },
    
        {
            itemname: "Okonomiyaki:",
            itemdisc: " A savory pancake made with flour, eggs, shredded cabbage, and a variety of other ingredients, often topped with a sweet and savory sauce",
            itemprice: 225,
            itemimage: "japanese/okonomiyaki.png",
            uniqueid: 59,
        },
    
        {
            itemname: "Onigiri",
            itemdisc: "A rice ball that is often filled with pickled plum, salmon, or other ingredients, and wrapped in seaweed ",
            itemprice: 80,
            itemimage: "japanese/onigiri.png",
            uniqueid: 60,
        }
];

function save() {

    productsArray.forEach((product, index) => {
        var productRef = database.ref('Indian/' + 'product' + (index + 1));

        productRef.set(product);
    });

    productsArray1.forEach((product, index) => {
        var productRef = database.ref('French/' + 'product' + (index + 1));

        productRef.set(product);
    });
    productsArray2.forEach((product, index) => {
        var productRef = database.ref('Chinese/' + 'product' + (index + 1));

        productRef.set(product);
    });

    productsArray3.forEach((product, index) => {
        var productRef = database.ref('Italian/' + 'product' + (index + 1));

        productRef.set(product);
    });
    productsArray4.forEach((product, index) => {
        
        var productRef = database.ref('Mexican/' + 'product' + (index + 1));

        productRef.set(product);
    });
    productsArray5.forEach((product, index) => {
        
        var productRef = database.ref('Japanese/' + 'product' + (index + 1));

        productRef.set(product);
    });


    alert('Saved');
}
