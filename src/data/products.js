import imageOne from '../assets/imageone.png';

const categories = [
  'Phool Makhana',
  'Roasted Makhana',
  'Makhana Powder',
  'Makhana Dessert',
  'Flavored Makhana',
  'Combo Packs',
  'Raw Makhana'
];

// Unsplash URLs ki jagah local asset image set kar di hai
const sampleImages = [
  imageOne,
  imageOne,
  imageOne,
  imageOne,
  imageOne
];

const generateProducts = () => {
  const products = [];
  let idCounter = 1;

  const names = {
    'Phool Makhana': ['Premium Big Size Phool Makhana', 'Organic Handpicked Phool Makhana', 'Classic White Lotus Seeds', 'Super Quality Phool Makhana 250g', 'Jumbo Grade Phool Makhana'],
    'Roasted Makhana': ['Peripiri Roasted Makhana', 'Salted & Pepper Roasted Makhana', 'Pudina Crisp Roasted Makhana', 'Cheese Garlic Makhana', 'Himalayan Pink Salt Makhana'],
    'Makhana Powder': ['Pure Protein Makhana Powder', 'Kheer Special Makhana Powder', 'Organic Makhana Meal Powder', 'Weight Loss Makhana Powder', 'Fine Ground Lotus Powder'],
    'Makhana Dessert': ['Makhana Cookies Crunchy Pack', 'Chocolate Covered Makhana', 'Gur Jaggery Sweet Makhana', 'Makhana Barfi Delight', 'Caramel Makhana Popcorn'],
    'Flavored Makhana': ['Tangy Tomato Makhana', 'Masala Magic Makhana', 'Cream & Onion Makhana', 'Smokey BBQ Makhana', 'Chili Lemon Makhana'],
    'Combo Packs': ['Family Health Combo (Pack of 4)', 'Trio Roasted Flavors Pack', 'Super Saver Makhana Jar Set', 'Snack Healthy Combo 500g', 'Festival Gift Box Makhana'],
    'Raw Makhana': ['Unprocessed Raw Makhana 500g', 'Farm Fresh Raw Lotus Seeds', 'Natural Raw Makhana Bulk Pack', 'Raw Makhana Grade A', 'Sun Dried Raw Makhana']
  };

  categories.forEach(cat => {
    names[cat].forEach((name, idx) => {
      const price = Math.floor(Math.random() * 300) + 199;
      const mrp = price + Math.floor(Math.random() * 200) + 100;
      const discount = Math.round(((mrp - price) / mrp) * 100);
      
      products.push({
        id: String(idCounter++),
        name: name,
        price: price,
        mrp: mrp,
        discount: `${discount}%`,
        savings: mrp - price,
        category: cat,
        inStock: true,
        images: sampleImages,
        description: `Premium grade ${name}. Packed with antioxidants, minerals, protein, and dietary fiber for clean, guilt-free daily snacking.`,
        details: {
          dietType: "100% Vegetarian",
          flavour: cat.includes("Flavored") ? "Assorted Spices" : "Natural",
          productType: "Resealable Zipper Pouch",
          weight: "100g / 200g",
          origin: "India"
        }
      });
    });
  });

  return products;
};

export const mockProducts = generateProducts();
export { categories };