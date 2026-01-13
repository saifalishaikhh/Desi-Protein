const products = [

/* ================= SALADS ================= */

{
  id: "mix-sprout",
  name: "Mix Sprout Salad",
  image: "images/products/mix-sprout.webp",
  prices: { "500g": 60 },

  ingredients: {
    main: [
      "Green moong sprouts",
      "Brown moong sprouts",
      "Boiled chana",
      "Peanuts"
    ],
    secondary: [
      "Onion",
      "Tomato",
      "Carrot",
      "Beetroot",
      "Cucumber (Kakdi)",
      "Pomegranate",
      "Sesame seeds"
    ],
    seasoning: [
      "Lemon juice",
      "Green chilli",
      "Fresh coriander",
      "Rock salt",
      "Chaat masala"
    ]
  },

  nutrition: {
    "Energy": "420 kcal",
    "Protein": "24 g",
    "Carbohydrates": "52 g",
    "Fiber": "18 g",
    "Fat": "12 g",
    "Vitamin C": "48 mg",
    "Vitamin A": "520 µg",
    "Iron": "5.2 mg",
    "Calcium": "160 mg",
    "Potassium": "820 mg",
    "Magnesium": "140 mg",
    "Zinc": "2.6 mg"
  },

  dailyBenefits: [
    "Muscle strength (Protein)",
    "Digestive health (Fiber)",
    "Blood health (Iron)",
    "Heart support (Potassium)"
  ]
},

{
  id: "boiled-sprout",
  name: "Boiled Mix Sprout Salad",
  image: "images/products/boiled-sprout.webp",
  prices: { "500g": 70 },

  ingredients: {
    main: [
      "Boiled green moong sprouts",
      "Boiled brown moong sprouts",
      "Boiled chana",
      "Peanuts"
    ],
    secondary: [
      "Onion",
      "Tomato",
      "Carrot",
      "Beetroot",
      "Cucumber",
      "Pomegranate",
      "Sesame seeds"
    ],
    seasoning: [
      "Lemon juice",
      "Fresh coriander",
      "Rock salt",
      "Chaat masala",
      "Curd (Dahi)",
      "Pudina"
    ]
  },

  nutrition: {
    "Energy": "400 kcal",
    "Protein": "26 g",
    "Carbohydrates": "48 g",
    "Fiber": "17 g",
    "Fat": "10 g",
    "Iron": "5.8 mg",
    "Calcium": "150 mg",
    "Potassium": "780 mg"
  },

  dailyBenefits: [
    "Lean muscle support (Protein)",
    "Easy digestion (Boiled sprouts)",
    "Improved stamina"
  ]
},

{
  id: "corn-chaat",
  name: "Corn Chaat Salad",
  image: "images/products/corn-chaat.webp",
  prices: { "500g": 80 },

  ingredients: {
    main: [
      "Boiled sweet corn",
      "Boiled chana"
    ],
    secondary: [
      "Onion",
      "Tomato",
      "Beetroot",
      "Carrot",
      "Green cabbage",
      "Pomegranate"
    ],
    seasoning: [
      "Lemon juice",
      "Chaat masala",
      "Curd (Dahi)",
      "Pudina",
      "Red chilli powder",
      "Turmeric powder",
      "Coriander powder"
    ]
  },

  nutrition: {
    "Energy": "450 kcal",
    "Protein": "16 g",
    "Carbohydrates": "70 g",
    "Fiber": "14 g",
    "Vitamin B6": "0.6 mg",
    "Magnesium": "120 mg",
    "Potassium": "760 mg"
  },

  dailyBenefits: [
    "Energy boost (Carbohydrates)",
    "Digestive support (Fiber)",
    "Metabolism support (Vitamin B6)"
  ]
},

{
  id: "creamy-corn",
  name: "Creamy Corn Salad",
  image: "images/products/creamy-corn.webp",
  prices: { "600g": 99 },

  ingredients: {
    main: [
      "Boiled sweet corn",
      "Curd (Dahi)"
    ],
    secondary: [
      "Onion",
      "Tomato",
      "Green cabbage",
      "Carrot",
      "Beetroot",
      "Pomegranate"
    ],
    seasoning: [
      "Lemon juice",
      "Chaat masala",
      "Pudina",
      "Red chilli powder",
      "Turmeric powder",
      "Coriander powder"
    ]
  },

  nutrition: {
    "Energy": "520 kcal",
    "Protein": "18 g",
    "Carbohydrates": "68 g",
    "Fat": "16 g",
    "Fiber": "14 g",
    "Calcium": "220 mg",
    "Vitamin B12": "1.2 µg",
    "Magnesium": "130 mg"
  },

  dailyBenefits: [
    "Bone strength (Calcium)",
    "Gut health (Probiotics)",
    "Sustained energy"
  ]
},

{
  id: "boiled-chana",
  name: "Boiled Chana Salad",
  image: "images/products/boiled-chana.webp",
  prices: { "600g": 99 },

  ingredients: {
    main: [
      "Boiled chana"
    ],
    secondary: [
      "Green cabbage",
      "Onion",
      "Tomato",
      "Beetroot",
      "Carrot",
      "Pomegranate"
    ],
    seasoning: [
      "Lemon juice",
      "Chaat masala",
      "Curd (Dahi)",
      "Pudina",
      "Red chilli powder",
      "Turmeric powder",
      "Coriander powder"
    ]
  },

  nutrition: {
    "Energy": "480 kcal",
    "Protein": "28 g",
    "Fiber": "20 g",
    "Iron": "6.5 mg",
    "Magnesium": "160 mg",
    "Potassium": "700 mg"
  },

  dailyBenefits: [
    "Muscle recovery (Protein)",
    "Weight management (Fiber)",
    "Blood health (Iron)"
  ]
},

{
  id: "raw-chana",
  name: "Non-Boiled Chana Salad",
  image: "images/products/raw-chana.webp",
  prices: { "500g": 80 },

  ingredients: {
    main: [
      "Soaked chana"
    ],
    secondary: [
      "Green cabbage",
      "Onion",
      "Tomato",
      "Beetroot",
      "Carrot",
      "Pomegranate"
    ],
    seasoning: [
      "Lemon juice",
      "Chaat masala",
      "Curd (Dahi)",
      "Pudina"
    ]
  },

  nutrition: {
    "Energy": "460 kcal",
    "Protein": "26 g",
    "Fiber": "19 g",
    "Iron": "6 mg",
    "Magnesium": "150 mg"
  },

  dailyBenefits: [
    "Long-lasting energy",
    "Blood sugar control",
    "Digestive strength"
  ]
},

{
  id: "fruit-salad",
  name: "Fresh Fruit Salad",
  image: "images/products/fruit-salad.webp",
  prices: { "600g": 120 },

  ingredients: {
    main: [
      "Papaya",
      "Apple",
      "Banana"
    ],
    secondary: [
      "Orange",
      "Mosambi"
    ],
    seasoning: []
  },

  nutrition: {
    "Energy": "380 kcal",
    "Vitamin C": "95 mg",
    "Fiber": "15 g",
    "Potassium": "680 mg",
    "Vitamin A": "450 µg"
  },

  dailyBenefits: [
    "Immunity boost (Vitamin C)",
    "Skin health",
    "Natural hydration"
  ]
},

/* ================= JUICES ================= */

{
  id: "chana-sattu",
  name: "Chana Sattu",
  image: "images/products/chana-sattu.webp",
  prices: { "200ml": 49 },

  ingredients: {
    main: [
      "Roasted chana"
    ],
    secondary: [
      "Milk",
      "Banana"
    ],
    seasoning: []
  },

  nutrition: {
    "Energy": "180 kcal",
    "Protein": "10 g",
    "Fiber": "6 g",
    "Calcium": "180 mg",
    "Magnesium": "90 mg"
  },

  dailyBenefits: [
    "Instant energy",
    "Muscle nourishment",
    "Cooling effect on body"
  ]
},

{
  id: "beetroot-carrot",
  name: "Beetroot & Carrot Juice",
  image: "images/products/beetroot-carrot.webp",
  prices: { "200ml": 39 },

  ingredients: {
    main: [
      "Beetroot",
      "Carrot"
    ],
    secondary: [],
    seasoning: []
  },

  nutrition: {
    "Energy": "90 kcal",
    "Vitamin A": "900 µg",
    "Iron": "2.4 mg",
    "Potassium": "420 mg"
  },

  dailyBenefits: [
    "Blood purification",
    "Improved hemoglobin",
    "Skin glow"
  ]
},

{
  id: "lemon-juice",
  name: "Lemon Juice",
  image: "images/products/lemon-juice.webp",
  prices: { "200ml": 29 },

  ingredients: {
    main: [
      "Fresh lemon"
    ],
    secondary: [
      "Water"
    ],
    seasoning: [
      "Pudina"
    ]
  },

  nutrition: {
    "Energy": "60 kcal",
    "Vitamin C": "60 mg",
    "Potassium": "120 mg"
  },

  dailyBenefits: [
    "Detox support",
    "Hydration",
    "Improved immunity"
  ]
}

];

