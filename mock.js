"// Mock data for Cafe Point website

export const cafeInfo = {
  name: \"Point Cafe\",
  tagline: \"Always On Point\",
  description: \"Tempat terbaik untuk menikmati kopi berkualitas dan makanan lezat di jantung kota Magelang\",
  address: \"Kedungsari, Magelang Utara, Magelang City, Central Java 56116\",
  phone: \"+62 812-3456-7890\",
  email: \"hello@pointcafe.com\",
  hours: \"09:00 - 21:00\",
  social: {
    instagram: \"https://instagram.com/pointcafe\",
    facebook: \"https://facebook.com/pointcafe\",
    whatsapp: \"https://wa.me/6281234567890\"
  }
};

export const menuCategories = [\"All\", \"Coffee\", \"Non-Coffee\", \"Food\"];

export const menuItems = [
  // Coffee
  {
    id: 1,
    name: \"Espresso\",
    category: \"Coffee\",
    price: 18000,
    description: \"Rich and bold single shot\",
    image: \"https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },
  {
    id: 2,
    name: \"Cappuccino\",
    category: \"Coffee\",
    price: 28000,
    description: \"Espresso dengan foam susu sempurna\",
    image: \"https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: true
  },
  {
    id: 3,
    name: \"Cafe Latte\",
    category: \"Coffee\",
    price: 32000,
    description: \"Smooth espresso dengan steamed milk\",
    image: \"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },
  {
    id: 4,
    name: \"Flat White\",
    category: \"Coffee\",
    price: 30000,
    description: \"Velvety microfoam dengan espresso\",
    image: \"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    featured: false
  },
  {
    id: 5,
    name: \"Mocha\",
    category: \"Coffee\",
    price: 35000,
    description: \"Coffee dengan cokelat premium\",
    image: \"https://images.pexels.com/photos/17506073/pexels-photo-17506073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    featured: false
  },
  {
    id: 6,
    name: \"Americano\",
    category: \"Coffee\",
    price: 25000,
    description: \"Espresso dengan air panas\",
    image: \"https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },

  // Non-Coffee
  {
    id: 7,
    name: \"Matcha Latte\",
    category: \"Non-Coffee\",
    price: 32000,
    description: \"Premium Japanese matcha\",
    image: \"https://images.pexels.com/photos/17506073/pexels-photo-17506073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    featured: false
  },
  {
    id: 8,
    name: \"Chocolate\",
    category: \"Non-Coffee\",
    price: 28000,
    description: \"Rich Belgian chocolate\",
    image: \"https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },
  {
    id: 9,
    name: \"Thai Tea\",
    category: \"Non-Coffee\",
    price: 25000,
    description: \"Authentic Thai tea premium\",
    image: \"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    featured: false
  },
  {
    id: 10,
    name: \"Fresh Juice\",
    category: \"Non-Coffee\",
    price: 22000,
    description: \"Jus buah segar pilihan\",
    image: \"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },

  // Food
  {
    id: 11,
    name: \"Bistik Babi\",
    category: \"Food\",
    price: 65000,
    description: \"Menu signature kami! Bistik babi premium dengan saus special\",
    image: \"https://images.pexels.com/photos/34452177/pexels-photo-34452177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    featured: true,
    signature: true
  },
  {
    id: 12,
    name: \"Avocado Toast\",
    category: \"Food\",
    price: 38000,
    description: \"Roti panggang dengan alpukat segar\",
    image: \"https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxjYWZlJTIwZm9vZHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },
  {
    id: 13,
    name: \"Croissant\",
    category: \"Food\",
    price: 25000,
    description: \"Croissant butter premium\",
    image: \"https://images.unsplash.com/photo-1609590981063-d495e2914ce4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxjYWZlJTIwZm9vZHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },
  {
    id: 14,
    name: \"Pasta Carbonara\",
    category: \"Food\",
    price: 45000,
    description: \"Pasta creamy dengan bacon\",
    image: \"https://images.pexels.com/photos/34452177/pexels-photo-34452177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    featured: false
  },
  {
    id: 15,
    name: \"Club Sandwich\",
    category: \"Food\",
    price: 42000,
    description: \"Triple decker sandwich lengkap\",
    image: \"https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxjYWZlJTIwZm9vZHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  },
  {
    id: 16,
    name: \"Cake Slice\",
    category: \"Food\",
    price: 28000,
    description: \"Homemade cake pilihan chef\",
    image: \"https://images.unsplash.com/photo-1609590981063-d495e2914ce4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxjYWZlJTIwZm9vZHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: \"Budi Santoso\",
    role: \"Regular Customer\",
    image: \"https://i.pravatar.cc/150?img=12\",
    rating: 5,
    comment: \"Bistik babinya juara! Tempat favoritku untuk hangout di Magelang. Kopinya juga enak banget!\"
  },
  {
    id: 2,
    name: \"Siti Rahma\",
    role: \"Coffee Enthusiast\",
    image: \"https://i.pravatar.cc/150?img=45\",
    rating: 5,
    comment: \"Cappuccino terbaik di Magelang. Barista nya ramah dan tempatnya cozy banget buat kerja.\"
  },
  {
    id: 3,
    name: \"Andi Pratama\",
    role: \"Food Blogger\",
    image: \"https://i.pravatar.cc/150?img=33\",
    rating: 5,
    comment: \"Point Cafe selalu konsisten dengan kualitas. Menu signature bistik babi wajib dicoba!\"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: \"https://images.unsplash.com/photo-1689037676470-b72230d5236e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNjU1MzM4fDA&ixlib=rb-4.1.0&q=85\",
    alt: \"Point Cafe Interior\"
  },
  {
    id: 2,
    url: \"https://images.unsplash.com/photo-1611323128401-faa8f1b6de24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNjU1MzM4fDA&ixlib=rb-4.1.0&q=85\",
    alt: \"Cozy Atmosphere\"
  },
  {
    id: 3,
    url: \"https://images.pexels.com/photos/29394552/pexels-photo-29394552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",
    alt: \"Modern Space\"
  },
  {
    id: 4,
    url: \"https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    alt: \"Coffee Art\"
  },
  {
    id: 5,
    url: \"https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxjYWZlJTIwZm9vZHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    alt: \"Delicious Food\"
  },
  {
    id: 6,
    url: \"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85\",
    alt: \"Specialty Drinks\"
  }
];

// Cart functionality for local storage
export const cartStorage = {
  getCart: () => {
    const cart = localStorage.getItem('pointCafeCart');
    return cart ? JSON.parse(cart) : [];
  },
  
  setCart: (cart) => {
    localStorage.setItem('pointCafeCart', JSON.stringify(cart));
  },
  
  addToCart: (item) => {
    const cart = cartStorage.getCart();
    const existingItem = cart.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    
    cartStorage.setCart(cart);
    return cart;
  },
  
  removeFromCart: (itemId) => {
    let cart = cartStorage.getCart();
    cart = cart.filter(i => i.id !== itemId);
    cartStorage.setCart(cart);
    return cart;
  },
  
  updateQuantity: (itemId, quantity) => {
    const cart = cartStorage.getCart();
    const item = cart.find(i => i.id === itemId);
    
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        return cartStorage.removeFromCart(itemId);
      }
    }
    
    cartStorage.setCart(cart);
    return cart;
  },
  
  clearCart: () => {
    localStorage.removeItem('pointCafeCart');
    return [];
  },
  
  getTotal: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};
"