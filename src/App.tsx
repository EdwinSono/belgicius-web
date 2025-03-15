import './App.css'

function App({name}: {name: string}) {
  console.log('App.tsx')

  return (
    <>
      <h1>App web</h1>
      <div className="card">
        <p>
          Hola <span role="img" aria-label="wave">👋</span> {name}
        </p>
      </div>
    </>
  )
}

export default App
