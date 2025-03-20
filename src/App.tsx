import './App.css'
import { ProductCard } from './components'
import { useFetch } from './hooks/useFetch'
import { ProductProps } from './types/products'
interface AppProps {
  name: string;
}

function App({name}: AppProps) {
  const handleClick = (product: unknown) => {
    console.log(`App.tsx ${product}`)
  }

  const {
    data: products,
    error,
    loading,
  } = useFetch<ProductProps[]>("https://fakestoreapi.com/products");
  
  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>Error: {JSON.stringify(error)}</h1>
  }

  return (
    <main className="max-w-[1110px] mx-auto">
      <h1 className="text-3xl font-bold underline">
        {name}!
      </h1>
      <section className="new-arrivals">
        <h2 className="uppercase font-extrabold text-center mb-[30px] text[38px]">
          New arrivals
        </h2>
        <div className="list grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4">
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} handleClick={() => handleClick(product)} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
