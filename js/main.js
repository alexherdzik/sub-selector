const subs = [
  {
    "number": 1,
    "name": "Manhattan Chicken Salad",
    "ingredients": [
      "chicken salad",
      "red grapes",
      "toasted almonds",
      "lettuce",
      "tomato",
      "toasted sub"
    ],
    "price": {
      "half": 5.75,
      "whole": 10.75
    },
    "description": "Chicken Salad, Red Grapes, Toasted Almonds, Lettuce, Tomato on a toasted Sub"
  },
  {
    "number": 2,
    "name": "Downtown Veggie",
    "ingredients": [
      "provolone",
      "cheddar",
      "swiss",
      "pepper jack",
      "red onion",
      "lettuce",
      "tomato",
      "roasted red peppers",
      "cucumber",
      "basil mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Provolone, Cheddar, Swiss, Pepper Jack, Red Onion, Lettuce, Tomato, Roasted Red Peppers, Cucumber, Basil Mayo on a toasted Sub"
  },
  {
    "number": 3,
    "name": "Vegetarian",
    "ingredients": [
      "roasted vegetables",
      "provolone",
      "lettuce",
      "tomato",
      "pesto mayo",
      "toasted sub"
    ],
    "price": {
      "half": 5.75,
      "whole": 10.75
    },
    "description": "Roasted Vegetables, melted Provolone, Lettuce, Tomato, Pesto Mayo on a toasted Sub"
  },
  {
    "number": 4,
    "name": "Park Avenue",
    "ingredients": [
      "turkey",
      "bacon",
      "lettuce",
      "tomato",
      "provolone",
      "basil mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, BLT, Provolone, Basil Mayo on a toasted Sub"
  },
  {
    "number": 5,
    "name": "Turkey Natural",
    "ingredients": [
      "turkey",
      "cucumber",
      "muenster cheese",
      "lettuce",
      "tomato",
      "basil mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.25,
      "whole": 11.75
    },
    "description": "Turkey, Cucumber, Muenster Cheese, Lettuce, Tomato, Basil Mayo on a toasted Sub"
  },
  {
    "number": 6,
    "name": "Buffalotta",
    "ingredients": [
      "ham",
      "capicola",
      "salami",
      "lettuce",
      "tomato",
      "red onion",
      "roasted red peppers",
      "provolone",
      "olive spread",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Ham, Cappy, Salami, Lettuce, Tomato, Red Onion, Roasted Red Peppers, Provolone, Olive Spread on a toasted Sub"
  },
  {
    "number": 7,
    "name": "Italian",
    "ingredients": [
      "capicola",
      "salami",
      "pepperoni",
      "provolone",
      "lettuce",
      "tomato",
      "hot peppers",
      "mayo",
      "oil",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Cappy, Salami, Pepperoni, Provolone, Lettuce, Tomato, Hot Peppers, Mayo, Oil on a toasted Sub"
  },
  {
    "number": 8,
    "name": "American",
    "ingredients": [
      "turkey",
      "ham",
      "roast beef",
      "american",
      "lettuce",
      "tomato",
      "red onion",
      "mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, Ham, Roast Beef, American Cheese, Lettuce, Tomato, Red Onion, Mayo on a toasted Sub"
  },
  {
    "number": 9,
    "name": "Kosher Style",
    "ingredients": [
      "turkey",
      "corned beef",
      "pastrami",
      "swiss",
      "lettuce",
      "tomato",
      "russian dressing",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Turkey, Corned Beef, Pastrami, Swiss, Lettuce, Tomato, Russian Dressing on a toasted Sub"
  },
  {
    "number": 10,
    "name": "495",
    "ingredients": [
      "breaded chicken cutlet",
      "bacon",
      "lettuce",
      "tomato",
      "mozzarella",
      "mayo",
      "garlic sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Breaded Chicken Cutlet, BLT, melted Mozzarella, Mayo on toasted Garlic Sub"
  },
  {
    "number": 11,
    "name": "Philly Chaser",
    "ingredients": [
      "roast beef",
      "provolone",
      "lettuce",
      "tomato",
      "red onion",
      "italian dressing",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Roast Beef, Melted Provolone, Lettuce, Tomato, Red Onion, Italian Dressing on a toasted Sub"
  },
  {
    "number": 12,
    "name": "Steak Sub",
    "ingredients": [
      "chopped steak",
      "provolone",
      "mushrooms",
      "sauteed onions",
      "lettuce",
      "tomato",
      "hot sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Chopped Steak, Melted Provolone, Mushrooms, Sauteed Onions, Lettuce, Tomato, Hot Sauce on a toasted Sub"
  },
  {
    "number": 13,
    "name": "Philly Cheese Steak",
    "ingredients": [
      "chopped steak",
      "sauteed onions",
      "cheese sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Chopped Steak, Sauteed Onions, Cheese Sauce on a toasted Sub"
  },
  {
    "number": 14,
    "name": "French Dip",
    "ingredients": [
      "roast beef",
      "mozzarella",
      "garlic sub",
      "au jus"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Roast Beef, Melted Mozzarella on toasted Garlic Sub w/side of Au Jus"
  },
  {
    "number": 15,
    "name": "Cubano",
    "ingredients": [
      "roasted pork loin",
      "ham",
      "swiss",
      "pickles",
      "honey mustard",
      "garlic sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Roasted Pork Loin, Ham, Swiss, Pickles, Honey Mustard on grilled Garlic Sub"
  },
  {
    "number": 16,
    "name": "Casey",
    "ingredients": [
      "grilled chicken",
      "portobello mushrooms",
      "lettuce",
      "tomato",
      "mozzarella",
      "pesto mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Grilled Chicken, Portobello Mushrooms, Lettuce, Tomato, melted Mozzarella, Pesto Mayo on toasted Sub"
  },
  {
    "number": 17,
    "name": "Scajaquada",
    "ingredients": [
      "ham",
      "mozzarella",
      "bacon",
      "bbq sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Ham, melted Mozzarella, Bacon, BBQ Sauce on a toasted Sub"
  },
  {
    "number": 18,
    "name": "90",
    "ingredients": [
      "turkey",
      "american",
      "bacon",
      "lettuce",
      "tomato",
      "russian dressing",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, Melted American Cheese, BLT, Russian Dressing on a toasted Sub"
  },
  {
    "number": 19,
    "name": "Chicken Finger Sub",
    "ingredients": [
      "chicken fingers",
      "lettuce",
      "tomato",
      "bleu cheese",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.25
    },
    "description": "Chicken Fingers,Lettuce, Tomato, Bleu Cheese on a toasted Sub"
  },
  {
    "number": 20,
    "name": "Reuben",
    "ingredients": [
      "corned beef",
      "swiss",
      "sauerkraut",
      "russian dressing",
      "rye"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.5
    },
    "description": "Corned Beef, Swiss, Sauerkraut, Russian Dressing on Grilled Rye."
  },
  {
    "number": 21,
    "name": "Rachael",
    "ingredients": [
      "pastrami",
      "swiss",
      "coleslaw",
      "russian dressing",
      "rye"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.5
    },
    "description": "Pastrami, Swiss, Coleslaw, Russian Dressing on grilled Rye"
  },
  {
    "number": 22,
    "name": "Turkey Reuben",
    "ingredients": [
      "turkey",
      "swiss",
      "sauerkraut",
      "russian dressing",
      "rye"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Turkey, Swiss, Sauerkraut, Russian Dressing on grilled Rye"
  },
  {
    "number": 23,
    "name": "Tuna Melt",
    "ingredients": [
      "tuna",
      "american",
      "sauteed onions",
      "rye"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Tuna, American Cheese, sautéed Onions on grilled Rye"
  },
  {
    "number": 24,
    "name": "Patty Melt",
    "ingredients": [
      "burger",
      "swiss",
      "sauteed onions",
      "lettuce",
      "tomato",
      "rye"
    ],
    "price": 10,
    "description": "1/2 lb. Burger, Swiss Cheese, Sauteed Onions, Lettuce, Tomato on grilled Rye"
  },
  {
    "number": 25,
    "name": "Beef on Weck",
    "ingredients": [
      "roast beef",
      "au jus",
      "horsey mayo",
      "kimmel weck roll"
    ],
    "price": 10.5,
    "description": "Roast Beef in Au Jus, Horsey Mayo on Kimmel Weck Roll"
  },
  {
    "number": 26,
    "name": "Transit",
    "ingredients": [
      "corned beef",
      "pastrami",
      "swiss",
      "russian dressing",
      "lettuce",
      "tomato",
      "rye"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Corned Beef, Pastrami, Swiss, Russian Dressing, Lettuce, Tomato on Rye"
  },
  {
    "number": 28,
    "name": "Chicken Parmesan",
    "ingredients": [
      "breaded chicken cutlet",
      "mozzarella",
      "marinara sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Breaded Chicken Cutlet, melted Mozzarella Cheese, Marinara Sauce on a toasted Sub"
  },
  {
    "number": 29,
    "name": "Meatball Parmesan",
    "ingredients": [
      "meatballs",
      "mozzarella",
      "marinara sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Meatballs, melted Mozzarella Cheese, Marinara Sauce on a toasted Sub"
  },
  {
    "number": 30,
    "name": "Abe Froman",
    "ingredients": [
      "italian sausage patty",
      "lettuce",
      "tomato",
      "sauteed onions",
      "peppers",
      "mushrooms",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Italian Sausage Pattie, Lettuce, Tomato, Sauteed Onions, Peppers, Mushrooms on a toasted Sub"
  },
  {
    "number": 31,
    "name": "Royal",
    "ingredients": [
      "sausage patty",
      "capicola",
      "provolone",
      "lettuce",
      "tomato",
      "mayo",
      "oil",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Sausage Pattie, Cappicola, Provolone Cheese, Lettuce, Tomato, Mayo, Oil on a toasted Sub"
  },
  {
    "number": 32,
    "name": "Cheeseburger Sub",
    "ingredients": [
      "burger",
      "american",
      "lettuce",
      "tomato",
      "onion",
      "pickles",
      "ketchup",
      "toasted sub"
    ],
    "price": {
      "half": 7,
      "whole": 12.75
    },
    "description": "Burger, American Cheese, Lettuce, Tomato, Onion, Pickles, Ketchup on a toasted Sub"
  },
  {
    "number": 33,
    "name": "Sausage Parmesan",
    "ingredients": [
      "sausage patty",
      "marinara sauce",
      "mozzarella",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Sausage Pattie, Marinara Sauce, Melted Mozzarella Cheese on a toasted Sub"
  },
  {
    "number": 34,
    "name": "Eggplant Parmesan",
    "ingredients": [
      "eggplant",
      "mozzarella",
      "marinara sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Eggplant, melted Mozzarella Cheese, Marinara Sauce on a toasted Sub"
  },
  {
    "number": 35,
    "name": "Transporter",
    "ingredients": [
      "roast beef",
      "coleslaw",
      "swiss",
      "russian dressing",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Roast Beef, Coleslaw, Swiss Cheese, Russian Dressing on a toasted Sub"
  },
  {
    "number": 36,
    "name": "Glutton",
    "ingredients": [
      "chopped steak",
      "provolone",
      "chicken fingers",
      "medium sauce",
      "mushrooms",
      "sauteed onions",
      "lettuce",
      "tomato",
      "toasted sub"
    ],
    "price": {
      "half": 7.5,
      "whole": 14
    },
    "description": "Chopped Steak, Melted Provolone, Chicken Fingers tossed in Medium Hot Sauce, Mushrooms, Sauteed Onions, Lettuce, Tomato on a toasted Sub"
  },
  {
    "number": 39,
    "name": "Fried Bologna",
    "ingredients": [
      "fried bologna",
      "american",
      "sauteed onions",
      "mustard",
      "toasted sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    },
    "description": "Fried Bologna Melted American Cheese, Sauteed Onions, Mustard on a toasted Sub"
  },
  {
    "number": 41,
    "name": "Pittsburgh",
    "ingredients": [
      "chopped steak",
      "provolone",
      "french fries",
      "coleslaw",
      "tomato",
      "mayo",
      "oil",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Chopped Steak, Melted Provolone, Seasoned French Fries*, Coleslaw, Tomato, Mayo, Oil on a toasted Sub\n*No, you cannot have them on the side. Thanks!"
  },
  {
    "number": 42,
    "name": "Ultimate Pizza Sub",
    "ingredients": [
      "capicola",
      "pepperoni",
      "mozzarella",
      "marinara sauce",
      "hot peppers",
      "mozzarella sticks",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Cappy, Pepperoni, Melted Mozzarella Cheese, Marinara Sauce, Hot Peppers, Mozzarella Sticks on a toasted Sub with Marinara dipping sauce"
  },
  {
    "number": 43,
    "name": "Chicken Cordon Bleu Sub",
    "ingredients": [
      "breaded chicken cutlet",
      "ham",
      "swiss",
      "bleu cheese",
      "lettuce",
      "tomato",
      "onion",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Breaded Chicken Cutlet, Ham, Melted Swiss, Bleu Cheese, Lettuce, Tomato, Onion on a toasted Sub"
  },
  {
    "number": 44,
    "name": "Big Dipper",
    "ingredients": [
      "pastrami",
      "swiss",
      "garlic sub",
      "au jus",
      "mustard",
      "russian dressing"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Pastrami, Melted Swiss on a Garlic Sub with Au Jus and Mustard or Russian Dressing"
  },
  {
    "number": 45,
    "name": "Ultimate Rooster",
    "ingredients": [
      "grilled chicken",
      "mushrooms",
      "onion",
      "peppers",
      "french fries",
      "hot sauce",
      "bleu cheese",
      "provolone",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Grilled Chicken, Mushrooms, Onions, Peppers, French Fries, Hot Sauce, Bleu Cheese, Provolone"
  },
  {
    "number": 46,
    "name": "All In",
    "ingredients": [
      "turkey",
      "ham",
      "roast beef",
      "salami",
      "capicola",
      "provolone",
      "lettuce",
      "tomato",
      "onion",
      "hot peppers",
      "mayo",
      "oil",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, Ham, Roast Beef, Salami, Cappy, Provolone, Lettuce, Tomato, Onion, Hot Peppers, Mayo, Oil on a toasted Sub"
  },
  {
    "number": 47,
    "name": "Gut Shot",
    "ingredients": [
      "breaded chicken cutlet",
      "pepper jack",
      "lettuce",
      "tomato",
      "cucumber",
      "jalapenos",
      "sriracha mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Breaded Chicken Cutlet, Melted Pepper Jack Cheese, Lettuce, Tomato, Cucumber, Jalapeños, Sriracha Mayo on a toasted Sub"
  },
  {
    "number": 48,
    "name": "Full House",
    "ingredients": [
      "turkey",
      "spinach",
      "tomato",
      "onion",
      "roasted red peppers",
      "mozzarella",
      "mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.25,
      "whole": 11.75
    },
    "description": "Turkey, Spinach, Tomato, Onion, Roasted Red Peppers, Fresh Mozzarella, Mayo on a toasted Sub"
  },
  {
    "number": 49,
    "name": "Royal Flush",
    "ingredients": [
      "turkey",
      "hummus",
      "mozzarella",
      "mesculin mix",
      "tomato",
      "onion",
      "cucumber",
      "roasted red peppers",
      "toasted sub"
    ],
    "price": {
      "half": 6.25,
      "whole": 11.75
    },
    "description": "Turkey, Hummus, Fresh Mozzarella, Mesculin Mix, Tomato, Onion, Cucumber, Roasted Red Peppers on a toasted Sub"
  },
  {
    "number": 50,
    "name": "Burn",
    "ingredients": [
      "grilled chicken",
      "provolone",
      "mesculin mix",
      "tomato",
      "onion",
      "cucumber",
      "sweet chili sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6.25,
      "whole": 11.75
    },
    "description": "Grilled Chicken, Melted Provolone, Mesculin Mix, Tomato, Onion, Cucumber, Sweet Chili Sauce on a toasted Sub"
  },
  {
    "number": 51,
    "name": "Spicy Dragon",
    "ingredients": [
      "chopped steak",
      "pepper jack",
      "french fries",
      "sweet chili coleslaw",
      "tomato",
      "sriracha mayo",
      "oil",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Chopped Steak, Melted Pepper Jack, Seasoned French Fries (no you can’t have them on the side), Sweet Chili Coleslaw, Tomato, Sriracha Mayo, Oil on a toasted Sub"
  },
  {
    "number": 52,
    "name": "Vader",
    "ingredients": [
      "corned beef",
      "pepper jack",
      "french fries",
      "sauteed onions",
      "sauteed hot peppers",
      "mayo",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Corned Beef, Melted Pepper Jack, Seasoned French Fries (no you can’t have them on the side), Sauteed Onions, Sauteed Hot Peppers, Mayo"
  },
  {
    "number": 53,
    "name": "Gouda Gouda",
    "ingredients": [
      "grilled chicken",
      "bacon",
      "smoked gouda",
      "roasted red pepper mayo",
      "spinach",
      "tomato",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Grilled Chicken, Bacon, Melted Smoked Gouda, Roasted Red Pepper Mayo, Spinach, Tomato on a toasted Sub"
  },
  {
    "number": 54,
    "name": "Coyote",
    "ingredients": [
      "breaded chicken cutlet",
      "bacon",
      "cheddar",
      "mesquite bbq chips",
      "bbq sauce",
      "lettuce",
      "tomato",
      "onion",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Breaded Chicken Cutlet, Bacon, Melted Cheddar, Mesquite BBQ Chips, BBQ Sauce, Lettuce, Tomato, Onion on a toasted Sub"
  },
  {
    "number": 55,
    "name": "California Sunshine",
    "ingredients": [
      "grilled chicken",
      "bacon",
      "pepper jack",
      "guacamole",
      "jalapeno mayo",
      "mesculin mix",
      "tomato",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Grilled Chicken, Bacon, Melted Pepper Jack, Guacamole, Jalapeño Mayo, Mesculin Mix, Tomato on a toasted Sub"
  },
  {
    "number": 56,
    "name": "California Dreaming",
    "ingredients": [
      "turkey",
      "bacon",
      "pepper jack",
      "guacamole",
      "roasted red pepper mayo",
      "mesculin mix",
      "tomato",
      "onion",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, Bacon, Melted Pepper Jack, Guacamole, Roasted Red Pepper Mayo, Mesculin Mix, Tomato, Onion on a toasted sub roll"
  },
  {
    "number": 57,
    "name": "Memphis",
    "ingredients": [
      "roast beef",
      "bacon",
      "cheddar",
      "bbq sauce",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Roast Beef, Bacon, Melted Cheddar, BBQ on a toasted sub"
  },
  {
    "number": 58,
    "name": "290",
    "ingredients": [
      "turkey",
      "bacon",
      "smoked gouda",
      "lettuce",
      "tomato",
      "onion",
      "russian dressing",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, Bacon, Melted Smoked Gouda, Lettuce, Tomato, Onion, Russian Dressing on a toasted sub"
  },
  {
    "number": 59,
    "name": "C.P.R.",
    "ingredients": [
      "grilled chicken",
      "portobello mushrooms",
      "pepper jack",
      "roasted red peppers",
      "mesculin mix",
      "balsamic dressing",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Grilled Chicken, Portobello Mushrooms, Melted Pepper Jack, Roasted Red Peppers, Mesculin Mix, Balsamic Dressing on a toasted sub roll"
  },
  {
    "number": 60,
    "name": "Soul Stealer",
    "ingredients": [
      "chicken fingers",
      "honey stinging garlic sauce",
      "sweet chili coleslaw",
      "sriracha mayo",
      "french fries",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Chicken Fingers tossed in Honey Stinging Garlic Sauce, Sweet Chili Coleslaw, Sriracha Mayo, Seasoned Fries (no you can’t have them on the side) on a toasted sub roll"
  },
  {
    "number": 61,
    "name": "Nacho Philly",
    "ingredients": [
      "chopped steak",
      "nacho cheese doritos",
      "pepper jack",
      "cheese sauce",
      "hot sauce",
      "jalapenos",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.75
    },
    "description": "Chopped Steak, Nacho Cheese Doritos, Melted Pepper Jack, Cheddar Cheese Sauce, Hot Sauce, Jalapenos"
  },
  {
    "number": 62,
    "name": "Ranch Rover",
    "ingredients": [
      "breaded chicken cutlet",
      "bacon",
      "cool ranch doritos",
      "pepper jack",
      "cajun ranch",
      "lettuce",
      "tomato",
      "red onion",
      "toasted sub"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.5
    },
    "description": "Breaded Chicken, Bacon, Cool Ranch Doritos, Melted Pepper Jack, Cajun Ranch, Lettuce, Tomato, Red Onion"
  },
  {
    "number": 63,
    "name": "In Da Club",
    "ingredients": [
      "turkey",
      "ham",
      "bacon",
      "cheddar",
      "mayo",
      "bbq sauce",
      "lettuce",
      "tomato",
      "toasted sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    },
    "description": "Turkey, Ham, Bacon, Melted Cheddar, Mayo, BBQ, Lettuce, Tomato"
  }
].map(obj => new Sub(obj));

document.getElementById('apply-btn').addEventListener('click', () => {
  displaySubs(filterSubs());
});

displaySubs(subs);

function displaySubs(subs) {
  const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const displayContainer = document.getElementById('subs');

  clearSubs();

  if (!subs.length) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'list-group-item-danger');
    li.textContent = "No subs meet the selected criteria";

    displayContainer.appendChild(li);
  } else {
    subs.forEach(sub => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');

      const heading = document.createElement('h5');
      heading.textContent = `#${sub.number} ${sub.name}`;

      const description = document.createElement('p');
      description.classList.add('mb-2');
      description.textContent = sub.description;

      const price = document.createElement('small');
      price.classList.add('text-muted');
      price.textContent = (typeof sub.price === 'object') ? `${currencyFormatter.format(sub.price.half)} | ${currencyFormatter.format(sub.price.whole)}` : currencyFormatter.format(sub.price);

      li.appendChild(heading);
      li.appendChild(description);
      li.appendChild(price);

      displayContainer.appendChild(li);
    });
  }
}

function clearSubs() {
  const displayContainer = document.getElementById('subs');

  while (displayContainer.firstChild) {
    displayContainer.removeChild(displayContainer.lastChild);
  }
}

function filterSubs() {
  const withIngredients = Array.from(document.querySelectorAll('#ingredients :checked')).map(node => node.value);
  const precision = document.querySelector('input[name="precision"]:checked').value;

  if (!withIngredients.length) {
    return subs;
  }

  if (precision === 'all') {
    return subs.filter(sub => sub.hasAllIngredients(withIngredients));
  } else {
    return subs.filter(sub => sub.hasAnyIngredient(withIngredients));
  }
}

function clearFilterSelections() {
  const selections = document.querySelectorAll('#ingredients :checked');
  selections.forEach(selection => {
    selection.checked = false;
  });
}

function Sub(obj) {
  this.number = obj.number,
  this.name = obj.name,
  this.description = obj.description,
  this.price = obj.price,
  this.ingredients = obj.ingredients
}

Sub.prototype.hasIngredient = function(ingredient) {
  return this.ingredients.includes(ingredient);
}

Sub.prototype.hasAllIngredients = function(ingredients) {
  return ingredients.every(ingredient => this.hasIngredient(ingredient));
}

Sub.prototype.hasAnyIngredient = function(ingredients) {
  return ingredients.some(ingredient => this.hasIngredient(ingredient));
}
