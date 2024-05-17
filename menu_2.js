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
        itemprice: 19.99,
        itemimage: "https://th.bing.com/th/id/OIG.QRV27LfIec36F2isdZLz?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 1,
    },
    {
        itemname: "Palak paneer",
        itemdisc: "A vegetarian dish made with spinach and paneer (a type of Indian cheese) in a creamy tomato-based sauce",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.77vZaClLYyP.aRKOqGMF?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 2,
    },
    {
        itemname: "Chicken tikka masala",
        itemdisc: "A popular chicken dish that is marinated in yogurt and spices, then grilled and served in a creamy tomato-based sauce",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG..BbUPyf2G0RoBmolM8d7?pid=ImgGn",
        uniqueid: 3,
    },
    {
        itemname: "Biryani",
        itemdisc: "A mixed rice dish made with Indian spices, meat, and vegetables",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.nz_xW03fUrQTC05qEZKC?pid=ImgGn",
        uniqueid: 4,
    },
    {
        itemname: "Butter chicken",
        itemdisc: "A creamy and mildly spiced chicken dish that is marinated in yogurt and spices",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.bKdaJknwViZXPnatJuC6?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 5,
    },
    {
        itemname: "Samosa",
        itemdisc: "A deep-fried or baked pastry stuffed with spiced potatoes, peas, and sometimes meat",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.VAN8iABCyp3JtgB3vlt9?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 6,
    },
    {
        itemname: "Dal makhani",
        itemdisc: "A vegetarian dish made with black lentils, kidney beans, and Indian spices in a creamy tomato-based sauce",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.p_rQ5jEyGFDk4RKPb_cm?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 7,
    },
    {
        itemname: "Malai kofta",
        itemdisc: " A vegetarian dish made with vegetable balls in a creamy tomato-based sauce",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.HLQcbn.D.lDGDRzYkng2?pid=ImgGn",
        uniqueid: 8,
    },
    {
        itemname: "Gulab jamun",
        itemdisc: "A dessert made with fried dough balls soaked in a sweet syrup",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.2oQRdbV7UKJJrwqhIdK6?pid=ImgGn",
        uniqueid: 9,
    },
    {
        itemname: "Tandoori chicken",
        itemdisc: "A chicken dish that is marinated in yogurt and spices, then grilled in a tandoor oven",
        itemprice: 29.99,
        itemimage: "https://th.bing.com/th/id/OIG.SSOQQpmyISVRonJzcT52?pid=ImgGn",
        uniqueid: 10,
    },
    {
        itemname: "Coq au Vin",
        itemdisc: "Classic French dish with chicken braised in red wine, bacon, mushrooms, and garlic.",
        itemprice: 1400,
        itemimage: "https://th.bing.com/th/id/OIG.7M.zUBDRjv8MUSXlDN1w?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 11,
    },
    {
        itemname: "Croissants",
        itemdisc: "Flaky, buttery pastry often enjoyed for breakfast or as a snack.",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.4pIUWYK9t9aDbK0Dr5sO?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 12,
    },
    {
        itemname: "Quiche",
        itemdisc: "Savory pie made with eggs, cream, cheese, and various fillings like bacon, spinach, or mushrooms.",
        itemprice: 1100,
        itemimage: "https://th.bing.com/th/id/OIG.mz_v2w7ONZ_PcfM5yR25?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 13,
    },
    {
        itemname: "Ratatouille",
        itemdisc: "Vegetable stew made with eggplant, zucchini, bell peppers, onions, and tomatoes.",
        itemprice: 950,
        itemimage: "https://th.bing.com/th/id/OIG.96Qlvr9a7TS_uDoHp.Bo?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 14,
    },
    {
        itemname: "Salade Niçoise",
        itemdisc: "Salad with tuna, hard-boiled eggs, tomatoes, olives, and green beans.",
        itemprice: 1200,
        itemimage: "https://th.bing.com/th/id/OIG.RmfSMiXXhmW8Db6RQ9Qp?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 15,
    },
    {
        itemname: "Cassoulet",
        itemdisc: "Hearty stew with white beans, sausage, and various meats like pork, duck, or lamb.",
        itemprice: 1350,
        itemimage: "https://th.bing.com/th/id/OIG.ix6PzYRdfmZfbiEnUKj4?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 16,
    },
    {
        itemname: "Crème Brûlée",
        itemdisc: "Rich custard dessert with a layer of caramelized sugar.",
        itemprice: 550,
        itemimage: "https://th.bing.com/th/id/OIG.4hlFn6a1.eoePGzDJkUl?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 17,
    },
    {
        itemname: "Moules Frites",
        itemdisc: "Dish with mussels cooked in white wine, served with French fries.",
        itemprice: 1200,
        itemimage: "https://th.bing.com/th/id/OIG.2406cgtREa3WQoO7rG2x?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 18,
    },
    {
        itemname: "Soupe à lOignon",
        itemdisc: "French onion soup with beef broth, caramelized onions, and croutons topped with melted cheese.",
        itemprice: 650,
        itemimage: "https://th.bing.com/th/id/OIG.68kYuXFC6fZTayx_OvS5?pid=ImgGn",
        uniqueid: 19,
    },
    {
        itemname: "Crêpes",
        itemdisc: "Thin pancakes that can be filled with sweet or savory fillings.",
        itemprice: 500,
        itemimage: "https://th.bing.com/th/id/OIG.JQ8vIxRZhZR75UgV8_DQ?pid=ImgGn",
        uniqueid: 20,
    },
    {
        itemname: "Peking Duck",
        itemdisc: "Famous Beijing dish made with roasted duck, served with thin pancakes, scallions, and hoisin sauce.",
        itemprice: 1650,
        itemimage: "https://th.bing.com/th/id/OIG.GGuc6C6zCEJ9OBD2IFjU?pid=ImgGn",
        uniqueid: 21,
    },
    {
        itemname: "Kung Pao Chicken",
        itemdisc: "Spicy Sichuan dish made with chicken, peanuts, vegetables, and chili peppers.",
        itemprice: 1220,
        itemimage: "https://th.bing.com/th/id/OIG.amom.C4.6cJRy.N449ET?pid=ImgGn",
        uniqueid: 22,
    },
    {
        itemname: "Hot Pot",
        itemdisc: "Communal dish with a simmering pot of soup stock at the center, and diners add ingredients such as thinly sliced meat, seafood, and vegetables to the pot to cook.",
        itemprice: 2500,
        itemimage: "https://th.bing.com/th/id/OIG.QkjuoGSKST_VPf9Pho9k?pid=ImgGn",
        uniqueid: 23,
    },
    {
        itemname: "Dumplings",
        itemdisc: "Small pieces of dough filled with meat, vegetables, or other ingredients.",
        itemprice: 890,
        itemimage: "https://th.bing.com/th/id/OIG.qFCmMeeJAnUJ.z6tIycu?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 24,
    },
    {
        itemname: "Ma Po Tofu",
        itemdisc: "Spicy Sichuan dish made with tofu, ground pork, and chili bean paste.",
        itemprice: 1350,
        itemimage: "https://th.bing.com/th/id/OIG.voJgP6BN76v2EESZkO3i?pid=ImgGn",
        uniqueid: 25,
    },
    {
        itemname: "Spring Rolls",
        itemdisc: "Chinese appetizer consisting of vegetables, meat, or seafood wrapped in thin pastry and deep-fried.",
        itemprice: 650,
        itemimage: "https://th.bing.com/th/id/OIG.fmzr18E2OzukAF.NB_It?pid=ImgGn",
        uniqueid: 26,
    },
    {
        itemname: "Chow Mein",
        itemdisc: "Chinese noodle dish stir-fried with vegetables, meat, and sometimes seafood.",
        itemprice: 950,
        itemimage: "https://th.bing.com/th/id/OIG.0QGD.PId.Ewo9T.nfzXj?pid=ImgGn",
        uniqueid: 27,
    },
    {
        itemname: "Fried Rice",
        itemdisc: "Dish made with cooked rice stir-fried with vegetables, meat, and sometimes egg.",
        itemprice: 850,
        itemimage: "https://th.bing.com/th/id/OIG.s8QyWmAh8cE700ksgP5d?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 28,
    },
    {
        itemname: "Wonton Soup",
        itemdisc: "Soup made with wontons (small dumplings filled with meat or vegetables) and broth.",
        itemprice: 700,
        itemimage: "https://th.bing.com/th/id/OIG.IV1m23jcmmxPz7pqNhRQ?pid=ImgGn",
        uniqueid: 29,
    },
    {
        itemname: "Egg Drop Soup",
        itemdisc: "Soup made with chicken broth and beaten eggs.",
        itemprice: 550,
        itemimage: "https://th.bing.com/th/id/OIG.2uK8jdYnIdhH_Im6CQQi?pid=ImgGn",
        uniqueid: 30,
    },
    {
        itemname: "Risotto",
        itemdisc: "A creamy and rich rice dish that is cooked slowly in broth and can be prepared in an infinite number of ways.",
        itemprice: 800,
        itemimage: "https://th.bing.com/th/id/OIG.o1hjqS1QiKduPylMyZOU?pid=ImgGn",
        uniqueid: 31,
    },
    {
        itemname: "Pizza",
        itemdisc: "A national symbol of Italy, pizza is a food that represents Italy in the world and has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity.",
        itemprice: 600,
        itemimage: "https://th.bing.com/th/id/OIG.ccA9rEtwEIN4mjalY8I4?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 32,
    },
    {
        itemname: "Pasta",
        itemdisc: "A national icon, loved all over the world, pasta was born in Sicily and expanded its production to other regions by the sea.",
        itemprice: 700,
        itemimage: "https://th.bing.com/th/id/OIG.ftRNawh8jriKvW2VMa5e?pid=ImgGn",
        uniqueid: 33,
    },
    {
        itemname: "Lasagna",
        itemdisc: "A classic Italian dish made with layers of pasta, meat, cheese, and tomato sauce.",
        itemprice: 850,
        itemimage: "https://th.bing.com/th/id/OIG.uUcPb_LYC3erp7sYUGvV?pid=ImgGn",
        uniqueid: 34,
    },
    {
        itemname: "Gelato",
        itemdisc: "A frozen dessert that is similar to ice cream, but denser and creamier. It is made with milk, sugar, and flavorings such as fresh fruit and nuts.",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.jL_0fXdgZX.SeHmA4VmO?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 35,
    },
    {
        itemname: "Tiramisu",
        itemdisc: "A popular coffee-flavored dessert made with ladyfingers, mascarpone cheese, and cocoa powder.",
        itemprice: 300,
        itemimage: "https://th.bing.com/th/id/OIG.A2Uqnj24NBbbHzcsWL.K?pid=ImgGn",
        uniqueid: 36,
    },
    {
        itemname: "Bruschetta",
        itemdisc: "A toasted bread topped with chopped tomatoes, garlic, basil, and olive oil.",
        itemprice: 150,
        itemimage: "https://th.bing.com/th/id/OIG.29RwAKGmJv_iZrba9Dd6?pid=ImgGn",
        uniqueid: 37,
    },
    {
        itemname: "Caprese Salad",
        itemdisc: "A simple salad made with fresh mozzarella cheese, tomatoes, and basil leaves, drizzled with olive oil and balsamic vinegar.",
        itemprice: 200,
        itemimage: "https://th.bing.com/th/id/OIG.5ZoU99N72TPoEJhfuvoZ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 38,
    },
    {
        itemname: "Minestrone",
        itemdisc: "A hearty vegetable soup that is made with a variety of vegetables, beans, and pasta.",
        itemprice: 180,
        itemimage: "https://th.bing.com/th/id/OIG.eAiauWzat711TRXIE48.?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 39,
    },
    {
        itemname: "Spaghetti Carbonara",
        itemdisc: "A classic Roman pasta dish made with spaghetti, eggs, pancetta, and Pecorino Romano cheese.",
        itemprice: 350,
        itemimage: "https://th.bing.com/th/id/OIG.9OkFyYuIYUXaB4s2Zuxy?pid=ImgGn",
        uniqueid: 40,
    },
    {
        itemname: "Chicken and Veggie Quesadillas",
        itemdisc: "Cheese-filled tortillas with chicken, corn, black beans, and salsa, grilled or fried until golden and crispy.",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.10nRCFpxhGA32cxR.QYZ?pid=ImgGn/to/quesadilla_image.jpg",
        uniqueid: 41,
    },
    {
        itemname: "Chicken Kabobs Mexicana",
        itemdisc: "Skewers of chicken, pineapple, onion, and peppers, brushed with a spicy and sweet sauce made with honey, lime juice, and chipotle peppers. Grilled or broiled until charred and juicy.",
        itemprice: 350,
        itemimage: "https://th.bing.com/th/id/OIG.Kt93hACvR_5TMXs9wxDq?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 42,
    },
    {
        itemname: "Chicken Tacos",
        itemdisc: "Soft or hard corn tortillas stuffed with shredded chicken, lettuce, cheese, salsa, and avocado. Sprinkled with cilantro and lime juice for a fresh finish.",
        itemprice: 150,
        itemimage: "https://th.bing.com/th/id/OIG.lJ2FqWJOeqP.Y717vbqs?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 43,
    },
    {
        itemname: "Veggie Burritos",
        itemdisc: "Flour tortillas wrapped around rice, beans, cheese, and salsa. You can also add some roasted veggies, guacamole, and sour cream for more flavor. You can also use vegan cheese and sour cream if you want to make it dairy-free³.",
        itemprice: 200,
        itemimage: "https://th.bing.com/th/id/OIG.n.xmsuuqVHMQlgHKG1WM?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 44,
    },
    {
        itemname: "Veggie Enchiladas",
        itemdisc: "Corn tortillas filled with black beans, cheese, and spinach, covered with a green sauce made with tomatillos, cilantro, and jalapeños. Baked until hot and melty.",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.BW2NpTG7uFwSLgS_pSdf?pid=ImgGn",
        uniqueid: 45,
    },
    {
        itemname: "Veggie Tacos",
        itemdisc: "Soft or hard corn tortillas stuffed with various fillings, such as roasted cauliflower, mushrooms, corn, zucchini, or sweet potatoes. Topped with salsa, cheese, lettuce, or cabbage. You can also add some crumbled tofu or tempeh for extra protein.",
        itemprice: 130,
        itemimage: "https://th.bing.com/th/id/OIG.juT3FlOrjNvvjznc3uXv?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 46,
    },
    {
        itemname: "Veggie Nachos",
        itemdisc: "Tortilla chips loaded with cheese, beans, corn, olives, jalapeños, and salsa. Baked until the cheese is melted and bubbly. Served with sour cream and guacamole.",
        itemprice: 280,
        itemimage: "https://th.bing.com/th/id/OIG.Hg2ATXbao0dYFCGQ5gGl?pid=ImgGn",
        uniqueid: 47,
    },
    {
        itemname: "Veggie Queso Dip",
        itemdisc: "A creamy and cheesy dip made with cream cheese, cheddar cheese, salsa, and veggies such as spinach, corn, and peppers. Served with tortilla chips or fresh veggies for dipping.",
        itemprice: 180,
        itemimage: "https://th.bing.com/th/id/OIG._Ku09vF_RKJBJi2aOglL?pid=ImgGn",
        uniqueid: 48,
    },
    {
        itemname: "Churros",
        itemdisc: "Fried dough sticks coated in cinnamon sugar and served with chocolate or caramel sauce for dipping.",
        itemprice: 60,
        itemimage: "https://th.bing.com/th/id/OIG.Vgyaz.lUtfdxsmwJ9JO2?pid=ImgGn",
        uniqueid: 49,
    },
    {
        itemname: "Flan",
        itemdisc: "A creamy caramel custard dessert that is smooth and silky.",
        itemprice: 100,
        itemimage: "https://th.bing.com/th/id/OIG.t8Ds6RpEVzGrgqqf5FJh?pid=ImgGn",
        uniqueid: 50,
    },
    {
        itemname: "Sushi",
        itemdisc: "A dish made of vinegared rice and fresh fish, presented in a number of ways and shapes ",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.mhTh.2.SioWQDksfx3uJ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 51,
    },
    {
        itemname: "Tempura",
        itemdisc: ": A dish of battered and fried fish, seafood, or vegetables. Every piece is a bite of crisply fried perfection ",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.5bpJp0hZKgwsxuCgl9Fh?pid=ImgGn",
        uniqueid: 52,
    },
    {
        itemname: "Yakitori",
        itemdisc: "A dish of bite-sized cuts of chicken grilled on a skewer. It makes use of every part of the chicken, including heart, liver, and even chicken comb ",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.v3hVSJI_e8zgJlsSy8c3?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 53,
    },

    {
        itemname: "Tsukemono",
        itemdisc: "Traditional pickles that have been eaten in Japan since prehistoric times. Made with a wide variety of ingredients, including vegetables like daikon radish and eggplant, as well as fruits like ume plum ",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.i0S_f2Nr1ar2Fkc0JIDa?pid=ImgGn",
        uniqueid: 54,
    },

    {
        itemname: "Kaiseki",
        itemdisc: "Kaiseki: A tasting course comprised of small, seasonally themed dishes crafted with the utmost precision and attention to detail",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.bmD76iK_ZLSnTS0Kxky6?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 55,
    },

    {
        itemname: "Unagi",
        itemdisc: "A freshwater eel that is grilled and served with a sweet and savory sauce ",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG._LJU7rua8PybukIK5krX?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 56,
    },

    {
        itemname: "Soba",
        itemdisc: "Thin noodles made from buckwheat flour, often served cold with a dipping sauce",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.5N_hkwshZIyAkp_exOZX?pid=ImgGn",
        uniqueid: 57,
    },

    {
        itemname: "Udon",
        itemdisc: "Udon: Thick, chewy noodles made from wheat flour, often served in a hot soup",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.CSfGrz3_a4lFVkB7hPin?pid=ImgGn",
        uniqueid: 58,
    },

    {
        itemname: "Okonomiyaki:",
        itemdisc: " A savory pancake made with flour, eggs, shredded cabbage, and a variety of other ingredients, often topped with a sweet and savory sauce",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.LjURdT0PFmJh0qmyVKVK?pid=ImgGn",
        uniqueid: 59,
    },

    {
        itemname: "Onigiri",
        itemdisc: "A rice ball that is often filled with pickled plum, salmon, or other ingredients, and wrapped in seaweed ",
        itemprice: 250,
        itemimage: "https://th.bing.com/th/id/OIG.8mLAatuBxvdggHkzTPhF?w=1024&h=1024&rs=1&pid=ImgDetMain",
        uniqueid: 60,
    },
];

function save(uniqueid) {
    // Find the product with the matching uniqueid
    var product = productsArray.find(item => item.uniqueid === uniqueid);

    if (product) {
        // Get reference to a subfolder under "order" with a unique key for each product
        var productRef = database.ref('order/' + 'product' + uniqueid);

        // Set the product details to the subfolder
        productRef.set(product);

        alert('Item added to cart');
    } else {
        alert('Product not found');
    }
}
