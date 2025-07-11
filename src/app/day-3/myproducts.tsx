type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  stock: number;
  brand: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Gaming Computer',
    description: 'A high-performance gaming computer with the latest graphics card and processor.',
    category: 'Electronics',
    price: 250000,
    image: 'https://source.unsplash.com/featured/?gaming,computer',
    stock: 10,
    brand: 'Alienware',
    rating: 4.7
  },
  {
    id: 2,
    name: 'Office Computer',
    description: 'A reliable office desktop perfect for productivity and multitasking.',
    category: 'Electronics',
    price: 180000,
    image: 'https://source.unsplash.com/featured/?office,computer',
    stock: 25,
    brand: 'Dell',
    rating: 4.3
  },
  {
    id: 3,
    name: 'Ultra HD Television',
    description: '55-inch 4K Ultra HD Smart TV with HDR support and streaming apps.',
    category: 'Electronics',
    price: 5000,
    image: 'https://source.unsplash.com/featured/?television',
    stock: 15,
    brand: 'Samsung',
    rating: 4.6
  },
  {
    id: 4,
    name: 'All-in-One Computer',
    description: 'Space-saving all-in-one computer with touchscreen and wireless keyboard.',
    category: 'Electronics',
    price: 220000,
    image: 'https://source.unsplash.com/featured/?all-in-one,computer',
    stock: 8,
    brand: 'HP',
    rating: 4.4
  },
  {
    id: 5,
    name: 'Compact Desktop',
    description: 'Compact desktop PC suitable for home and student use.',
    category: 'Electronics',
    price: 120000,
    image: 'https://source.unsplash.com/featured/?desktop,computer',
    stock: 30,
    brand: 'Lenovo',
    rating: 4.2
  }
];

export default products;
