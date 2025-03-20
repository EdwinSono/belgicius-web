export interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  handleClick: () => void;
}

export interface ProductCardProps {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  handleClick: () => void;
}
