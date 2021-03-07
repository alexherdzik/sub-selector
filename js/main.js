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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
      "toasted garlic sub"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    }
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
    }
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
    }
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
    }
  },
  {
    "number": 14,
    "name": "French Dip",
    "ingredients": [
      "roast beef",
      "mozzarella",
      "toasted garlic sub",
      "au jus"
    ],
    "price": {
      "half": 6.5,
      "whole": 12
    }
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
      "grilled garlic sub"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "number": 20,
    "name": "Reuben",
    "ingredients": [
      "corned beef",
      "swiss",
      "sauerkraut",
      "russian dressing",
      "grilled rye"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.5
    }
  },
  {
    "number": 21,
    "name": "Rachael",
    "ingredients": [
      "pastrami",
      "swiss",
      "coleslaw",
      "russian dressing",
      "grilled rye"
    ],
    "price": {
      "half": 6.75,
      "whole": 12.5
    }
  },
  {
    "number": 22,
    "name": "Turkey Reuben",
    "ingredients": [
      "turkey",
      "swiss",
      "sauerkraut",
      "russian dressing",
      "grilled rye"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    }
  },
  {
    "number": 23,
    "name": "Tuna Melt",
    "ingredients": [
      "tuna",
      "american",
      "sauteed onions",
      "grilled rye"
    ],
    "price": {
      "half": 6,
      "whole": 11.25
    }
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
      "grilled rye"
    ],
    "price": 10
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
    "price": 10.5
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];

const categories = [
  {
    "name": "bread",
    "options": [
      "garlic sub",
      "grilled rye",
      "grilled garlic sub",
      "kimmel weck roll",
      "rye",
      "toasted garlic sub",
      "toasted sub"
    ]
  },
  {
    "name": "meat",
    "options": [
      "bacon",
      "breaded chicken cutlet",
      "burger",
      "capicola",
      "chicken fingers",
      "chicken salad",
      "chopped steak",
      "corned beef",
      "fried bologna",
      "grilled chicken",
      "ham",
      "italian sausage patty",
      "meatballs",
      "pastrami",
      "pepperoni",
      "roast beef",
      "roasted pork loin",
      "salami",
      "sausage patty",
      "tuna",
      "turkey"
    ]
  },
  {
  "name": "cheese",
  "options": [
    "american",
    "cheddar",
    "mozzarella",
    "muenster",
    "pepper jack",
    "provolone",
    "smoked gouda",
    "swiss"
  ]
},
{
  "name": "vegetables",
  "options": [
    "coleslaw",
    "cucumber",
    "eggplant",
    "hot peppers",
    "jalapenos",
    "lettuce",
    "mesculin mix",
    "mushrooms",
    "onion",
    "peppers",
    "pickles",
    "portobello mushrooms",
    "red grapes",
    "red onion",
    "roasted red peppers",
    "roasted vegetables",
    "sauerkraut",
    "sauteed hot peppers",
    "sauteed onions",
    "sweet chili coleslaw",
    "spinach",
    "tomato"
  ]
},
{
  "name": "condiments",
  "options": [
    "au jus",
    "balsamic dressing",
    "basil mayo",
    "bbq sauce",
    "bleu cheese",
    "cajun ranch",
    "cheese sauce",
    "guacamole",
    "honey mustard",
    "honey stinging garlic sauce",
    "horsey mayo",
    "hot sauce",
    "hummus",
    "italian dressing",
    "jalapeno mayo",
    "ketchup",
    "marinara sauce",
    "mayo",
    "medium sauce",
    "mustard",
    "oil",
    "olive spread",
    "pesto mayo",
    "roasted red pepper mayo",
    "russian dressing",
    "sriracha mayo",
    "sweet chili sauce"
  ]
},
{
  "name": "misc",
  "options": [
    "cool ranch doritos",
    "french fries",
    "mesquite bbq chips",
    "mozzarella sticks",
    "nacho cheese doritos",
    "toasted almonds"
  ]
}
];

document.getElementById('filter-btn').addEventListener('click', filterSubs);

displaySubs(subs);


function displaySubs(subs) {
  const displayContainer = document.getElementById('subs');

  clearSubs();

  subs.forEach(sub => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `#${sub.number} ${sub.name}`;

    displayContainer.appendChild(li);
  });
}

function clearSubs() {
  const displayContainer = document.getElementById('subs');

  while (displayContainer.firstChild) {
    displayContainer.removeChild(displayContainer.lastChild);
  }
}

function filterSubs() {
  const withIngredients = Array.from(document.querySelectorAll('#ingredients :checked')).map(node => node.value);
  //console.log(withIngredients);

  const filteredSubs = subs.filter(sub => {
    for (let i = 0; i < withIngredients.length; i++) {
      if (sub.ingredients.includes(withIngredients[i])) return true;
    }

    return false;
  });

  displaySubs(filteredSubs);
}

/*categories.forEach(category => {
  const accItem = document.createElement('div');
  accItem.classList.add('accordion-item');

  const accHeader = document.createElement('h2');
  accHeader.classList.add('accordion-header');
  accHeader.setAttribute('id', `heading-${category.name}`);

  const accBtn = document.createElement('button');
  accBtn.classList.add('accordion-button', 'collapsed');
  accBtn.setAttribute('type', 'button');
  accBtn.setAttribute('data-bs-toggle', 'collapse');
  accBtn.setAttribute('data-bs-target', `#collapse-${category.name}`);
  accBtn.setAttribute('aria-extended', 'false');
  accBtn.setAttribute('aria-controls', `collapse-${category.name}`);
  accBtn.textContent = category.name;

  const accCol = document.createElement('div');
  accCol.classList.add('accordion-collapse', 'collapse');
  accCol.setAttribute('id', `collapse-${category.name}`);
  accCol.setAttribute('aria-labelledby', `heading-${category.name}`);
  accCol.setAttribute('data-bs-parent', '#ingredients');

  const accBody = document.createElement('div');
  accBody.classList.add('accordion-body', 'p-0');

  const listGroup = document.createElement('div');
  listGroup.classList.add('list-group', 'list-group-flush');

  category.options.forEach(option => {

    const label = document.createElement('label');
    label.classList.add('list-group-item');

    const input = document.createElement('input');
    input.classList.add('form-check-input', 'me-1');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', option);

    const textNode = document.createTextNode(option);

    label.appendChild(input);
    label.appendChild(textNode);
    listGroup.appendChild(label);
  });

  accBody.appendChild(listGroup);
 accCol.appendChild(accBody);

  accHeader.appendChild(accBtn);
  accItem.appendChild(accHeader);
  accItem.appendChild(accCol);
  document.getElementById('ingredients').appendChild(accItem);
});*/