export type Category =
  | "Shawarma"
  | "Burgers"
  | "Sandwiches"
  | "Specials"
  | "Rice & Pasta"
  | "Proteins"
  | "Swallows"
  | "Extras";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: Category;
  desc?: string;
  image?: string;
  /** Surfaced in the hero / popular-dishes strip. */
  featured?: boolean;
};

/** A featured dish is guaranteed to have an image + description for the UI. */
export type FeaturedDish = MenuItem & { image: string; desc: string };

export const MENU: MenuItem[] = [
  // Shawarma
  {
    id: 1,
    category: "Shawarma",
    name: "Chicken Shawarma (No Hotdog)",
    price: 3000,
  },
  {
    id: 2,
    category: "Shawarma",
    name: "Chicken Shawarma (1 Hotdog)",
    price: 4000,
  },
  {
    id: 3,
    category: "Shawarma",
    name: "Chicken Shawarma (2 Hotdogs)",
    price: 5000,
  },
  {
    id: 4,
    category: "Shawarma",
    name: "Jumbo Package (Chicken + Beef + 2 Hotdogs)",
    price: 7000,
    desc: "House Favourite",
    image:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },
  {
    id: 5,
    category: "Shawarma",
    name: "Classic Special Shawarma (Mixed Protein + 3 Hotdogs)",
    price: 6500,
  },
  {
    id: 6,
    category: "Shawarma",
    name: "Beef Shawarma (No Hotdog)",
    price: 2300,
  },
  {
    id: 7,
    category: "Shawarma",
    name: "Beef Shawarma (1 Hotdog)",
    price: 3000,
  },
  {
    id: 8,
    category: "Shawarma",
    name: "Beef Shawarma (2 Hotdogs)",
    price: 4000,
  },
  {
    id: 9,
    category: "Extras",
    name: "Extra Sausage",
    price: 700,
  },

  // Burgers
  {
    id: 10,
    category: "Burgers",
    name: "Chicken Burger",
    price: 3000,
  },
  {
    id: 11,
    category: "Burgers",
    name: "Classic Chicken Burger",
    price: 5000,
    desc: "Loaded & Stacked",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },
  {
    id: 12,
    category: "Burgers",
    name: "Beef Burger",
    price: 3500,
  },
  {
    id: 13,
    category: "Burgers",
    name: "Classic Beef Burger",
    price: 5000,
  },

  // Sandwiches
  {
    id: 14,
    category: "Sandwiches",
    name: "Chicken Sandwich",
    price: 3000,
  },
  {
    id: 15,
    category: "Sandwiches",
    name: "Fajita Chicken Sandwich",
    price: 3500,
  },
  {
    id: 16,
    category: "Sandwiches",
    name: "Chocolate Chicken Sandwich",
    price: 5000,
  },

  // Specials
  {
    id: 17,
    category: "Specials",
    name: "Franklin Special Chicken Tacos",
    price: 6000,
    desc: "Chef's Special",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },
  {
    id: 18,
    category: "Specials",
    name: "Fried Yam Portion",
    price: 2000,
  },
  {
    id: 19,
    category: "Specials",
    name: "Sweet Potato Portion",
    price: 1500,
  },
  {
    id: 20,
    category: "Specials",
    name: "Fried Plantain",
    price: 2000,
  },
  {
    id: 21,
    category: "Specials",
    name: "Egg Sauce",
    price: 2500,
  },
  {
    id: 22,
    category: "Specials",
    name: "Spaghetti Bolognese",
    price: 6000,
  },
  {
    id: 23,
    category: "Specials",
    name: "French Fries",
    price: 2500,
  },

  // Rice & Pasta
  {
    id: 24,
    category: "Rice & Pasta",
    name: "Spin Fried Rice Portion",
    price: 1000,
  },
  {
    id: 25,
    category: "Rice & Pasta",
    name: "Chinese Egg Fried Rice Portion",
    price: 1000,
  },
  {
    id: 26,
    category: "Rice & Pasta",
    name: "Party Jollof Rice Portion",
    price: 800,
  },
  {
    id: 27,
    category: "Rice & Pasta",
    name: "Fried Rice Portion",
    price: 700,
  },
  {
    id: 28,
    category: "Rice & Pasta",
    name: "Jollof Pasta",
    price: 3500,
  },
  {
    id: 29,
    category: "Rice & Pasta",
    name: "Stir Fried Pasta",
    price: 3500,
  },
  {
    id: 30,
    category: "Rice & Pasta",
    name: "Special Jollof Rice",
    price: 8500,
    desc: "Smoky Party Style",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80",
    featured: true,
  },

  // Proteins & Sides
  {
    id: 31,
    category: "Proteins",
    name: "Beef (Small)",
    price: 500,
  },
  {
    id: 32,
    category: "Proteins",
    name: "Beef (Big)",
    price: 1000,
  },
  {
    id: 33,
    category: "Proteins",
    name: "Fish",
    price: 1000,
  },
  {
    id: 34,
    category: "Proteins",
    name: "Pepper Turkey",
    price: 6500,
  },
  {
    id: 35,
    category: "Proteins",
    name: "Pepper Chicken",
    price: 4000,
  },
  {
    id: 36,
    category: "Proteins",
    name: "Drumstick",
    price: 3000,
  },
  {
    id: 37,
    category: "Proteins",
    name: "Boiled Egg",
    price: 500,
  },
  {
    id: 38,
    category: "Proteins",
    name: "Fried Eggs (2)",
    price: 1000,
  },
  {
    id: 39,
    category: "Proteins",
    name: "Plantain",
    price: 1500,
  },

  // Swallows
  {
    id: 40,
    category: "Swallows",
    name: "Vegetable Soup + 2 Eba + 3 Pieces of Beef",
    price: 6500,
  },
  {
    id: 41,
    category: "Swallows",
    name: "Egusi Soup + 2 Eba + 3 Pieces of Beef",
    price: 6500,
  },
  {
    id: 42,
    category: "Swallows",
    name: "Okro Soup + 2 Eba + 3 Pieces of Beef",
    price: 6500,
  },

  // Extras
  {
    id: 43,
    category: "Extras",
    name: "Takeaway Plate",
    price: 400,
  },
];

/** The dishes shown in the hero / popular-dishes strip. */
export const featuredDishes: FeaturedDish[] = MENU.filter(
  (item): item is FeaturedDish => item.featured === true && !!item.image
);
