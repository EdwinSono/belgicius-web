import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button'

function App({name}: {name: string}) {
  const [contador, setContador] = useState<number>(0)

  useEffect(() => {
    console.log('App.tsx')
  }, [])

  useEffect(() => {
    console.log('actualizar componente')

    return () => {
      console.log('desmontado')
    }
  }, [contador])

  const handleClick = () => {
    console.log('Button.tsx')
    alert(`Button ${name}`)
  }

  return (
    <>
      <h1>App web</h1>
      <div className="card">
        <p>
          Hola <span role="img" aria-label="wave">👋</span> {name}
        </p>
        <p>{contador}</p>
        <section>
          <h1>Lista de botones</h1>
          <Button label="Button" handleClick={handleClick}/>
          <Button />
          <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </section>
      </div>
    </>
  )
}

export default App
