interface ProductCardProps {
  label?: string;
  id: number;
  name: string;
  price: number;
  image: string;
  handleClick: () => void;
}

export default function ProductCard({ label, handleClick, ...product }: ProductCardProps) {

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={product.image} alt='Product' />
      </div>
      <div className='product-info'>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{label}</p>
        <button onClick={handleClick}>Agregar a Carrito</button>
      </div>
    </div>
  )
}
