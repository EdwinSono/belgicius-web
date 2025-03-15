import './App.css'
import { products, Product } from './services/products'
import { ProductCard } from './components'

interface AppProps {
  name: string;
}

function App({name}: AppProps) {

  const handleClick = (product: Product) => {
    console.log(`App.tsx ${product.name}`)
    // alert(`Button ${product.name}`)
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        {name}!
      </h1>
      <section className='new-arrivals'>
        <h2>New arrivals</h2>
        <div className='list'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} handleClick={() => handleClick(product)} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
