/* =========================
   SHOPS DATA
========================= */
export const shops = [
  {
    id: "shop001",
    name: "Magunas Supermarket",
    img: "assets/images/shops/images (1).jpg",
    description: "Affordable groceries and household essentials",
    categories: ["Groceries", "Beverages", "Household", "Snacks"]
  },
  {
    id: "shop002",
    name: "Kwa Jack Liquor",
    img: "assets/images/shops/133793012_108077117864415_255456880755482874_n.webp",
    description: "Premium wines, spirits and beers",
    categories: ["Wines", "Spirits", "Beers"]
  },
  {
    id: "shop003",
    name: "M&M Organic",
    img: "assets/images/shops/samut-sakhon-thailand-january-30-260nw-2581647283.webp",
    description: "Fresh organic and healthy foods",
    categories: ["Organic", "Fruits", "Vegetables"]
  },
  {
    id: "shop004",
    name: "Hotpoint Store",
    img: "assets/images/shops/images (2).jpg",
    description: "Electronics and appliances",
    categories: ["Electronics", "Home Appliances"]
  },
  {
    id: "shop005",
    name: "Kago Mini Mart",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop006",
    name: "Morales Fries and Chips",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop007",
    name: "Kebenei's Choma Village",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop008",
    name: "Mathais Supermarket",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  },
  {
    id: "shop009",
    name: "Trade Center Karatina",
    img: "assets/images/shops/24-hours-corner-shop-high-holborn-london-england-uk-D549J1.jpg",
    description: "Convenience store for everyday needs",
    categories: ["Groceries", "Snacks"]
  }
];

/* =========================
   PRODUCTS DATA
========================= */
export const products = [
  // Magunas Supermarket (8 products)
{ 
  id: "p1", shopId: "shop001", name: "Premium Raha cooking floor 2kg", price: 1200, 
  img: "assets/images/products/31014_main.avif", category: "Groceries", 
  description: "High-quality rice for everyday meals.", popularity: 85,
  images: [
    "assets/images/products/31014_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Premium Raha flour is finely milled for consistent texture, ideal for chapati, mandazi, and other baked goods. Packaged for freshness and trusted by households for everyday cooking."
},
{ 
  id: "p2", shopId: "shop001", name: "Fresh Milk 1L", price: 150, 
  img: "assets/images/products/images (5).jpg", category: "Beverages", 
  description: "Pure and fresh milk from local farms.", popularity: 92,
  images: [
    "assets/images/products/images (5).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Locally sourced fresh milk, pasteurized for safety and rich in calcium. Available in multiple sizes, perfect for tea, coffee, or direct consumption."
},
{ 
  id: "p11", shopId: "shop001", name: "Brown Bread", price: 60, 
  img: "assets/images/products/82689_main.avif", category: "Groceries", 
  description: "Freshly baked brown bread.", popularity: 75,
  images: [
    "assets/images/products/82689_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Nutritious brown bread baked daily, made with whole grains for added fiber. Great for breakfast, sandwiches, or healthy snacking."
},
{ 
  id: "p12", shopId: "shop001", name: "Freshfri cooking oil 2L", price: 360, 
  img: "assets/images/products/41661_main.avif", category: "Beverages", 
  description: "Refreshing orange juice.", popularity: 50,
  images: [
    "assets/images/products/41661_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Freshfri oil is refined for purity and light taste, suitable for frying, baking, and everyday cooking. Packaged in a convenient 2L bottle."
},
{ 
  id: "p13", shopId: "shop001", name: "Aerial Wasing Powder", price: 450, 
  img: "assets/images/products/23437_main.avif", category: "Household", 
  description: "Powerful cleaning detergent.", popularity: 68,
  images: [
    "assets/images/products/23437_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Aerial washing powder delivers deep cleaning power, removing tough stains while keeping clothes bright and fresh. Suitable for hand wash and machine use."
},
{ 
  id: "p14", shopId: "shop001", name: "Potato Chips", price: 120, 
  img: "assets/images/products/images (4).jpg", category: "Snacks", 
  description: "Crispy potato chips.", popularity: 85,
  images: [
    "assets/images/products/images (4).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Golden fried potato chips seasoned for flavor and crunch. A perfect snack for parties, picnics, or quick bites."
},
{ 
  id: "p15", shopId: "shop001", name: "Bentley Tea Bags 100g", price: 380, 
  img: "assets/images/products/1.webp", category: "Beverages", 
  description: "Classic black tea bags.", popularity: 76,
  images: [
    "assets/images/products/1.webp",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Bentley tea bags offer a rich, aromatic flavor. Perfect for morning brews or evening relaxation, packed in convenient sachets."
},
{ 
  id: "p16", shopId: "shop001", name: "Toilet Paper 10 Pack", price: 550, 
  img: "assets/images/products/22163_main.avif", category: "Household", 
  description: "Soft and strong tissue.", popularity: 71,
  images: [
    "assets/images/products/22163_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Soft yet durable toilet paper, designed for comfort and reliability. Comes in a value pack of 10 rolls for household convenience."
},
  // Kwa Jack Liquor (8 products)
{ 
  id: "p3", shopId: "shop002", name: "Red Wine Bottle", price: 1800, 
  img: "assets/images/products/images (3).jpg", category: "Wines", 
  description: "Exquisite red wine with rich flavors.", popularity: 70,
  images: [
    "assets/images/products/images (3).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "A classic red wine with bold notes of berries and oak. Best enjoyed with red meats, pasta dishes, or on its own for a relaxing evening."
},
{ 
  id: "p4", shopId: "shop002", name: "Whiskey 750ml", price: 2500, 
  img: "assets/images/products/360_F_322905875_SHqwFv9NJej5fcMUPid9usev2N77Ufym.jpg", category: "Spirits", 
  description: "Smooth whiskey with a hint of oak.", popularity: 65,
  images: [
    "assets/images/products/360_F_322905875_SHqwFv9NJej5fcMUPid9usev2N77Ufym.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Premium whiskey aged in oak barrels for a smooth finish. Ideal for sipping neat, mixing in cocktails, or gifting to enthusiasts."
},
{ 
  id: "p17", shopId: "shop002", name: "Beer Pack (6)", price: 900, 
  img: "assets/images/products/images (6).jpg", category: "Beers", 
  description: "Refreshing lager beer pack.", popularity: 72,
  images: [
    "assets/images/products/images (6).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "A convenient six-pack of crisp lager beer. Perfect for parties, barbecues, or casual evenings with friends."
},
{ 
  id: "p18", shopId: "shop002", name: "White Wine Bottle", price: 1700, 
  img: "assets/images/products/Buy-Image-Dry-White-Wine-750ml-online-in-Nairobi-Kenya.png", category: "Wines", 
  description: "Smooth white wine.", popularity: 66,
  images: [
    "assets/images/products/Buy-Image-Dry-White-Wine-750ml-online-in-Nairobi-Kenya.png",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "A dry white wine with delicate floral notes and a crisp finish. Pairs well with seafood, salads, and light pasta dishes."
},
{ 
  id: "p19", shopId: "shop002", name: "Vodka 1L", price: 2200, 
  img: "assets/images/products/images (7).jpg", category: "Spirits", 
  description: "Premium vodka.", popularity: 69,
  images: [
    "assets/images/products/images (7).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Crystal-clear vodka distilled for purity and smoothness. Perfect for cocktails, mixed drinks, or served chilled."
},
{ 
  id: "p20", shopId: "shop002", name: "Craft Beer", price: 350, 
  img: "assets/images/products/Greenspoon-Kenya-Bila-Shaka-Capitan-Craft-Beer-500ml.jpg", category: "Beers", 
  description: "Locally brewed craft beer.", popularity: 74,
  images: [
    "assets/images/products/Greenspoon-Kenya-Bila-Shaka-Capitan-Craft-Beer-500ml.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Handcrafted beer brewed locally with unique flavors. A refreshing choice for those who enjoy artisanal beverages."
},
{ 
  id: "p21", shopId: "shop002", name: "Gin 750ml", price: 2100, 
  img: "assets/images/products/36828_main.avif", category: "Spirits", 
  description: "Botanical gin with citrus notes.", popularity: 67,
  images: [
    "assets/images/products/36828_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "A refined gin infused with botanicals and citrus zest. Excellent for classic cocktails like gin and tonic or martinis."
},
{ 
  id: "p22", shopId: "shop002", name: "Rosé Wine", price: 1600, 
  img: "assets/images/products/Cote-des-roses-rose-magnum-300x300.jpg", category: "Wines", 
  description: "Light and fruity rosé.", popularity: 64,
  images: [
    "assets/images/products/Cote-des-roses-rose-magnum-300x300.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "A refreshing rosé wine with notes of strawberries and citrus. Ideal for warm afternoons, picnics, or pairing with light meals."
},

  // M&M Organic (8 products)
{ 
  id: "p5", shopId: "shop003", name: "Organic Apples 1kg", price: 300, 
  img: "assets/images/products/images (8).jpg", category: "Fruits", 
  description: "Crisp and juicy organic apples.", popularity: 88,
  images: [
    "assets/images/products/images (8).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Freshly harvested organic apples grown without synthetic pesticides. Perfect for snacking, juicing, or baking."
},
{ 
  id: "p6", shopId: "shop003", name: "Fresh Kale Bundle", price: 80, 
  img: "assets/images/products/images (9).jpg", category: "Vegetables", 
  description: "Nutrient-rich fresh kale.", popularity: 77,
  images: [
    "assets/images/products/images (9).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Organic kale rich in vitamins and minerals. Ideal for salads, smoothies, or steaming as a side dish."
},
{ 
  id: "p23", shopId: "shop003", name: "Organic Bananas 1kg", price: 200, 
  img: "assets/images/products/Marketside-Fresh-Organic-Bananas-Bunch_f17ef225-0999-4035-9ed1-7a06607333b4.7c3b33492f937bcc19fe3339d5230929.avif", category: "Fruits", 
  description: "Sweet organic bananas.", popularity: 83,
  images: [
    "assets/images/products/Marketside-Fresh-Organic-Bananas-Bunch_f17ef225-0999-4035-9ed1-7a06607333b4.7c3b33492f937bcc19fe3339d5230929.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Naturally ripened bananas with a sweet flavor. Great for breakfast, smoothies, or baking banana bread."
},
{ 
  id: "p24", shopId: "shop003", name: "Organic Tomatoes 1kg", price: 250, 
  img: "assets/images/products/images (10).jpg", category: "Vegetables", 
  description: "Juicy organic tomatoes.", popularity: 79,
  images: [
    "assets/images/products/images (10).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Plump organic tomatoes grown naturally for rich flavor. Perfect for sauces, salads, and cooking."
},
{ 
  id: "p25", shopId: "shop003", name: "Organic Honey 500g", price: 600, 
  img: "assets/images/products/image-removebg-preview - 2025-09-25T133802.701-800x800.png", category: "Organic", 
  description: "Pure organic honey.", popularity: 88,
  images: [
    "assets/images/products/image-removebg-preview - 2025-09-25T133802.701-800x800.png",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Raw organic honey harvested from natural hives. A healthy sweetener for drinks, baking, or direct use."
},
{ 
  id: "p26", shopId: "shop003", name: "Organic Spinach", price: 100, 
  img: "assets/images/products/Greenspoon-1-5.jpg", category: "Vegetables", 
  description: "Fresh organic spinach.", popularity: 82,
  images: [
    "assets/images/products/Greenspoon-1-5.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Leafy organic spinach packed with iron and vitamins. Great for stir-fries, salads, and soups."
},
{ 
  id: "p27", shopId: "shop003", name: "Organic Mangoes 1kg", price: 350, 
  img: "assets/images/products/images (11).jpg", category: "Fruits", 
  description: "Ripe organic mangoes.", popularity: 86,
  images: [
    "assets/images/products/images (11).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Sweet and juicy organic mangoes. Perfect for fresh eating, smoothies, or desserts."
},
{ 
  id: "p28", shopId: "shop003", name: "Organic Natural Honey", price: 420, 
  img: "assets/images/products/image-removebg-preview - 2025-09-25T133802.701-800x800.png", category: "Organic", 
  description: "No added sugar peanut butter.", popularity: 81,
  images: [
    "assets/images/products/image-removebg-preview - 2025-09-25T133802.701-800x800.png",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Natural honey with no additives. A wholesome sweetener that retains enzymes and nutrients from the hive."
},

// Hotpoint Store (8 products)
{ 
  id: "p7", shopId: "shop004", name: "Samsung Microwave", price: 8500, 
  img: "assets/images/products/Samsung-20L-Microwave-Oven-ME731K-B2.png", category: "Home Appliances", 
  description: "Efficient microwave oven for quick cooking.", popularity: 60,
  images: [
    "assets/images/products/Samsung-20L-Microwave-Oven-ME731K-B2.png",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Compact Samsung microwave designed for fast heating and cooking. Features multiple power levels and a sleek design suitable for modern kitchens."
},
{ 
  id: "p8", shopId: "shop004", name: "Von Blender", price: 3200, 
  img: "assets/images/products/VSBT06MNX.png", category: "Electronics", 
  description: "Powerful blender for smoothies and more.", popularity: 90,
  images: [
    "assets/images/products/VSBT06MNX.png",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Durable Von blender with sharp blades and multiple speed settings. Perfect for smoothies, soups, and sauces."
},
{ 
  id: "p29", shopId: "shop004", name: "Electric Kettle", price: 2200, 
  img: "assets/images/products/sfdgfhgghf.jpg", category: "Home Appliances", 
  description: "Fast-boil electric kettle.", popularity: 78,
  images: [
    "assets/images/products/sfdgfhgghf.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Quick-boil electric kettle with automatic shut-off and ergonomic handle. Ideal for tea, coffee, and instant meals."
},
{ 
  id: "p30", shopId: "shop004", name: "Wireless Headphones", price: 4500, 
  img: "assets/images/products/images (12).jpg", category: "Electronics", 
  description: "Noise-cancelling Bluetooth headphones.", popularity: 84,
  images: [
    "assets/images/products/images (12).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Comfortable wireless headphones with noise cancellation and long battery life. Great for music, calls, and travel."
},
{ 
  id: "p31", shopId: "shop004", name: "Smart TV 42\"", price: 32000, 
  img: "assets/images/products/images (13).jpg", category: "Electronics", 
  description: "Full HD smart television with streaming apps.", popularity: 88,
  images: [
    "assets/images/products/images (13).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "42-inch Smart TV with Full HD resolution and built-in streaming apps. Sleek design with multiple connectivity options."
},
{ 
  id: "p32", shopId: "shop004", name: "Refrigerator 250L", price: 48000, 
  img: "assets/images/products/images (14).jpg", category: "Home Appliances", 
  description: "Energy-efficient refrigerator with spacious compartments.", popularity: 82,
  images: [
    "assets/images/products/images (14).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Spacious 250L refrigerator with energy-efficient cooling. Includes adjustable shelves and freezer compartment."
},
{ 
  id: "p33", shopId: "shop004", name: "Toaster 2-Slice", price: 1800, 
  img: "assets/images/products/images (17).jpg", category: "Home Appliances", 
  description: "Compact toaster for quick breakfasts.", popularity: 74,
  images: [
    "assets/images/products/images (17).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Two-slice toaster with browning control and compact design. Perfect for quick breakfasts and snacks."
},
{ 
  id: "p34", shopId: "shop004", name: "Laptop Charger", price: 2500, 
  img: "assets/images/products/images (15).jpg", category: "Electronics", 
  description: "Universal laptop charger with fast charging.", popularity: 79,
  images: [
    "assets/images/products/images (15).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Universal laptop charger compatible with multiple models. Provides fast charging and built-in safety features."
},

// Kago Mini Mart (8 products)
{ 
  id: "p9", shopId: "shop005", name: "Aerial Washing Powder 1kg", price: 120, 
  img: "assets/images/products/23437_main.avif", category: "Groceries", 
  description: "Effective washing powder for clean clothes.", popularity: 73,
  images: [
    "assets/images/products/23437_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Trusted washing powder that removes tough stains and keeps clothes bright. Suitable for both hand wash and machine use."
},
{ 
  id: "p10", shopId: "shop005", name: "Cooking Oil 2L", price: 550, 
  img: "assets/images/products/41661_main.avif", category: "Groceries", 
  description: "Healthy cooking oil for everyday use.", popularity: 82,
  images: [
    "assets/images/products/41661_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Refined cooking oil with a light taste, ideal for frying, baking, and everyday meal preparation."
},
{ 
  id: "p35", shopId: "shop005", name: "Instant Noodles Pack", price: 80, 
  img: "assets/images/products/images (16).jpg", category: "Snacks", 
  description: "Quick and tasty instant noodles.", popularity: 76,
  images: [
    "assets/images/products/images (16).jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Convenient instant noodles ready in minutes. Flavored for a satisfying snack or quick meal."
},
{ 
  id: "p36", shopId: "shop005", name: "Soft Drinks 500ml", price: 100, 
  img: "assets/images/products/Sprite-300x300.webp", category: "Groceries", 
  description: "Refreshing carbonated soft drink.", popularity: 79,
  images: [
    "assets/images/products/Sprite-300x300.webp",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Classic carbonated beverage served chilled. Perfect for parties, meals, or refreshment on the go."
},
{ 
  id: "p37", shopId: "shop005", name: "Biscuits Pack", price: 150, 
  img: "assets/images/products/Manji Digestive Biscuit 100g.jpg", category: "Snacks", 
  description: "Crunchy biscuits for tea time.", popularity: 74,
  images: [
    "assets/images/products/Manji Digestive Biscuit 100g.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Crispy biscuits made with wholesome ingredients. Great for tea breaks, snacking, or sharing."
},
{ 
  id: "p38", shopId: "shop005", name: "Sugar 2kg", price: 300, 
  img: "assets/images/products/lyle1kg-46_1100x_02b44d4e-3aa2-4da1-a160-2d01b06ff843.webp", category: "Groceries", 
  description: "Fine white sugar for cooking and baking.", popularity: 81,
  images: [
    "assets/images/products/lyle1kg-46_1100x_02b44d4e-3aa2-4da1-a160-2d01b06ff843.webp",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Refined white sugar with fine crystals. Essential for baking, cooking, and sweetening drinks."
},
{ 
  id: "p39", shopId: "shop005", name: "Chocolate Bar", price: 120, 
  img: "assets/images/products/23686_main.avif", category: "Snacks", 
  description: "Delicious milk chocolate bar.", popularity: 85,
  images: [
    "assets/images/products/23686_main.avif",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Smooth and creamy milk chocolate bar. A sweet treat for kids and adults alike."
},
{ 
  id: "p40", shopId: "shop005", name: "Salt 1kg", price: 90, 
  img: "assets/images/products/Kensalt Iodated Table Salt 1Kg.jpg", category: "Groceries", 
  description: "Refined table salt for everyday use.", popularity: 77,
  images: [
    "assets/images/products/Kensalt Iodated Table Salt 1Kg.jpg",
    "assets/images/products/placeholder1.jpg",
    "assets/images/products/placeholder2.jpg",
    "assets/images/products/placeholder3.jpg"
  ],
  details: "Iodated table salt refined for purity. Essential for cooking, seasoning, and maintaining health."
},
]