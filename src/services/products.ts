import image from '../assets/products/product.png';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.00,
    image,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20.00,
    image,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30.00,
    image,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 40.00,
    image,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 50.00,
    image,
  },
]
