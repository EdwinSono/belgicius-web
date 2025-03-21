import { ProductProps } from '../../types/products';
export default function ProductCard({ handleClick, ...product }: ProductProps) {

  return (
    <div className="flex flex-wrap items-center flex-col">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-[120px]"
        />
      </div>
      <div className="product-information">
        <h3 className="text-lg whitespace-nowrap overflow-hidden overflow-ellipsis w-[250px]">
          {product.title}
          </h3>
        <p className="font-bold text-[22px] bg-super-red">${product.price}</p>
        <button onClick={handleClick}>Agregar a Carrito</button>
      </div>
    </div>
  )
}
