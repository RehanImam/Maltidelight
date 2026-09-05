
const categories = [
  'Phool Makhana',
  'Roasted Makhana',
  'Makhana Powder',
  'Makhana Dessert',
  'Flavored Makhana',
  'Combo Packs',
  'Raw Makhana'
];


/* =========================================================
   REAL MAKHANA IMAGES
   Wikimedia Commons
========================================================= */

const sampleImages = [

  // 1 - Roasted Makhana
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_Makhana_(Foxnut).jpg',

  // 2 - Masala & Ghee Makhana
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana_(Foxnut)_roasted_with_masala_and_ghee.jpg',

  // 3 - Roasted & Spiced Phool Makhana
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_and_spiced_Foxnuts_(Phool_Makhana).jpg',

  // 4 - Makhana from Bihar
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Foxnut_Makhana_-_Nawada_District_-_Bihar_-_1.jpg',

  // 5 - Phool Makhana
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phool_Makhana.JPG',

  // 6 - White Euryale Ferox / Raw Makhana
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/White_euryale_ferox.jpg',

  // 7 - Makhana with Packaging
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana_as_Snack_from_India_with_Packaging_in_Background.jpg',

  // 8 - Makhana Snack
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana_as_Snack_from_India.jpg',

  // 9 - Roasted Seeds
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ger%C3%B6stete_Samen.jpg',

  // 10 - Roasted Seeds Pack
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Packung_ger%C3%B6stete_Samen.jpg',

  // 11 - Makhana
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana.jpg',

  // 12 - Makhana Bihar
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/MakhanaByBihar.png'

];


/* =========================================================
   PRODUCT NAMES
========================================================= */

const names = {

  'Phool Makhana': [
    'Premium Big Size Phool Makhana',
    'Organic Handpicked Phool Makhana',
    'Classic White Lotus Seeds',
    'Super Quality Phool Makhana 250g',
    'Jumbo Grade Phool Makhana'
  ],

  'Roasted Makhana': [
    'Peri Peri Roasted Makhana',
    'Salted & Pepper Roasted Makhana',
    'Pudina Crisp Roasted Makhana',
    'Cheese Garlic Makhana',
    'Himalayan Pink Salt Makhana'
  ],

  'Makhana Powder': [
    'Pure Protein Makhana Powder',
    'Kheer Special Makhana Powder',
    'Organic Makhana Meal Powder',
    'Weight Loss Makhana Powder',
    'Fine Ground Lotus Powder'
  ],

  'Makhana Dessert': [
    'Makhana Cookies Crunchy Pack',
    'Chocolate Covered Makhana',
    'Gur Jaggery Sweet Makhana',
    'Makhana Barfi Delight',
    'Caramel Makhana Popcorn'
  ],

  'Flavored Makhana': [
    'Tangy Tomato Makhana',
    'Masala Magic Makhana',
    'Cream & Onion Makhana',
    'Smokey BBQ Makhana',
    'Chili Lemon Makhana'
  ],

  'Combo Packs': [
    'Family Health Combo (Pack of 4)',
    'Trio Roasted Flavors Pack',
    'Super Saver Makhana Jar Set',
    'Snack Healthy Combo 500g',
    'Festival Gift Box Makhana'
  ],

  'Raw Makhana': [
    'Unprocessed Raw Makhana 500g',
    'Farm Fresh Raw Lotus Seeds',
    'Natural Raw Makhana Bulk Pack',
    'Raw Makhana Grade A',
    'Sun Dried Raw Makhana'
  ]

};


/* =========================================================
   CATEGORY IMAGE MAPPING
========================================================= */

const categoryImages = {

  /* -------------------------------------------------------
     PHOOL MAKHANA
  ------------------------------------------------------- */

  'Phool Makhana': [
    sampleImages[4],
    sampleImages[3],
    sampleImages[5],
    sampleImages[10],
    sampleImages[11]
  ],


  /* -------------------------------------------------------
     ROASTED MAKHANA
  ------------------------------------------------------- */

  'Roasted Makhana': [
    sampleImages[0],
    sampleImages[1],
    sampleImages[2],
    sampleImages[8],
    sampleImages[9]
  ],


  /* -------------------------------------------------------
     MAKHANA POWDER
  ------------------------------------------------------- */

  'Makhana Powder': [
    sampleImages[5],
    sampleImages[4],
    sampleImages[3],
    sampleImages[10],
    sampleImages[11]
  ],


  /* -------------------------------------------------------
     MAKHANA DESSERT
  ------------------------------------------------------- */

  'Makhana Dessert': [
    sampleImages[1],
    sampleImages[2],
    sampleImages[0],
    sampleImages[7],
    sampleImages[8]
  ],


  /* -------------------------------------------------------
     FLAVORED MAKHANA
  ------------------------------------------------------- */

  'Flavored Makhana': [
    sampleImages[1],
    sampleImages[2],
    sampleImages[0],
    sampleImages[8],
    sampleImages[3]
  ],


  /* -------------------------------------------------------
     COMBO PACKS
  ------------------------------------------------------- */

  'Combo Packs': [
    sampleImages[6],
    sampleImages[7],
    sampleImages[9],
    sampleImages[6],
    sampleImages[7]
  ],


  /* -------------------------------------------------------
     RAW MAKHANA
  ------------------------------------------------------- */

  'Raw Makhana': [
    sampleImages[5],
    sampleImages[3],
    sampleImages[11],
    sampleImages[4],
    sampleImages[10]
  ]

};


/* =========================================================
   GENERATE PRODUCTS
========================================================= */

const generateProducts = () => {

  const products = [];

  let idCounter = 1;


  /* =======================================================
     LOOP ALL CATEGORIES
  ======================================================= */

  categories.forEach((cat) => {

    names[cat].forEach((name, idx) => {


      /* ===================================================
         PRICE
      =================================================== */

      const price =
        Math.floor(Math.random() * 300) + 199;


      /* ===================================================
         MRP
      =================================================== */

      const mrp =
        price +
        Math.floor(Math.random() * 200) +
        100;


      /* ===================================================
         DISCOUNT
      =================================================== */

      const discount =
        Math.round(
          ((mrp - price) / mrp) * 100
        );


      /* ===================================================
         GET CATEGORY IMAGES
      =================================================== */

      const images = categoryImages[cat];


      /* ===================================================
         MAIN PRODUCT IMAGE
         
         Har product ko different image milegi
      =================================================== */

      const mainImage =
        images[idx % images.length];


      /* ===================================================
         PRODUCT GALLERY
         
         Product detail page ke liye 5 images
      =================================================== */

      const productImages = [

        images[0 % images.length],

        images[1 % images.length],

        images[2 % images.length],

        images[3 % images.length],

        images[4 % images.length]

      ];


      /* ===================================================
         PRODUCT OBJECT
      =================================================== */

      products.push({

        /* Product ID */
        id: String(idCounter++),


        /* Product Name */
        name: name,


        /* Selling Price */
        price: price,


        /* MRP */
        mrp: mrp,


        /* Discount */
        discount: `${discount}%`,


        /* Savings */
        savings: mrp - price,


        /* Category */
        category: cat,


        /* Stock */
        inStock: true,


        /* =================================================
           MAIN IMAGE
        ================================================= */

        image: mainImage,


        /* =================================================
           PRODUCT GALLERY
        ================================================= */

        images: productImages,


        /* =================================================
           DESCRIPTION
        ================================================= */

        description:
          `Premium grade ${name}. Packed with antioxidants, minerals, protein, and dietary fiber for clean, guilt-free daily snacking.`,


        /* =================================================
           PRODUCT DETAILS
        ================================================= */

        details: {

          dietType:
            '100% Vegetarian',


          flavour:
            cat.includes('Flavored')
              ? 'Assorted Spices'
              : cat.includes('Roasted')
                ? 'Roasted'
                : cat.includes('Dessert')
                  ? 'Sweet'
                  : 'Natural',


          productType:
            'Resealable Zipper Pouch',


          weight:
            '100g / 200g',


          origin:
            'India'

        }

      });

    });

  });


  return products;

};


/* =========================================================
   EXPORT PRODUCTS
========================================================= */

export const mockProducts = generateProducts();


/* =========================================================
   EXPORT CATEGORIES
========================================================= */

export { categories };